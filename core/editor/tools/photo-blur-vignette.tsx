import { useAtom } from 'jotai'

import { Slider } from '~/core/ui/slider'

import {
  photoBlurVignetteBlurAtom,
  photoBlurVignetteInsetAtom,
  photoBlurVignetteTransitionAtom,
} from '../store'

export const PhotoBlurVignette = () => {
  const [blur, setBlur] = useAtom(photoBlurVignetteBlurAtom)
  const [inset, setInset] = useAtom(photoBlurVignetteInsetAtom)
  const [transition, setTransition] = useAtom(photoBlurVignetteTransitionAtom)

  return (
    <div>
      <h5 className="text-sm text-stone-400">Blur Vignette</h5>
      <Slider onValueChange={value => setInset(value[0])} value={[inset]} />
      <Slider onValueChange={value => setTransition(value[0])} value={[transition]} />
      <Slider onValueChange={value => setBlur(value[0])} value={[blur]} />
    </div>
  )
}
