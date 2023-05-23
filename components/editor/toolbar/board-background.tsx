import { useEffect, useState } from 'react'
import { RgbaColorPicker } from 'react-colorful'
import { Button, Tooltip } from '@nextui-org/react'
import { colord } from 'colord'
import { useAtom } from 'jotai'

import type { Hex } from '~/components/color/generator'
import { getColors } from '~/components/color/generator'

import type { RgbaColor } from 'react-colorful'

import { boardBackgroundColorAtom, photoSrcAtom } from '../store'

export const BoardBackground = () => {
  const [color, setColor] = useAtom(boardBackgroundColorAtom)
  const [photo] = useAtom(photoSrcAtom)
  const [colors, setColors] = useState<Hex[]>([])

  const handleColorChange = (color: RgbaColor) => {
    setColor(color)
  }

  useEffect(() => {
    if (photo) {
      getColors(photo, { format: 'hex' }).then(data => setColors(data))
    } else {
      setColors([])
    }
  }, [photo])

  return (
    <div>
      <h5 className="text-sm text-stone-400">Background</h5>
      <RgbaColorPicker
        color={color}
        onChange={handleColorChange}
        style={{ width: '100%', marginTop: 8 }}
      />
      {colors.length > 0 && (
        <>
          <h5 className="py-2 text-xs text-stone-400">Prominent Colors</h5>
          <div className="flex gap-1">
            {colors.map(c => (
              <Tooltip content={c} key={c}>
                <Button
                  radius="full"
                  size="sm"
                  style={{ backgroundColor: c }}
                  isIconOnly
                  onPress={() => setColor(colord(c).toRgb())}
                />
              </Tooltip>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
