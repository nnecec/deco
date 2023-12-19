import { useDraggable } from '@dnd-kit/core'

type DraggableProps = {
  id?: string
}

export const Draggable = ({ children, id = 'draggable' }: React.PropsWithChildren<DraggableProps>) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })
  const style =
    transform ?
      {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}
