import { RgbaColorPicker } from 'react-colorful'
import { useAtom } from 'jotai'

import type { RgbaColor } from 'react-colorful'

import { boardBackgroundColorAtom } from '../store'

export const BoardBackground = () => {
  const [color, setColor] = useAtom(boardBackgroundColorAtom)

  const handleColorChange = (color: RgbaColor) => {
    setColor(color)
  }

  return (
    <div>
      <h5 className="text-sm text-stone-400">Background</h5>
      <RgbaColorPicker color={color} onChange={handleColorChange} style={{ width: '100%', marginTop: 8 }} />
    </div>
  )
}
