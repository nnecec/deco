import type { PropsWithChildren } from 'react'
import {
  cloneElement,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useDraggable } from '../draggable'

import type { Props} from './use-resizable';
import { useResizable } from './use-resizable'

export const Resizable = <T extends HTMLElement>({
  children,
  x,
  y,
}: PropsWithChildren<Props>) => {
  const [right, rightPosition] = useDraggable<T>()
  const [resizable, width, height] = useResizable({
    x: rightPosition.x,
    y: rightPosition.y,
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
      <span ref={right} key="right" className="absolute right-0 top-0 block h-full w-1 cursor-col-resize" />,
    ],
  )
}
