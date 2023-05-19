import { useAtom } from 'jotai'

import { Slider } from '../../ui'
import { photoBorderRadiusAtom } from '../store'

export const PhotoBorderRadius = () => {
  const [borderRadius, setBorderRadius] = useAtom(photoBorderRadiusAtom)

  return (
    <div>
      <h5 className="text-sm text-stone-400">Border</h5>
      <Slider value={[borderRadius]} onValueChange={value => setBorderRadius(value[0])} />
    </div>
  )
}
