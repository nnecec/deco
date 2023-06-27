import { useAtom } from 'jotai'

import { Slider } from '../../ui/slider'
import { frameScaleAtom } from '../store'

export const FrameScale = () => {
  const [scale, setScale] = useAtom(frameScaleAtom)

  return (
    <div>
      <h5 className="text-sm text-stone-400">Scale</h5>
      <Slider
        onValueChange={value => {
          setScale(value[0])
        }}
        value={[scale]}
      />
    </div>
  )
}
