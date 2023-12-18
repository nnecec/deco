import type { FrameMode } from '~/core/utils/types'

export const PolaroidFrame: FrameMode = {
  frame: {
    className: 'pt-6 pb-28 px-6 bg-white',
    items: [
      {
        children: 'T.S',
        props: {
          className: 'absolute text-black bottom-6 left-6 text-4xl',
        },
      },
      {
        children: '1989',
        props: {
          className: 'absolute text-black bottom-6 right-6 text-4xl',
        },
      },
    ],
  },
  logo: 'insta',
  name: 'Polaroid',
}
