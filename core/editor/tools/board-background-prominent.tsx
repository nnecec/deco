'use client'

import { colord } from 'colord'
import { useAtomValue, useSetAtom } from 'jotai'

import { Button, Label, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/core/ui'

import { boardBackgroundColorAtom, boardProminentColorsAtom } from '../store'

export const BoardBackgroundProminent = () => {
  const setColor = useSetAtom(boardBackgroundColorAtom)
  const colors = useAtomValue(boardProminentColorsAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs">Smart Colors</Label>
      </div>

      <div className="flex gap-1">
        {colors?.length > 0 ?
          colors.map(c => (
            <TooltipProvider key={c}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="rounded-full"
                    onClick={() => setColor(colord(c).toRgb())}
                    size="icon"
                    style={{ backgroundColor: c }}
                  />
                </TooltipTrigger>
                <TooltipContent>{c}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))
        : <Button disabled size="xs" variant="secondary">
            Waiting Artwork upload
          </Button>
        }
      </div>
    </div>
  )
}
