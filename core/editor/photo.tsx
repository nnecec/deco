import { useEffect } from 'react'
import clsx from 'clsx'
import { useAtom, useAtomValue } from 'jotai'
import Image from 'next/image'

import type { PropsWithChildren } from 'react'

import {
  photoBlurVignetteBlurAtom,
  photoBlurVignetteInsetAtom,
  photoBlurVignetteTransitionAtom,
  photoBorderRadiusAtom,
  photoSrcAtom,
} from './store'

export type PhotoProps = {
  className?: string
  src?: string
}
export const Photo = ({ src, className }: PropsWithChildren<PhotoProps>) => {
  const borderRadius = useAtomValue(photoBorderRadiusAtom)
  const [photo, setPhoto] = useAtom(photoSrcAtom)
  const blur = useAtomValue(photoBlurVignetteBlurAtom)
  const inset = useAtomValue(photoBlurVignetteInsetAtom)
  const transition = useAtomValue(photoBlurVignetteTransitionAtom)

  useEffect(() => {
    if (src) {
      setPhoto(src)
    }
  }, [setPhoto, src])

  const r = `max(${transition}px, calc(${borderRadius}px - ${inset}px))`
  const fillGradient = `black, black ${inset}px, transparent calc(${inset}px + ${transition}px, transparent calc(100% - ${transition}px - ${inset}px), black calc(100% - ${inset}px)`
  const cornerGradient = `transparent 0px, transparent calc(${r} - ${transition}px, black ${r}`
  const cornerSize = `calc(${r} + ${inset}px) calc(${r} + ${inset}px)`
  const fillFartherPosition = `calc(${inset}px + ${r})`
  const fillNarrowSize = `calc(100% - (${inset}px + ${r}) * 2)`

  return (
    <div
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        borderRadius,
      }}
      className={clsx(className, 'relative')}
      id="deco-artwork"
    >
      <Image alt="your artwork" height={500} src={photo} width={500} />
      <div
        // style={{
        //   WebkitMaskImage: `linear-gradient(to right, ${fillGradient}), linear-gradient(to bottom, ${fillGradient}), radial-gradient(at bottom right, ${cornerGradient}), radial-gradient(at bottom left, ${cornerGradient}), radial-gradient(at top left, ${cornerGradient}), radial-gradient(at top right, ${cornerGradient})`,

        //   WebkitMaskPosition: `0 ${fillFartherPosition}, ${fillFartherPosition} 0, 0 0, 100% 0, 100% 100%, 0 100%`,
        //   WebkitMaskRepeat: 'no-repeat',
        //   WebkitMaskSize: `100% ${fillNarrowSize}, ${fillNarrowSize} 100%, ${cornerSize}, ${cornerSize}, ${cornerSize}, ${cornerSize}`,
        //   backdropFilter: `blur(${blur}px)`,
        //   borderRadius,
        // }}
        className="blur-vignette"
      />
    </div>
  )
}
