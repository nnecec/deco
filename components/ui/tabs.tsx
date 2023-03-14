import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import type { ReactNode } from 'react'

interface Option {
  key: string
  label: string
  children: ReactNode
}

interface TabsProps {
  options: Option[]
}

export const Tabs = ({ options }: TabsProps) => {
  return (
    <Tab.Group>
      <Tab.List className="flex w-full space-x-1 rounded-2xl bg-zinc-800/30 p-1">
        {options.map(option => (
          <Tab
            key={option.key}
            className={({ selected }) =>
              clsx(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                'ring-white/60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-neutral-200 shadow'
                  : 'text-gray-100 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            {option.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2 grow rounded-2xl bg-zinc-800/30">
        {options.map((option, idx) => (
          <Tab.Panel
            key={idx}
            className={clsx(
              'rounded-xl p-3',
              'text-neutral-100 ring-white/60 ring-offset-2 ring-offset-gray-400',
            )}
          >
            {option.children}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
