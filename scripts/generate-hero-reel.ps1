# Build Tasami hero story — static frames only (no zoom/pan shake).
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$public = Join-Path $root "public\visuals"
$reel = Join-Path $public "reel"
$tmp = Join-Path $env:TEMP "tasami-hero-story"
$assets = "C:\Users\lenovo\.cursor\projects\c-Users-lenovo-Desktop-tasami-3-latest\assets"

New-Item -ItemType Directory -Force -Path $reel | Out-Null
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

$frames = @(
  @{ name = "reel-01-exterior.png"; sec = 3.8 },
  @{ name = "reel-02-arrive.png";   sec = 3.4 },
  @{ name = "reel-03-enter.png";    sec = 3.4 },
  @{ name = "reel-04-consult.png";  sec = 3.6 },
  @{ name = "reel-05-complete.png"; sec = 3.2 },
  @{ name = "reel-06-done.png";     sec = 3.4 }
)

foreach ($f in $frames) {
  $src = Join-Path $reel $f.name
  if (-not (Test-Path $src)) {
    $found = Get-ChildItem $assets -Filter $f.name | Select-Object -First 1
    if (-not $found) { throw "Missing $($f.name)" }
    [System.IO.File]::Copy("\\?\$($found.FullName)", "\\?\$src", $true)
  }
}

Copy-Item (Join-Path $reel "reel-01-exterior.png") (Join-Path $public "hero-plate.png") -Force

$vf = "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,format=yuv420p"
$clips = @()
for ($i = 0; $i -lt $frames.Count; $i++) {
  $f = $frames[$i]
  $src = Join-Path $reel $f.name
  $dst = Join-Path $tmp ("clip-{0:d2}.mp4" -f $i)
  & ffmpeg -y -loop 1 -i $src -t $f.sec -vf $vf -r 25 -an -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p $dst
  if ($LASTEXITCODE -ne 0) { throw "clip $i failed" }
  $clips += $dst
}

$fade = 0.55
$ffArgs = @("-y")
foreach ($c in $clips) { $ffArgs += @("-i", $c) }
$parts = @()
$prev = "[0:v]"
$offset = $frames[0].sec - $fade
for ($j = 1; $j -lt $clips.Count; $j++) {
  $out = if ($j -eq $clips.Count - 1) { "[vout]" } else { "[v$j]" }
  $parts += ($prev + "[${j}:v]xfade=transition=fade:duration=${fade}:offset=${offset}" + $out)
  $prev = $out
  $offset += $frames[$j].sec - $fade
}
$merged = Join-Path $tmp "merged.mp4"
& ffmpeg @ffArgs -filter_complex ($parts -join ";") -map "[vout]" -an -c:v libx264 -preset veryfast -crf 20 -pix_fmt yuv420p -movflags +faststart $merged
if ($LASTEXITCODE -ne 0) { throw "merge failed" }

$mp4 = Join-Path $public "hero.mp4"
$webm = Join-Path $public "hero.webm"
Copy-Item $merged $mp4 -Force
& ffmpeg -y -i $mp4 -c:v libvpx-vp9 -b:v 1.4M -deadline realtime -cpu-used 8 -row-mt 1 -an $webm
if ($LASTEXITCODE -ne 0) { throw "webm failed" }

Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
Write-Host ("Done mp4={0} webm={1}" -f (Get-Item $mp4).Length, (Get-Item $webm).Length)
