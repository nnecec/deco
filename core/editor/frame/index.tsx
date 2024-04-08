import type { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { useAtomValue } from 'jotai'

import { Design } from '../design'
import { frameModeAtom, frameScaleAtom } from '../store'
import { useFrameMode } from '../tools'

export type FrameProps = {
  className?: string
}

export const Frame = ({ children, className }: PropsWithChildren<FrameProps>) => {
  const frameMode = useAtomValue(frameModeAtom)
  const frameScale = useAtomValue(frameScaleAtom)

  const { modes } = useFrameMode()

  const mode = modes[frameMode]!

  const { designer, frame } = mode || {}

  return (
    <div
      className={clsx(className, 'relative', frame?.className)}
      id="frame"
      style={{
        scale: frameScale,
      }}
    >
      {frame?.designer === 'before' && <Design designer={designer} />}
      {children}
      {frame?.designer === 'after' && <Design designer={designer} />}
    </div>
  )
}
