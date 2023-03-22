import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useAtom } from 'jotai'

import { boardBackgroundAtom } from '../store'

export const BoardBackground = () => {
  const [boardBackground, setBoardBackground] = useAtom(boardBackgroundAtom)

  return (
    <div>
      <HexColorPicker color={boardBackground} onChange={setBoardBackground} style={{ width: '100%' }} />
    </div>
  )
}
