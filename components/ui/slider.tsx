'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={clsx('relative flex h-5 w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="bg-blackA10 relative h-[3px] grow rounded-full">
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-white" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="shadow-blackA7 hover:bg-violet3 focus:shadow-blackA8 block h-5 w-5 rounded-[10px] bg-white shadow-[0_2px_10px] focus:shadow-[0_0_0_5px] focus:outline-none" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
