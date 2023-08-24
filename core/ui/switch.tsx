// MyButton.tsx
import { extendVariants, Switch as NextSwitch } from '@nextui-org/react'

export const Switch = extendVariants(NextSwitch, {
  variants: {
    size: {
      xs: {
        endContent: 'text-tiny',
        label: 'text-small',
        startContent: 'text-tiny',
        thumb: [
          'w-3 h-3 text-tiny',
          // selected
          'group-data-[selected=true]:ml-3',
        ],
        wrapper: 'w-8 h-5 mr-1',
      },
    },
  },
})
