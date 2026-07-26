Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('d:\Car-Max-Mlr\TurboTweak - Car Tuning Website.jpeg')
$w = $img.Width
$h = $img.Height

$cropX = [int]($w * 0.22)
$cropY = [int]($h * 0.18)
$cropW = [int]($w * 0.56)
$cropH = [int]($h * 0.65)

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save('d:\Car-Max-Mlr\car-max\public\turbotweak_car.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host "Car image cropped successfully to car-max/public/turbotweak_car.png!"
