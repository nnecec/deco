import { useMemo } from 'react'

import { useAtom } from 'jotai'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/core/ui/select'

import { frameModePresets } from '../presets'
import { frameModeAtom } from '../store'

export const FrameMode = () => {
  const [, options] = useFrameMode()
  const [frameMode, setFrameMode] = useAtom(frameModeAtom)

  return (
    <Select onValueChange={value => setFrameMode(value)} value={frameMode}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a frame" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="no-frame">No Frame</SelectItem>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function useFrameMode() {
  return useMemo(() => {
    const options = Object.keys(frameModePresets).map(key => ({ label: key, value: key }))
    const modes = frameModePresets
    return [modes, options] as const
  }, [])
}
