'use client'

import { colord } from 'colord'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtomValue, useSetAtom } from 'jotai'

import { Button, Label, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/core/ui'

import { boardBackgroundColorAtom, boardProminentColorsAtom } from '../store'

const MotionButton = motion(Button)
const MotionTooltipTrigger = motion(TooltipTrigger)

export const BoardBackgroundProminent = () => {
  const setColor = useSetAtom(boardBackgroundColorAtom)
  const colors = useAtomValue(boardProminentColorsAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs">Prominent colors</Label>
      </div>

      <TooltipProvider>
        <AnimatePresence>
          <motion.div
            animate={colors?.length > 0 ? 'active' : 'inactive'}
            className="flex gap-1"
            initial={'inactive'}
            variants={{
              active: {
                transition: { staggerChildren: 0.07 },
              },
              inactive: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {colors?.length > 0 ?
              colors.map(color => (
                <Tooltip key={color}>
                  <MotionTooltipTrigger
                    variants={{
                      active: {
                        opacity: 1,
                      },
                      inactive: {
                        opacity: 0,
                      },
                    }}
                  >
                    <MotionButton
                      className="rounded-full"
                      onClick={() => setColor(colord(color).toRgb())}
                      size="icon"
                      style={{ backgroundColor: color }}
                    />
                  </MotionTooltipTrigger>
                  <TooltipContent>{color}</TooltipContent>
                </Tooltip>
              ))
            : <Tooltip>
                <TooltipTrigger className="flex gap-1">
                  <div className="size-6 rounded-full border border-neutral-500" />
                  <div className="size-6 rounded-full border border-neutral-500 opacity-80" />
                  <div className="size-6 rounded-full border border-neutral-500 opacity-60" />
                  <div className="size-6 rounded-full border border-neutral-500 opacity-40" />
                  <div className="size-6 rounded-full border border-neutral-500 opacity-20" />
                </TooltipTrigger>
                <TooltipContent>Waiting upload...</TooltipContent>
              </Tooltip>
            }
          </motion.div>
        </AnimatePresence>
      </TooltipProvider>
    </div>
  )
}
