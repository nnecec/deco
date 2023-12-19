import { Caveat } from 'next/font/google'

import type { FrameMode } from '~/core/utils/types'

const caveat = Caveat({ subsets: ['latin'] })

export const PolaroidFrame: FrameMode = {
  frame: {
    className: 'pt-6 pb-28 px-6 bg-white',
    items: [
      {
        children: 'T.S',
        props: {
          className: ['absolute bottom-8 left-6 text-4xl text-black', caveat.className],
        },
      },
      {
        children: '1989',
        props: {
          className: ['absolute bottom-8 right-6 text-4xl text-black', caveat.className],
        },
      },
    ],
  },
  logo: 'insta',
  name: 'Polaroid',
}
