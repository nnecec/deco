'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={clsx('relative flex h-5 w-full touch-none select-none items-center', className)}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[3px] grow rounded-full bg-default">
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-white" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-[10px] bg-white shadow hover:bg-zinc-100 focus:shadow-lg focus:outline-none" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
