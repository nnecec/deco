import { useEffect } from 'react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import Image from 'next/image'

import type { PropsWithChildren } from 'react'

import { photoBorderRadiusAtom, photoSrcAtom } from './store'

export type PhotoProps = {
  src?: string
  className?: string
}
export const Photo = ({ src, className }: PropsWithChildren<PhotoProps>) => {
  const [borderRadius] = useAtom(photoBorderRadiusAtom)
  const [photo, setPhoto] = useAtom(photoSrcAtom)

  useEffect(() => {
    if (src) {
      setPhoto(src)
    }
  }, [setPhoto, src])

  return (
    <div
      id="deco-artwork"
      className={clsx(className, 'h-full overflow-hidden')}
      style={{
        borderRadius,
      }}
    >
      <Image
        className="h-full object-contain"
        src={photo}
        height={500}
        width={500}
        alt="your artwork"
      />
    </div>
  )
}
