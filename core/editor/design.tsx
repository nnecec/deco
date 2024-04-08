import type { HTMLMotionProps } from 'framer-motion'

import { createElement } from 'react'
import type { PropsWithChildren } from 'react'

import clsx from 'clsx'

import type { FrameMode } from './types'

export type FrameProps = {
  designer: FrameMode['designer']
}

export const Design = ({ designer }: PropsWithChildren<FrameProps>) => {
  const recursiveRenderChildren = children => {
    return children.map(child =>
      createElement(
        child.component ?? 'div',
        {
          ...child.props,
          className: clsx(child.props?.className),
        } as HTMLMotionProps<'div'>,
        Array.isArray(child.children) ? recursiveRenderChildren(child.children) : child.children,
      ),
    )
  }

  return <div className={designer.className}>{recursiveRenderChildren(designer.items)}</div>
}
