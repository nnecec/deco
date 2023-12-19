import React from 'react'

import { useDroppable } from '@dnd-kit/core'

type DroppableProps = {
  id?: string
}

export const Droppable = ({ children, id = 'droppable' }: React.PropsWithChildren<DroppableProps>) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })
  const style = {
    color: isOver ? 'green' : undefined,
  }

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  )
}
