import { atom } from 'jotai'

// board
export const boardAspectRatioAtom = atom({ w: 1, h: 1 })
export const boardBackgroundColorAtom = atom({ r: 255, g: 255, b: 255, a: 1 })
export const boardBackgroundImageAtom = atom('none')
// frame
export const frameModeAtom = atom('')
export const frameScaleAtom = atom(0)

// photo
export const photoSrcAtom = atom('')
export const photoBorderRadiusAtom = atom(0)
