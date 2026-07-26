Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('d:\Car-Max-Mlr\car-max\public\porsche_front.png')
$bmp = New-Object System.Drawing.Bitmap($img)

# Make dark background pixels transparent (threshold dark pixels outside the car contour)
$width = $bmp.Width
$height = $bmp.Height

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # If pixel is very dark background (R,G,B all below threshold 35 and outside car center)
        if ($c.R -lt 35 -and $c.G -lt 35 -and $c.B -lt 35) {
            # Check edge distance to preserve car body shadows
            if ($y -lt [int]($height * 0.70) -or $x -lt [int]($width * 0.15) -or $x -gt [int]($width * 0.85)) {
                $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            }
        }
    }
}

$bmp.Save('d:\Car-Max-Mlr\car-max\public\porsche_cutout.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()
Write-Host "Transparent cutout created at car-max/public/porsche_cutout.png!"
