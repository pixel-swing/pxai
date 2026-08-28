Add-Type -AssemblyName System.Drawing

$size = 64
$bitmap = [System.Drawing.Bitmap]::new($size, $size)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::None
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half

$graphics.Clear([System.Drawing.Color]::FromArgb(0, 0, 0))
$blocks = @(
  @{ X = 8;  Y = 8;  Color = '#FCFCFC' },
  @{ X = 36; Y = 8;  Color = '#E40058' },
  @{ X = 8;  Y = 36; Color = '#0058F8' },
  @{ X = 36; Y = 36; Color = '#00A844' }
)

foreach ($block in $blocks) {
  $brush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($block.Color))
  $graphics.FillRectangle($brush, $block.X, $block.Y, 20, 20)
  $brush.Dispose()
}

$pngStream = [System.IO.MemoryStream]::new()
$bitmap.Save($pngStream, [System.Drawing.Imaging.ImageFormat]::Png)
$pngBytes = $pngStream.ToArray()

$faviconPath = Join-Path $PSScriptRoot '..\app\favicon.ico'
$fileStream = [System.IO.File]::Create($faviconPath)
$writer = [System.IO.BinaryWriter]::new($fileStream)
$writer.Write([uint16]0)
$writer.Write([uint16]1)
$writer.Write([uint16]1)
$writer.Write([byte]$size)
$writer.Write([byte]$size)
$writer.Write([byte]0)
$writer.Write([byte]0)
$writer.Write([uint16]1)
$writer.Write([uint16]32)
$writer.Write([uint32]$pngBytes.Length)
$writer.Write([uint32]22)
$writer.Write($pngBytes)

$writer.Dispose()
$fileStream.Dispose()
$pngStream.Dispose()
$graphics.Dispose()
$bitmap.Dispose()
