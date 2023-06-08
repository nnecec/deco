import { useMemo } from 'react'
import { useAtom } from 'jotai'

import { Select } from '~/core/components/select'

import { frameModePresets } from '../presets'
import { frameModeAtom } from '../store'

export const FrameMode = () => {
  const [, options] = useFrameMode()
  const [frameMode, setFrameMode] = useAtom(frameModeAtom)

  return (
    <Select
      onChange={e => setFrameMode(e.target.value)}
      options={[{ label: 'No Frame', value: '' }, ...options]}
      value={frameMode}
    />
  )
}

export function useFrameMode() {
  return useMemo(() => {
    const options = Object.keys(frameModePresets).map(key => ({ label: key, value: key }))
    const modes = frameModePresets
    return [modes, options] as const
  }, [])
}
