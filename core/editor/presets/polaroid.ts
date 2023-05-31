import type { FrameMode } from "~/core/types";

export const PolaroidFrame: FrameMode = {
  name: 'Polaroid',
  logo: 'insta',
  frame: {
    className: 'pt-8 pb-24 px-6 bg-white',
    items: [
      {
        children: '1989',
        props: {
          className: 'absolute text-black bottom-6 right-6 text-4xl',
        },
      },
      {
        children: 'T.S',
        props: {
          className: 'absolute text-black bottom-6 left-6 text-4xl',
        },
      },
    ],
  },
}
