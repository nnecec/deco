import type { FrameMode } from '~/core/types'

export const XiaomiLeicaFrame: FrameMode = {
  name: 'Xiaomi x Leica',
  logo: 'leica',
  frame: {
    className: 'pb-20 bg-white',
    items: [
      {
        children: 'Xiaomi x Leica',
        props: {
          className: 'absolute text-black bottom-5 left-5',
        },
      },
      {
        children: 'logo',
        props: {
          className: 'absolute text-black bottom-5 right-5',
        },
      },
    ],
  },
}
