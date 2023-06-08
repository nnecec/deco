import { useEffect } from 'react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import Image from 'next/image'

import type { PropsWithChildren } from 'react'

import { photoBorderRadiusAtom, photoSrcAtom } from './store'

export type PhotoProps = {
  className?: string
  src?: string
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
      style={{
        borderRadius,
      }}
      className={clsx(className, 'h-full overflow-hidden')}
      id="deco-artwork"
    >
      <Image
        alt="your artwork"
        className="h-full object-contain"
        height={500}
        src={photo}
        width={500}
      />
    </div>
  )
}
