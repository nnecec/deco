import { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import Image from 'next/image'

import type { PropsWithChildren, ReactNode } from 'react'

import { photoBorderRadiusAtom, photoScaleAtom } from './store'

export type PhotoProps = {
  src: string
}
export const Photo = ({ src, children }: PropsWithChildren<PhotoProps>) => {
  const [borderRadius] = useAtom(photoBorderRadiusAtom)
  const [scale] = useAtom(photoScaleAtom)

  return (
    <div
      className="overflow-hidden"
      style={{
        borderRadius,
        transform: `scale(${1 - scale / 400})`,
      }}
    >
      <Image src={src} height={500} width={500} alt="your photo" />
    </div>
  )
}
