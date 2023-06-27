import { atom } from 'jotai'

import { getColors } from '~/core/ui/color/generator'

// frame
export const frameModeAtom = atom('')
export const frameScaleAtom = atom(0)

// photo
export const photoSrcAtom = atom('')
export const photoBorderRadiusAtom = atom(0)
export const photoBlurVignetteInsetAtom = atom(0)
export const photoBlurVignetteTransitionAtom = atom(0)
export const photoBlurVignetteBlurAtom = atom(0)

// board
export const boardAspectRatioAtom = atom({ h: 1, w: 1 })
export const boardBackgroundImageAtom = atom('none')

export const boardProminentColorsAtom = atom<Promise<any[]>>(async get => {
  const photo = get(photoSrcAtom)
  if (photo) {
    return await getColors(photo, { format: 'hex' })
  }
  return []
})

export const boardBackgroundColorAtom = atom({ a: 1, b: 200, g: 200, r: 200 })

// export const boardBackgroundColorAtom = atom(async get => {
//   const prominentColors = await get(boardProminentColorsAtom)
//   if (prominentColors.length > 0) {
//     return {
//       ...colord(prominentColors[Math.round(5 * Math.random())]).toRgb(),
//       a: 1,
//     }
//   }
//   return { r: 200, g: 200, b: 200, a: 1 }
// })
