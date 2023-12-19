import Image from 'next/image'

import type { FrameMode } from '~/core/utils/types'

import { LeicaLogo } from '../assets'

export const XiaomiLeicaFrame: FrameMode = {
  frame: {
    className: 'pb-20 bg-white',
    items: [
      {
        children: 'XIAOMI 14 PRO',
        props: {
          className: 'absolute text-black bottom-6 left-5 font-bold',
        },
      },
      {
        component: Image,
        props: {
          alt: 'leica svg',
          className: 'absolute text-black bottom-6 right-5',
          height: 30,
          src: LeicaLogo,
          width: 30,
        },
      },
    ],
  },
  logo: 'leica',
  name: 'Xiaomi x Leica',
}
