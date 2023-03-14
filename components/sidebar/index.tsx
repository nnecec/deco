import { useState } from 'react'
import { useAtom } from 'jotai'

import { frameAspectRatioAtom } from '../editor/store'
import { Radio, Tabs } from '../ui'

export type ToolbarProps = {
  presets?: any
}

export const Sidebar = ({ presets }: ToolbarProps) => {
  const [aspectRatio, setAspectRatio] = useAtom(frameAspectRatioAtom)
  return (
    <div className="flex h-full flex-col p-2">
      <Tabs
        options={[
          {
            key: '1',
            label: 'Frame',
            children: (
              <div>
                <Radio
                  value={aspectRatio}
                  onChange={setAspectRatio}
                  options={[
                    { label: '1:1', value: '1/1' },
                    { label: '4:3', value: '4/3' },
                    { label: '3:4', value: '3/4' },
                    { label: '3:2', value: '3/2' },
                    { label: '2:3', value: '2/3' },
                  ]}
                />
              </div>
            ),
          },
          {
            key: '2',
            label: 'Mark',
            children: 'Mark',
          },
        ]}
      />
    </div>
  )
}