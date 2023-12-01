import { useAtom } from 'jotai'

import { Label, Slider } from '~/core/ui'

import { photoBorderRadiusAtom } from '../store'

export const PhotoBorderRadius = () => {
  const [borderRadius, setBorderRadius] = useAtom(photoBorderRadiusAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs" htmlFor="border-radius">
          Rounded
        </Label>
        <span>{borderRadius}px</span>
      </div>
      <Slider id="border-radius" onValueChange={value => setBorderRadius(value[0]!)} value={[borderRadius]} />
    </div>
  )
}
