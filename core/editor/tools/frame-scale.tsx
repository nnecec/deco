import { useAtom } from 'jotai'

import { Label, Slider } from '~/core/ui'

import { frameScaleAtom } from '../store'

export const FrameScale = () => {
  const [scale, setScale] = useAtom(frameScaleAtom)

  return (
    <div>
      <Label htmlFor="frame-scale">Scale</Label>
      <Slider
        onValueChange={value => {
          setScale(value[0])
        }}
        id="frame-scale"
        value={[scale]}
      />
    </div>
  )
}
