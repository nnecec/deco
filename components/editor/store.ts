import { atom } from 'jotai'

export const urlAtom = atom<string | undefined>('')
export const styleAtom = atom({})

export const positionAtom = atom({
  x: 0,
  y: 0,
})
