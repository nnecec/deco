'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import Image from 'next/image'

import type { PropsWithChildren } from 'react'

import { useResizeObserver } from '../hooks/use-resize-observer'

import { photoBorderRadiusAtom, photoSrcAtom } from './store'

export type PhotoProps = {
  className?: string
  src?: string
}
export const Photo = ({ src, className }: PropsWithChildren<PhotoProps>) => {
  const [borderRadius] = useAtom(photoBorderRadiusAtom)
  const [photo, setPhoto] = useAtom(photoSrcAtom)

  const [ref, rect] = useResizeObserver()

  const style = rect.height >= rect.width ? { height: '50vh' } : { width: '30vw' }

  useEffect(() => {
    if (src) {
      setPhoto(src)
    }
  }, [setPhoto, src])

  return (
    <div
      style={{
        borderRadius,
      }}
      className={clsx(className, 'overflow-hidden')}
      id="deco-artwork"
    >
      <Image
        alt="your artwork"
        className="object-contain"
        height={500}
        ref={ref}
        src={photo}
        style={style}
        width={500}
      />
    </div>
  )
}
