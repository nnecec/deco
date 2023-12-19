import React, { cloneElement, useState } from 'react'

import { DndContext } from '@dnd-kit/core'

type DndProps = {}

export const Dnd = ({ children }: React.PropsWithChildren<DndProps>) => {
  const [droppableId, setDroppableId] = useState(null)

  function handleDragEnd(event) {
    const { over } = event
    setDroppableId(over ? over.id : null)
  }

  let child = children

  if (typeof children === 'function') {
    child = cloneElement(children, { droppableId })
  }

  return <DndContext onDragEnd={handleDragEnd}>{child}</DndContext>
}
