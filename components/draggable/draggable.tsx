import { Children, cloneElement, isValidElement } from 'react'

import type { PropsWithChildren } from 'react'

import { useDraggable } from './use-draggable'

import type { Props } from './use-draggable'

export const Draggable = <T extends HTMLElement>({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const [handle, { x, y, grabbing }] = useDraggable<T>(props)

  if (!isValidElement(children)) return

  return cloneElement(Children.only(children), {
    ref: handle,
    style: {
      ...children.props?.style,
      cursor: grabbing ? 'grabbing' : 'grab',
      touchAction: 'none',
      transform: `translate(${x}px, ${y}px)`,
    },
  })
}
