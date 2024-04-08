import { Caveat } from 'next/font/google'

import type { FrameMode } from '../../types'

const caveat = Caveat({ subsets: ['latin'] })

export const Polaroid1989Frame: FrameMode = {
  designer: {
    className: 'flex justify-between items-center h-28 px-6',
    items: [
      {
        children: 'T.S',
        props: {
          className: ['text-4xl text-black', caveat.className],
          contentEditable: true,
        },
      },
      {
        children: '1989',
        props: {
          className: ['text-4xl text-black', caveat.className],
          contentEditable: true,
        },
      },
    ],
  },
  frame: {
    className: 'bg-white p-6',
    designer: 'after',
  },
  name: 'Polaroid - 1989',
}
