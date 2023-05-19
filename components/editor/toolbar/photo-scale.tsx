import { useAtom } from 'jotai'

import { Slider } from '../../ui'
import { photoScaleAtom } from '../store'

export const PhotoScale = () => {
  const [scale, setScale] = useAtom(photoScaleAtom)

  return (
    <div>
      <h5 className="text-sm text-stone-400">Scale</h5>
      <Slider value={[scale]} onValueChange={value => setScale(value[0])} />
    </div>
  )
}
