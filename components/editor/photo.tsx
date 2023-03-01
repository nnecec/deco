import type { PropsWithChildren, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type PhotoProps = {
  src?: string
}
export const Photo = ({ src, children }: PropsWithChildren<PhotoProps>) => {
  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <Image src={src} height={300} width={300} />
    </div>
  )
}
