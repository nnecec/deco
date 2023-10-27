'use client'
import { useState } from 'react'
import { RgbaColorPicker } from 'react-colorful'

import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { Button, Switch, Tooltip } from '@nextui-org/react'
import { ReloadIcon } from '@radix-ui/react-icons'

import { Label } from '~/core/ui'

import { meshGradient } from '../../ui/color/mesh'
import { boardBackgroundColorAtom, boardBackgroundImageAtom, boardProminentColorsAtom } from '../store'

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
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs" htmlFor="frame-scale">
          Background
        </Label>
      </div>

      <RgbaColorPicker color={color} onChange={setColor} style={{ width: '100%' }} />

      {colors?.length > 0 && (
        <>
          <div className="flex justify-between text-xs text-neutral-400">
            <Label className="text-xs" htmlFor="frame-scale">
              Prominent Colors
            </Label>
          </div>

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

          <div className="flex justify-between text-xs text-neutral-400">
            <Label className="text-xs" htmlFor="frame-scale">
              Mesh Mode
            </Label>
          </div>
          <div className="flex items-center justify-between">
            <Switch
              isSelected={enableMesh}
              onValueChange={value => {
                setEnableMesh(value)
                mesh(value)
              }}
            />
            {enableMesh ? (
              <Tooltip content="regenerate" placement="left" showArrow>
                <MotionButton
                  isIconOnly
                  onPress={() => mesh(true)}
                  radius="full"
                  size="sm"
                  // style={{ tranform: 'rotate(60deg)' }}
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
