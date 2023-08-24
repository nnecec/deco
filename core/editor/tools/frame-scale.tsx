import { useAtom } from 'jotai'

import { Label, Slider } from '~/core/ui'

import { frameScaleAtom } from '../store'

export const FrameScale = () => {
  const [scale, setScale] = useAtom(frameScaleAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs" htmlFor="frame-scale">
          Scale
        </Label>
        <span>{scale.toFixed(2)}</span>
      </div>
      <Slider
        onValueChange={value => {
          setScale(value[0])
        }}
        id="frame-scale"
        inverted
        max={1}
        min={0.6}
        step={0.01}
        value={[scale]}
      />
    </div>
  )
}
