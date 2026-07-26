Add-Type -AssemblyName System.Drawing

$srcPath = "d:\Car-Max-Mlr\car-max\public\porsche_front.png"
$outPath = "d:\Car-Max-Mlr\car-max\public\porsche_front_16_9.png"

$img = [System.Drawing.Image]::FromFile($srcPath)

$canvasW = 1920
$canvasH = 1080

$bmp = New-Object System.Drawing.Bitmap $canvasW, $canvasH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Fill background with dark showroom color (#050608)
$bgColor = [System.Drawing.Color]::FromArgb(255, 5, 6, 8)
$bgBrush = New-Object System.Drawing.SolidBrush $bgColor
$g.FillRectangle($bgBrush, 0, 0, $canvasW, $canvasH)

# Draw image centered
$scale = $canvasH / $img.Height
$drawW = [int]($img.Width * $scale)
$drawH = $canvasH
$posX = [int](($canvasW - $drawW) / 2)

$g.DrawImage($img, $posX, 0, $drawW, $drawH)

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Canvas expanded to native 16:9 ratio (1920x1080) at car-max/public/porsche_front_16_9.png!"
