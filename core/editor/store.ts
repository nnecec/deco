import { atom } from 'jotai'

export const photoSrcAtom = atom('')

export const boardAspectRatioAtom = atom({ w: 1, h: 1 })
export const boardBackgroundColorAtom = atom({ r: 255, g: 255, b: 255, a: 1 })
export const boardBackgroundImageAtom = atom('none')

export const photoBorderRadiusAtom = atom(0)
export const photoScaleAtom = atom(0)
