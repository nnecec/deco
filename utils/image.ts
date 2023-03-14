import sharp from 'sharp'
import exifr from 'exifr'

import { exifToHuman } from '~/utils/parser'

export const getMetadata = async (image: File) => {
  const input = Buffer.from(await image.arrayBuffer())
  const info = await exifr.parse(input)
  const jpeg = await sharp(input).jpeg().toBuffer()
  return {
    metadata: exifToHuman(info),
    jpeg: jpeg.toString('base64')
  }
}