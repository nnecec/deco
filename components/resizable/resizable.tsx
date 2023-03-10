import { cloneElement, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type { PropsWithChildren } from 'react'

import { useDraggable } from '../draggable'

import { useResizable } from './use-resizable'

import type { Props } from './use-resizable'

export const Resizable = <T extends HTMLElement>({ children, x, y }: PropsWithChildren<Props>) => {
  const [nwse, nwsePosition] = useDraggable<T>()
  const [right, rightPosition] = useDraggable<T>({ axis: 'x' })
  const [bottom, bottomPosition] = useDraggable<T>({ axis: 'y' })

  const [resizable, width, height] = useResizable({
    x: rightPosition.x,
    y: bottomPosition.y,
  })

  return cloneElement(
    children,
    {
      ref: resizable,
      style: {
        position: 'relative',
        width,
        height,
        ...children.props.style,
      },
    },
    [
      ...children.props.children,
      <span
        ref={right}
        key="right"
        className="absolute -right-0.5 top-0 block h-full w-1 cursor-col-resize"
      />,
      <span
        ref={bottom}
        key="bottom"
        className="absolute -bottom-0.5 left-0 block h-1 w-full cursor-row-resize"
      />,
      <span
        ref={nwse}
        key="nwse"
        className="absolute -bottom-0.5 -right-0.5 block h-1 w-1 cursor-nwse-resize"
      />,
    ],
  )
}
