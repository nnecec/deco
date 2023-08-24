import { useAtom } from 'jotai'

import { Label, Slider } from '~/core/ui'

import { photoBorderRadiusAtom } from '../store'

export const PhotoBorderRadius = () => {
  const [borderRadius, setBorderRadius] = useAtom(photoBorderRadiusAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="text-neutral-400 text-xs flex justify-between">
        <Label htmlFor="border-radius" className="text-xs">
          Rounded
        </Label>
        <span>{borderRadius}px</span>
      </div>
      <Slider id="border-radius" onValueChange={value => setBorderRadius(value[0])} value={[borderRadius]} />
    </div>
  )
}
