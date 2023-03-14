import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'

import { Draggable } from '~/components/draggable'
import { Resizable } from '~/components/resizable'

import type { PropsWithChildren } from 'react'

export type FramerProps = {
  className?: string
}

export const Frame = ({ children, className }: PropsWithChildren<FramerProps>) => {

  return (
    <div
      className={clsx(className, 'relative')}
    >
      {/* <Draggable>
        <button
          className="absolute z-10 bg-pink-400"
          style={{
            top: 0,
            left: '50%',
          }}
        >
          top
        </button>
      </Draggable>

      <Resizable>
        <div className="h-[200px] w-[200px] border border-sky-500">
          resizable box
        </div>
      </Resizable> */}

      {children}
    </div>
  )
}
