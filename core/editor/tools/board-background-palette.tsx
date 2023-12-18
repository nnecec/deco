'use client'
import { RgbaColorPicker } from 'react-colorful'

import { useAtom } from 'jotai'

import { Label } from '~/core/ui'

import { boardBackgroundColorAtom } from '../store'

export const BoardBackgroundPalette = () => {
  const [color, setColor] = useAtom(boardBackgroundColorAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs">Background</Label>
      </div>

      <RgbaColorPicker color={color} onChange={setColor} style={{ width: '100%' }} />
    </div>
  )
}
