import { useAtom } from 'jotai'

import { Slider } from '../../components/slider'
import { frameScaleAtom } from '../store'

export const FrameScale = () => {
  const [scale, setScale] = useAtom(frameScaleAtom)

  return (
    <div>
      <h5 className="text-sm text-stone-400">Scale</h5>
      <Slider
        value={[scale]}
        onValueChange={value => {
          setScale(value[0])
        }}
      />
    </div>
  )
}
