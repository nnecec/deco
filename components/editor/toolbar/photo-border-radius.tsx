import { useAtom } from 'jotai'

import { Radio, RadioGroup, Slider } from '../../ui'
import {
  boardAspectRatioAtom,
  boardBackgroundAtom,
  photoBorderRadiusAtom,
  photoScaleAtom,
} from '../store'

export const PhotoBorderRadius = () => {
  const [borderRadius, setBorderRadius] = useAtom(photoBorderRadiusAtom)

  return <Slider label="Photo round" value={borderRadius} onChange={setBorderRadius} />
}
