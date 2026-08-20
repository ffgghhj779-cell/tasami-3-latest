Add-Type -AssemblyName System.Drawing

$root = "C:\Users\lenovo\Desktop\tasami 3 latest"
$srcPath = Join-Path $root "public\logo.png"
$lockupOut = Join-Path $root "public\logo.png"
$markOut = Join-Path $root "public\logo-mark.png"

$src = New-Object System.Drawing.Bitmap $srcPath
$w = [int]$src.Width
$h = [int]$src.Height
Write-Output "source ${w}x${h}"

function Test-Bg([System.Drawing.Color]$c) {
  return ($c.A -gt 0 -and $c.R -ge 238 -and $c.G -ge 238 -and $c.B -ge 238)
}

function Invoke-FloodClear([System.Drawing.Bitmap]$bmp) {
  $bw = $bmp.Width
  $bh = $bmp.Height
  $seen = New-Object 'bool[,]' $bw, $bh
  $q = New-Object System.Collections.Generic.Queue[object]

  for ($x = 0; $x -lt $bw; $x++) {
    $q.Enqueue(@($x, 0)); $q.Enqueue(@($x, ($bh - 1)))
  }
  for ($y = 0; $y -lt $bh; $y++) {
    $q.Enqueue(@(0, $y)); $q.Enqueue(@(($bw - 1), $y))
  }

  $clear = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
  while ($q.Count -gt 0) {
    $p = $q.Dequeue()
    $x = [int]$p[0]; $y = [int]$p[1]
    if ($x -lt 0 -or $y -lt 0 -or $x -ge $bw -or $y -ge $bh) { continue }
    if ($seen[$x, $y]) { continue }
    $seen[$x, $y] = $true
    $c = $bmp.GetPixel($x, $y)
    if (-not (Test-Bg $c)) { continue }
    $bmp.SetPixel($x, $y, $clear)
    $q.Enqueue(@(($x + 1), $y))
    $q.Enqueue(@(($x - 1), $y))
    $q.Enqueue(@($x, ($y + 1)))
    $q.Enqueue(@($x, ($y - 1)))
  }

  # Soften leftover white fringe on the silhouette
  for ($y = 1; $y -lt ($bh - 1); $y++) {
    for ($x = 1; $x -lt ($bw - 1); $x++) {
      $c = $bmp.GetPixel($x, $y)
      if ($c.A -eq 0) { continue }
      $whiteish = ($c.R -ge 220 -and $c.G -ge 220 -and $c.B -ge 220)
      if (-not $whiteish) { continue }
      $n0 = $bmp.GetPixel(($x - 1), $y).A -eq 0
      $n1 = $bmp.GetPixel(($x + 1), $y).A -eq 0
      $n2 = $bmp.GetPixel($x, ($y - 1)).A -eq 0
      $n3 = $bmp.GetPixel($x, ($y + 1)).A -eq 0
      if ($n0 -or $n1 -or $n2 -or $n3) {
        $bmp.SetPixel($x, $y, $clear)
      }
    }
  }
}

Invoke-FloodClear $src

$minX = $w; $minY = $h; $maxX = 0; $maxY = 0
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    if ($src.GetPixel($x, $y).A -gt 8) {
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}
Write-Output "opaque box $minX,$minY - $maxX,$maxY"

function Copy-Padded([System.Drawing.Bitmap]$bmp, [int]$x, [int]$y, [int]$cw, [int]$ch, [int]$pad) {
  $ow = $cw + (2 * $pad)
  $oh = $ch + (2 * $pad)
  $out = New-Object System.Drawing.Bitmap ([int]$ow), ([int]$oh), ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($out)
  $g.Clear([System.Drawing.Color]::Transparent)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($bmp, $pad, $pad, $cw, $ch)
  # drawImage of full bmp scaled is wrong — copy the crop
  $g.Clear([System.Drawing.Color]::Transparent)
  $srcRect = New-Object System.Drawing.Rectangle ([int]$x), ([int]$y), ([int]$cw), ([int]$ch)
  $dstRect = New-Object System.Drawing.Rectangle ([int]$pad), ([int]$pad), ([int]$cw), ([int]$ch)
  $g.DrawImage($bmp, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  return $out
}

$padL = 16
$lw = ($maxX - $minX + 1)
$lh = ($maxY - $minY + 1)
$lockup = Copy-Padded $src $minX $minY $lw $lh $padL

# Icon is the top ~48% of the lockup content
$iconBottom = [int]($minY + (($maxY - $minY) * 0.48))
$ix0 = $w; $iy0 = $h; $ix1 = 0; $iy1 = 0
for ($y = $minY; $y -le $iconBottom; $y++) {
  for ($x = $minX; $x -le $maxX; $x++) {
    if ($src.GetPixel($x, $y).A -gt 8) {
      if ($x -lt $ix0) { $ix0 = $x }
      if ($y -lt $iy0) { $iy0 = $y }
      if ($x -gt $ix1) { $ix1 = $x }
      if ($y -gt $iy1) { $iy1 = $y }
    }
  }
}
$iw = $ix1 - $ix0 + 1
$ih = $iy1 - $iy0 + 1
$side = [Math]::Max($iw, $ih) + 48
$cx = [int](($ix0 + $ix1) / 2)
$cy = [int](($iy0 + $iy1) / 2)
$sx = [int][Math]::Max(0, $cx - [int]($side / 2))
$sy = [int][Math]::Max(0, $cy - [int]($side / 2))
if (($sx + $side) -gt $w) { $sx = $w - $side }
if (($sy + $side) -gt $h) { $sy = $h - $side }
if ($sx -lt 0) { $sx = 0 }
if ($sy -lt 0) { $sy = 0 }
$side = [int][Math]::Min($side, [Math]::Min(($w - $sx), ($h - $sy)))
Write-Output "mark $sx,$sy $side"

$mark = Copy-Padded $src $sx $sy $side $side 20

$tmpL = Join-Path $root "public\logo.tmp.png"
$tmpM = Join-Path $root "public\logo-mark.tmp.png"
$lockup.Save($tmpL, [System.Drawing.Imaging.ImageFormat]::Png)
$mark.Save($tmpM, [System.Drawing.Imaging.ImageFormat]::Png)
$lockup.Dispose()
$mark.Dispose()
$src.Dispose()

Move-Item -Force $tmpL $lockupOut
Move-Item -Force $tmpM $markOut
Write-Output "done"
