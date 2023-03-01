import dayjs from 'dayjs'
import { useAtom } from 'jotai'

import { logo } from '../assets'
import { styleAtom } from '../store'

export type WatermarkProps = {
  exif?: any
}
export const Watermark = ({ exif = {} }: WatermarkProps) => {
  const [style] = useAtom(styleAtom)

  if (!exif) return null

  return (
    <div className="flex justify-between bg-white p-[40px]">
      <div>
        <div className="text-lg font-bold text-black">
          {exif.brand} {exif.model}
        </div>
      </div>

      <div className="flex gap-[20px]">
        <img src={logo.zeiss} alt="" width={40} />
        <div className="border-r-1 w-[1px]"></div>
        <div>
          <div className="text-lg font-bold text-black">
            {exif.focalLength}mm f/{exif.f} {exif.shutterSpeed} ISO{exif.iso}
          </div>
          {/* <div className="text-gray-500">
            {exif.latitude} {exif.longitude}
          </div> */}
          <div className="text-gray-500">
            {dayjs().format('YYYY.MM.DD HH:mm:ss')}
          </div>
        </div>
      </div>
    </div>
  )
}
