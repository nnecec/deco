import type { FrameMode } from '~/core/utils/types'

export const XiaomiLeicaFrame: FrameMode = {
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
  logo: 'leica',
  name: 'Xiaomi x Leica',
}
