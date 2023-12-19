import type { PropsWithChildren } from 'react'

import { Dnd, Droppable, Draggable } from './designer'

export type FrameProps = {
  className?: string
}

export const Design = ({ children, className }: PropsWithChildren<FrameProps>) => {
  return (
    <Dnd>
      <Draggable>Drag me</Draggable>
      <Droppable id="xiaomi">
        {droppableId === 'xiaomi' ?
          <Draggable>Drag me</Draggable>
        : 'Drop here'}
      </Droppable>
    </Dnd>
  )
}
