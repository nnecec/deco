import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import type { PropsWithChildren, ReactNode } from 'react'

export type PhotoProps = {
  src: string
}
export const Photo = ({ src, children }: PropsWithChildren<PhotoProps>) => {
  return <Image src={src} height={500} width={500} alt="your photo" />
}
