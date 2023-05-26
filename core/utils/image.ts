import exifr from 'exifr'

// import sharp from 'sharp'
import { exifToHuman } from '~/core/utils/exif'

export const getMetadata = async (image: File) => {
  const input = Buffer.from(await image.arrayBuffer())
  const info = await exifr.parse(input)
  // const jpeg = await sharp(input).jpeg().toBuffer()
  return {
    metadata: exifToHuman(info),
    // jpeg: jpeg.toString('base64'),
  }
}
