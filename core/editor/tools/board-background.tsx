'use client'
import { useState } from 'react'
import { RgbaColorPicker } from 'react-colorful'
import { Button, Switch, Tooltip } from '@nextui-org/react'
import { ReloadIcon } from '@radix-ui/react-icons'
import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { meshGradient } from '../../components/color/mesh'
import {
  boardBackgroundColorAtom,
  boardBackgroundImageAtom,
  boardProminentColorsAtom,
} from '../store'

const MotionButton = motion(Button)

export const BoardBackground = () => {
  const [color, setColor] = useAtom(boardBackgroundColorAtom)
  const setImage = useSetAtom(boardBackgroundImageAtom)
  const colors = useAtomValue(boardProminentColorsAtom)

  const [enableMesh, setEnableMesh] = useState(false)

  const mesh = (enable: boolean) => {
    if (enable) {
      const [, i] = meshGradient(colord(color).toHex(), { amount: 5 })
      setImage(i)
    } else {
      setImage('none')
    }
  }

  return (
    <div>
      <h5 className="text-sm text-stone-400">Background</h5>

      <RgbaColorPicker color={color} onChange={setColor} style={{ marginTop: 8, width: '100%' }} />

      {colors?.length > 0 && (
        <>
          <h5 className="py-2 text-xs text-stone-400">Prominent Colors</h5>
          <div className="flex gap-1">
            {colors.map(c => (
              <Tooltip content={c} key={c} placement="top" showArrow>
                <Button
                  isIconOnly
                  onPress={() => setColor(colord(c).toRgb())}
                  radius="full"
                  size="sm"
                  style={{ backgroundColor: c }}
                />
              </Tooltip>
            ))}
          </div>
          <h5 className="grow py-2 text-xs text-stone-400">Mesh Mode</h5>
          <div className="flex items-center justify-between">
            <Switch
              onValueChange={value => {
                setEnableMesh(value)
                mesh(value)
              }}
              isSelected={enableMesh}
            />
            {enableMesh ? (
              <Tooltip content="regenerate" placement="left" showArrow>
                <MotionButton
                  isIconOnly
                  onPress={() => mesh(true)}
                  radius="full"
                  size="sm"
                  style={{ tranform: 'rotate(60deg)' }}
                  whileTap={{ rotate: 60 }}
                >
                  <ReloadIcon />
                </MotionButton>
              </Tooltip>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}
