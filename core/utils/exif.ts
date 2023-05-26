export const exifToHuman = exif => {
  return {
    brand: exif.Make,
    model: exif.Model,
    iso: exif.ISO,
    f: exif.FNumber,
    focalLength: exif.FocalLengthIn35mmFormat,
    shutterSpeed: Math.floor((1 / exif.ShutterSpeedValue) * 1000),
    originTime: exif.DateTimeOriginal,
    latitude: Array.isArray(exif.GPSLatitude)
      ? `${exif.GPSLatitude[0]}°${exif.GPSLatitude[1]}'${exif.GPSLatitude[2]}"N`
      : undefined,
    longitude: Array.isArray(exif.GPSLongitude)
      ? `${exif.GPSLongitude[0]}°${exif.GPSLongitude[1]}'${exif.GPSLongitude[2]}"E`
      : undefined,
  }
}
