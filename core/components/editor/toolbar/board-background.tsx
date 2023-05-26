import { useCallback, useEffect, useState } from 'react'
import { RgbaColorPicker } from 'react-colorful'
import { Button, Switch, Tooltip } from '@nextui-org/react'
import { colord } from 'colord'
import { useAtom } from 'jotai'

import type { Hex } from '~/core/components/color/generator'
import { getColors } from '~/core/components/color/generator'

import type { RgbaColor } from 'react-colorful'

import { meshGradient } from '../../color/mesh'
import { Slider } from '../../slider'
import { boardBackgroundColorAtom, boardBackgroundImageAtom, photoSrcAtom } from '../store'

export const BoardBackground = () => {
  const [color, setColor] = useAtom(boardBackgroundColorAtom)
  const [, setImage] = useAtom(boardBackgroundImageAtom)
  const [photo] = useAtom(photoSrcAtom)
  const [colors, setColors] = useState<Hex[]>([])
  const [enableMesh, setEnableMesh] = useState(false)
  const [lightness, setLightness] = useState(60)

  const handleColorChange = (color: RgbaColor) => {
    if (enableMesh) {
      const [c, i] = meshGradient(colord(color).toHex(), { amount: 5, lightness })
      setImage(i)
    } else {
      setImage('none')
    }
    setColor(color)
  }

  useEffect(() => {
    handleColorChange(color)
  }, [enableMesh, lightness])

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
          <div className="flex justify-between">
            <h5 className="py-2 text-xs text-stone-400">Mesh Mode</h5>
            <Switch isSelected={enableMesh} onValueChange={value => setEnableMesh(value)} />
          </div>
          {enableMesh && (
            <>
              <h5 className="text-xs text-stone-400">Lightness</h5>
              <Slider value={[lightness]} onValueChange={value => setLightness(value[0])} />
            </>
          )}
        </>
      )}
    </div>
  )
}
