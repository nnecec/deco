import { useEffect, useMemo, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useAtom } from 'jotai'

import { prominent } from '~/components/color/generator'
import { meshGradient } from '~/components/color/mesh'
import { ColorSlider, Radio, RadioGroup } from '~/components/ui'

import { boardBackgroundColorAtom, boardBackgroundImageAtom, photoSrcAtom } from '../store'

export const BoardBackground = () => {
  const [, setBoardBackgroundColor] = useAtom(boardBackgroundColorAtom)
  const [, setBoardBackgroundImage] = useAtom(boardBackgroundImageAtom)
  const [photo] = useAtom(photoSrcAtom)

  const [color, setColor] = useState('#fff')
  const [colors, setColors] = useState([])
  const [lightness, setLightness] = useState(10)

  useEffect(() => {
    prominent(photo, { format: 'hex' }).then(data => setColors(data))
  }, [photo])

  useEffect(() => {
    const [backgroundColor, backgroundImage] = meshGradient(color, { amount: 6, lightness })
    setBoardBackgroundImage(backgroundImage)
    setBoardBackgroundColor(backgroundColor)
  }, [color, lightness, setBoardBackgroundColor, setBoardBackgroundImage])

  return (
    <div>
      <ColorSlider value={lightness} onChange={setLightness} />
      <HexColorPicker color={color} onChange={setColor} style={{ width: '100%' }} />

      <RadioGroup label="Main colors" value={color} onChange={e => setColor(e)}>
        {colors.map(color => (
          <Radio key={color} value={color}>
            <div className="h-4 w-4" style={{ backgroundColor: color }} />
          </Radio>
        ))}
      </RadioGroup>
    </div>
  )
}
