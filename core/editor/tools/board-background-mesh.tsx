'use client'
import { useEffect, useState } from 'react'

import { colord } from 'colord'
import { useAtom, useSetAtom } from 'jotai'

import { SymbolIcon } from '@radix-ui/react-icons'

import { Button, Label, Slider, Switch } from '~/core/ui'

import { meshGradient } from '../../ui/color/mesh'
import {
  boardBackgroundColorAtom,
  boardBackgroundImageAtom,
  boardBackgroundMeshEnableAtom,
  boardBackgroundMeshOffsetAtom,
} from '../store'

export const BoardBackgroundMesh = () => {
  const [color] = useAtom(boardBackgroundColorAtom)
  const setImage = useSetAtom(boardBackgroundImageAtom)
  const [offset, setOffset] = useAtom(boardBackgroundMeshOffsetAtom)
  const [enable, setEnable] = useAtom(boardBackgroundMeshEnableAtom)

  useEffect(() => {
    if (enable) {
      const [, bg] = meshGradient(colord(color).toHex(), { amount: 5, offset })
      setImage(bg!)
    } else {
      setImage('none')
    }
  }, [color, enable, offset, setImage])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs">Mesh mode</Label>
        <Switch
          checked={enable}
          onCheckedChange={value => {
            setEnable(value)
          }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        {enable ?
          <>
            <Label className="text-xs" htmlFor="background-mesh-offset">
              Complicated
            </Label>
            <Slider
              id="background-mesh-offset"
              max={6}
              min={0}
              onValueChange={value => {
                setOffset(value[0]!)
              }}
              step={0.1}
              value={[offset]}
            />
          </>
        : null}
      </div>
    </div>
  )
}
