import { useEffect, useState } from 'react'
import { toJpeg } from 'html-to-image'
import html2canvas from 'html2canvas'
import { useAtom } from 'jotai'

import { prominent } from '../color'
import {
  boardAspectRatioAtom,
  boardBackgroundAtom,
  photoBorderRadiusAtom,
  photoScaleAtom,
} from '../editor/store'
import { Radio, RadioGroup, Slider, Tabs } from '../ui'

export type ToolbarProps = {
  presets?: any
}

export const Sidebar = ({ presets }: ToolbarProps) => {
  const [aspectRatio, setAspectRatio] = useAtom(boardAspectRatioAtom)
  const [background, setBackground] = useAtom(boardBackgroundAtom)
  const [borderRadius, setBorderRadius] = useAtom(photoBorderRadiusAtom)
  const [scale, setScale] = useAtom(photoScaleAtom)

  const handleExport = () => {
    toJpeg(document.querySelector('#board')).then(dataUrl => {
      const link = document.createElement('a')
      link.download = 'my-image-name.jpeg'
      link.href = dataUrl
      link.click()
    })
  }

  return (
    <div className="flex h-full flex-col p-2">
      <Tabs
        options={[
          {
            key: 'Frame',
            label: 'Frame',
            children: (
              <div>
                <RadioGroup label="比例" value={aspectRatio} onChange={e => setAspectRatio(e)}>
                  {[
                    { label: 'Adjust', value: '' },
                    { label: '1:1', value: '1/1' },
                    { label: '4:3', value: '4/3' },
                    { label: '3:4', value: '3/4' },
                    { label: '3:2', value: '3/2' },
                    { label: '2:3', value: '2/3' },
                  ].map(({ label, value }) => (
                    <Radio key={value} value={value}>
                      {label}
                    </Radio>
                  ))}
                </RadioGroup>

                <Slider label="Photo round" value={borderRadius} onChange={setBorderRadius} />
                <Slider label="Photo scale" value={scale} onChange={setScale} />
                <button onClick={handleExport}>export</button>
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
