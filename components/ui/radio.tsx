import { RadioGroup } from '@headlessui/react'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface Option {
  label: ReactNode
  value: number | string
}

interface RadioProps {
  options: Option[]
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export const Radio = ({ options, value, onChange }: RadioProps) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-2">
        {options.map(option => (
          <RadioGroup.Option
            key={option.value}
            value={option.value}
            className={({ active, checked }) =>
              `
              ${active ? 'ring-2 ring-zinc-200/60 ring-offset-2 ring-offset-zinc-300' : ''}
              ${checked ? 'bg-zinc-900 bg-opacity-75 text-white' : 'bg-zinc-700'}
              relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none
              `
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className={`font-medium  ${checked ? 'text-white' : 'text-gray-200'}`}
                      >
                        {option.label}
                      </RadioGroup.Label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
