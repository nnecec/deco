export const exifToHuman = (exif: any) => {
  return {
    brand: exif.Make,
    f: exif.FNumber,
    focalLength: exif.FocalLengthIn35mmFormat,
    iso: exif.ISO,
    latitude:
      Array.isArray(exif.GPSLatitude) ?
        `${exif.GPSLatitude[0]}°${exif.GPSLatitude[1]}'${exif.GPSLatitude[2]}"N`
      : undefined,
    longitude:
      Array.isArray(exif.GPSLongitude) ?
        `${exif.GPSLongitude[0]}°${exif.GPSLongitude[1]}'${exif.GPSLongitude[2]}"E`
      : undefined,
    model: exif.Model,
    originTime: exif.DateTimeOriginal,
    shutterSpeed: Math.floor((1 / exif.ShutterSpeedValue) * 1000),
  }
}
