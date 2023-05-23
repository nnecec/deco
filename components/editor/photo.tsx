import { useEffect } from 'react'
import { useAtom } from 'jotai'
import Image from 'next/image'

import type { PropsWithChildren } from 'react'

import { photoBorderRadiusAtom, photoScaleAtom, photoSrcAtom } from './store'

export type PhotoProps = {
  src: string
}
export const Photo = ({ src }: PropsWithChildren<PhotoProps>) => {
  const [borderRadius] = useAtom(photoBorderRadiusAtom)
  const [scale] = useAtom(photoScaleAtom)
  const [photo, setPhoto] = useAtom(photoSrcAtom)

  useEffect(() => {
    setPhoto(src)
  }, [setPhoto, src])

  return (
    <div
      id="decoo-photo"
      className="overflow-hidden"
      style={{
        borderRadius,
        transform: `scale(${1 - scale / 250})`,
      }}
    >
      <Image src={photo} height={500} width={500} alt="your artwork" />
    </div>
  )
}
