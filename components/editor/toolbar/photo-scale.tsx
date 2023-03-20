import { useAtom } from 'jotai'

import { Radio, RadioGroup, Slider } from '../../ui'
import {
  boardAspectRatioAtom,
  boardBackgroundAtom,
  photoBorderRadiusAtom,
  photoScaleAtom,
} from '../store'

export const PhotoScale = () => {
  const [scale, setScale] = useAtom(photoScaleAtom)

  return <Slider label="Photo scale" value={scale} onChange={setScale} />
}
