# Build Tasami hero — real stock footage montage (Arab / Gulf businessmen, not still frames).
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$public = Join-Path $root "public\visuals"
$tmp = Join-Path $env:TEMP "tasami-hero-stock"
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

# Story: office exterior → Arab client arrives → enters → consult → paperwork → done
$clips = @(
  @{ file = "01-exterior.mp4"; url = "https://assets.mixkit.co/videos/40644/40644-720.mp4"; max = 3.0 },
  @{ file = "02-arrive.mp4";   url = "https://assets.mixkit.co/videos/9063/9063-720.mp4"; max = 3.2 },
  @{ file = "03-office.mp4";    url = "https://assets.mixkit.co/videos/9152/9152-720.mp4"; max = 3.5 },
  @{ file = "04-consult.mp4";   url = "https://assets.mixkit.co/videos/9167/9167-720.mp4"; max = 3.2 },
  @{ file = "05-sign.mp4";      url = "https://assets.mixkit.co/videos/8778/8778-720.mp4"; max = 3.2 },
  @{ file = "06-done.mp4";      url = "https://assets.mixkit.co/videos/8941/8941-720.mp4"; max = 3.0 }
)

foreach ($c in $clips) {
  $out = Join-Path $tmp $c.file
  Write-Host "Downloading $($c.file)..."
  Invoke-WebRequest -Uri $c.url -OutFile $out -UseBasicParsing
}

$norm = @()
$i = 0
foreach ($c in $clips) {
  $src = Join-Path $tmp $c.file
  $dst = Join-Path $tmp ("n{0}.mp4" -f $i)
  & ffmpeg -y -i $src -t $c.max -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,format=yuv420p" -an -c:v libx264 -preset veryfast -crf 22 -r 25 -pix_fmt yuv420p $dst
  if ($LASTEXITCODE -ne 0) { throw "normalize $i failed" }
  $norm += $dst
  $i++
}

$fade = 0.4
$args = @("-y")
foreach ($n in $norm) { $args += @("-i", $n) }
$parts = @()
$prev = "[0:v]"
$durations = @(3.0, 3.2, 3.5, 3.2, 3.2, 3.0)
$offset = $durations[0] - $fade
for ($j = 1; $j -lt $norm.Count; $j++) {
  $out = if ($j -eq $norm.Count - 1) { "[vout]" } else { "[v$j]" }
  $parts += "${prev}[$j`:v]xfade=transition=fade:duration=${fade}:offset=${offset}${out}"
  $prev = $out
  $offset += $durations[$j] - $fade
}

$merged = Join-Path $tmp "hero-full.mp4"
& ffmpeg @args -filter_complex ($parts -join ";") -map "[vout]" -an -c:v libx264 -preset veryfast -crf 21 -pix_fmt yuv420p -movflags +faststart $merged
if ($LASTEXITCODE -ne 0) { throw "merge failed" }

$hero = Join-Path $public "hero.mp4"
$mobile = Join-Path $public "hero-mobile.mp4"
$webm = Join-Path $public "hero.webm"
Copy-Item $merged $hero -Force

& ffmpeg -y -i $hero -vf "scale=854:480:force_original_aspect_ratio=increase,crop=854:480" -c:v libx264 -preset veryfast -crf 24 -an -movflags +faststart $mobile
& ffmpeg -y -i $hero -c:v libvpx-vp9 -b:v 1.0M -deadline realtime -cpu-used 8 -an $webm

$poster = Join-Path $public "hero-plate.png"
& ffmpeg -y -i $hero -ss 1.2 -vframes 1 -vf "scale=1536:1024:force_original_aspect_ratio=increase,crop=1536:1024" -update 1 $poster

Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "hero=$((Get-Item $hero).Length) mobile=$((Get-Item $mobile).Length) webm=$((Get-Item $webm).Length)"
