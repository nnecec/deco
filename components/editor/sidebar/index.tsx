import { useSetAtom } from 'jotai'

import { presets as defaultPresets } from '../presets'
import { styleAtom } from '../store'
export type ToolbarProps = {
  presets?: any
}

export const Sidebar = ({ presets }: ToolbarProps) => {
  const setStyle = useSetAtom(styleAtom)

  const finalPresets = {
    ...defaultPresets,
    ...presets,
  }

  const presetOptions = Object.keys(finalPresets)

  return (
    <div className="h-full w-full max-w-xs" />
  )
}
