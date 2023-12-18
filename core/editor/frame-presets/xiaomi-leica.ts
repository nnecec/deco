import type { FrameMode } from '~/core/utils/types'

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
        children: 'logo',
        props: {
          className: 'absolute text-black bottom-6 right-5',
        },
        type: 'svg',
      },
    ],
  },
  logo: 'leica',
  name: 'Xiaomi x Leica',
}
