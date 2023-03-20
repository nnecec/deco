import { BoardAspectRatio, BoardBackground, Export, PhotoBorderRadius, PhotoScale } from '../editor'

export type ToolbarProps = {
  presets?: any
}

export const Sidebar = ({ presets }: ToolbarProps) => {
  return (
    <div className="flex h-full flex-col p-2">
      <div>
        <BoardAspectRatio />

        <PhotoBorderRadius />
        <PhotoScale />

        <BoardBackground />
        <Export />
      </div>
      ),
    </div>
  )
}
