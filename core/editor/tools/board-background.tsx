'use client'
import { useEffect, useState } from 'react'
import { RgbaColorPicker } from 'react-colorful'
import { Button, Switch, Tooltip } from '@nextui-org/react'
import { ReloadIcon } from '@radix-ui/react-icons'
import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { getColors } from '~/core/components/color/generator'

import { meshGradient } from '../../components/color/mesh'
import { boardBackgroundColorAtom, boardBackgroundImageAtom, photoSrcAtom } from '../store'

const MotionButton = motion(Button)

export const BoardBackground = () => {
  const [color, setColor] = useAtom(boardBackgroundColorAtom)
  const setImage = useSetAtom(boardBackgroundImageAtom)
  const photo = useAtomValue(photoSrcAtom)
  const [colors, setColors] = useState([])

  useEffect(() => {
    if (photo) {
      getColors(photo, { format: 'hex' }).then((data: any) => {
        setColors(data)
        setColor({ ...colord(data[Math.round(5 * Math.random())]).toRgb(), a: 1 })
      })
    } else {
      setColors([])
    }
  }, [photo, setColor])

  const [enableMesh, setEnableMesh] = useState(false)

  return (
    <div>
      <h5 className="text-sm text-stone-400">Background</h5>

      <RgbaColorPicker color={color} onChange={setColor} style={{ width: '100%', marginTop: 8 }} />

      {colors.length > 0 && (
        <>
          <h5 className="py-2 text-xs text-stone-400">Prominent Colors</h5>
          <div className="flex gap-1">
            {colors.map(c => (
              <Tooltip content={c} key={c} showArrow placement="right">
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
          <h5 className="grow py-2 text-xs text-stone-400">Mesh Mode</h5>
          <div className="flex items-center justify-between">
            <Switch
              isSelected={enableMesh}
              onValueChange={value => {
                setEnableMesh(value)
                if (enableMesh) {
                  const [, i] = meshGradient(colord(color).toHex(), { amount: 5 })
                  setImage(i)
                } else {
                  setImage('none')
                }
              }}
            />
            {enableMesh && (
              <Tooltip content="regenerate" placement="left" showArrow>
                <MotionButton
                  isIconOnly
                  radius="full"
                  size="sm"
                  onPress={() => setColor(color)}
                  whileTap={{ rotate: 60 }}
                  style={{ tranform: 'rotate(60deg)' }}
                >
                  <ReloadIcon />
                </MotionButton>
              </Tooltip>
            )}
          </div>
        </>
      )}
    </div>
  )
}
