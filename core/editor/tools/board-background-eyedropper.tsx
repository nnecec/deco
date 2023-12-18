'use client'

import { colord } from 'colord'
import { useSetAtom } from 'jotai'

import { Crosshair1Icon } from '@radix-ui/react-icons'

import { Button, Label } from '~/core/ui'
import { useEyeDropper } from '~/core/utils/use-eyedropper'

import { boardBackgroundColorAtom } from '../store'

export const BoardBackgroundEyedropper = () => {
  const setColor = useSetAtom(boardBackgroundColorAtom)
  const { open } = useEyeDropper()

  const handleOpen = async () => {
    const color = await open()
    setColor(colord(color.sRGBHex).toRgb())
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs">Eyedropper</Label>
      </div>

      <Button onClick={handleOpen} size="icon" variant="secondary">
        <Crosshair1Icon />
      </Button>
    </div>
  )
}
