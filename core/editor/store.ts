import { colord } from 'colord'
import { atom } from 'jotai'

import { getColors } from '~/core/utils/color/generator'

// frame
export const frameModeAtom = atom('no-frame')
export const frameScaleAtom = atom(1)

// photo
export const photoSrcAtom = atom('')
export const photoBorderRadiusAtom = atom(0)

export const photoBlurVignetteInsetAtom = atom(0)
export const photoBlurVignetteTransitionAtom = atom(0)
export const photoBlurVignetteBlurAtom = atom(0)

// board
export const boardPaddingAtom = atom({ x: 0, y: 0 })
export const boardBackgroundImageAtom = atom('none')
export const boardBackgroundMeshOffsetAtom = atom(1)
export const boardBackgroundMeshEnableAtom = atom(false)

export const boardProminentColorsAtom = atom<Promise<any[]>>(async get => {
  const photo = get(photoSrcAtom)
  if (photo) {
    return await getColors(photo, { parser: color => colord(color).toHex() })
  }
  return []
})

export const boardBackgroundColorAtom = atom({ a: 1, b: 255, g: 255, r: 255 })
