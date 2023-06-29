import { useAtom } from 'jotai'

import { Label, Slider } from '~/core/ui'

import { photoBorderRadiusAtom } from '../store'

export const PhotoBorderRadius = () => {
  const [borderRadius, setBorderRadius] = useAtom(photoBorderRadiusAtom)

  return (
    <div>
      <Label htmlFor="border-radius">Rounded</Label>
      <Slider id="border-radius" onValueChange={value => setBorderRadius(value[0])} value={[borderRadius]} />
    </div>
  )
}
