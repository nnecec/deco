import Image from 'next/image'

import type { FrameMode } from '../../types'

import { LeicaLogo } from '../../assets'

export const XiaomiLeicaFrame: FrameMode = {
  designer: {
    className: 'flex px-6 h-20 justify-between items-center',
    items: [
      {
        children: 'XIAOMI 14 PRO',
        name: 'device',
        props: {
          className: 'text-black font-bold',
          contentEditable: 'true',
        },
      },
      {
        children: [
          {
            component: Image,
            name: 'icon',
            props: {
              alt: 'leica svg',
              className: 'text-black',
              height: 30,
              src: LeicaLogo,
              width: 30,
            },
          },
          {
            children: [
              {
                children: '75',
                props: { contentEditable: true },
              },
              {
                children: 'mm',
                props: {
                  className: 'mr-1',
                },
              },
              {
                children: 'f/',
              },
              {
                children: '1.8',
                props: { className: 'mr-1', contentEditable: true },
              },
              {
                children: '1/1000',
                props: { contentEditable: true },
              },
              {
                children: 's',
                props: {
                  className: 'mr-1',
                },
              },
              {
                children: 'ISO',
              },
              {
                children: '80',
                props: { contentEditable: true },
              },
            ],
            name: 'exif',
            props: {
              className: 'text-black flex font-medium',
            },
          },
        ],
        props: {
          className: 'flex gap-2 items-center',
        },
      },
    ],
  },
  frame: {
    className: 'bg-white',
    designer: 'after',
  },
  name: 'Xiaomi x Leica',
}
