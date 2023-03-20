import { useAtom } from 'jotai'

import { Radio, RadioGroup, Slider } from '../../ui'
import {
  boardAspectRatioAtom,
  boardBackgroundAtom,
  photoBorderRadiusAtom,
  photoScaleAtom,
} from '../store'

export const BoardAspectRatio = () => {
  const [aspectRatio, setAspectRatio] = useAtom(boardAspectRatioAtom)

  return (
    <RadioGroup label="比例" value={aspectRatio} onChange={e => setAspectRatio(e)}>
      {[
        { label: 'Adjust', value: '' },
        { label: '1:1', value: '1/1' },
        { label: '4:3', value: '4/3' },
        { label: '3:4', value: '3/4' },
        { label: '3:2', value: '3/2' },
        { label: '2:3', value: '2/3' },
      ].map(({ label, value }) => (
        <Radio key={value} value={value}>
          {label}
        </Radio>
      ))}
    </RadioGroup>
  )
}
