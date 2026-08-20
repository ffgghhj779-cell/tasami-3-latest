# Static frames + crossfade only — no zoompan (avoids vibration).
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$public = Join-Path $root "public\visuals"
$reel = Join-Path $public "reel"
$tmp = Join-Path $env:TEMP "tasami-saudi-hero"
$assets = "C:\Users\lenovo\.cursor\projects\c-Users-lenovo-Desktop-tasami-3-latest\assets"

New-Item -ItemType Directory -Force -Path $reel | Out-Null
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

$frames = @(
  @{ name = "saudi-01-exterior.png"; sec = 2.8 },
  @{ name = "saudi-02-arrive.png";   sec = 2.6 },
  @{ name = "saudi-02b-door.png";    sec = 2.4 },
  @{ name = "saudi-03-enter.png";    sec = 2.8 },
  @{ name = "saudi-04-consult.png";  sec = 2.8 },
  @{ name = "saudi-05-sign.png";     sec = 2.4 },
  @{ name = "saudi-05b-sign.png";    sec = 2.4 },
  @{ name = "saudi-06-done.png";     sec = 2.8 }
)

foreach ($f in $frames) {
  $src = Join-Path $assets $f.name
  $dst = Join-Path $reel $f.name
  if (Test-Path $src) {
    [System.IO.File]::Copy("\\?\$src", "\\?\$dst", $true)
  } elseif (-not (Test-Path $dst)) {
    throw "Missing $($f.name) in $assets or $reel"
  }
}

Copy-Item (Join-Path $reel "saudi-02-arrive.png") (Join-Path $public "hero-plate.png") -Force

$clips = @()
$durations = @()
for ($i = 0; $i -lt $frames.Count; $i++) {
  $f = $frames[$i]
  $src = Join-Path $reel $f.name
  $dst = Join-Path $tmp ("clip-{0:d2}.mp4" -f $i)
  $vf = "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,format=yuv420p"
  & ffmpeg -y -loop 1 -i $src -t $f.sec -vf $vf -r 25 -an -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p $dst
  if ($LASTEXITCODE -ne 0) { throw "clip $i failed" }
  $clips += $dst
  $durations += $f.sec
}

$fade = 0.7
$ffArgs = @("-y")
foreach ($c in $clips) { $ffArgs += @("-i", $c) }
$parts = @()
$prev = "[0:v]"
$offset = $durations[0] - $fade
for ($j = 1; $j -lt $clips.Count; $j++) {
  $out = if ($j -eq $clips.Count - 1) { "[vout]" } else { "[v$j]" }
  $parts += ($prev + "[${j}:v]xfade=transition=fade:duration=${fade}:offset=${offset}" + $out)
  $prev = $out
  $offset += $durations[$j] - $fade
}

$merged = Join-Path $tmp "merged.mp4"
& ffmpeg @ffArgs -filter_complex ($parts -join ";") -map "[vout]" -an -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -movflags +faststart $merged
if ($LASTEXITCODE -ne 0) { throw "merge failed" }

$hero = Join-Path $public "hero.mp4"
$mobile = Join-Path $public "hero-mobile.mp4"
$webm = Join-Path $public "hero.webm"
Copy-Item $merged $hero -Force

& ffmpeg -y -i $hero -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280" -c:v libx264 -preset veryfast -crf 24 -an -movflags +faststart $mobile
if ($LASTEXITCODE -ne 0) { throw "mobile failed" }

& ffmpeg -y -i $hero -c:v libvpx-vp9 -b:v 1.0M -deadline realtime -cpu-used 8 -an $webm
if ($LASTEXITCODE -ne 0) { throw "webm failed" }

Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "hero=$((Get-Item $hero).Length) mobile=$((Get-Item $mobile).Length) webm=$((Get-Item $webm).Length)"
