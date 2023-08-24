import { useAtom } from 'jotai'

import { Label, Slider } from '~/core/ui'

import { boardPaddingAtom } from '../store'

export const BoardPadding = () => {
  const [padding, setPadding] = useAtom(boardPaddingAtom)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-neutral-400">
        <Label className="text-xs">Padding</Label>
        <span>
          {padding.x}px {padding.y}px
        </span>
      </div>

      <Slider
        onValueChange={value => {
          setPadding({ ...padding, x: value[0] })
        }}
        className="mb-1"
        max={120}
        value={[padding.x]}
      />

      <Slider
        onValueChange={value => {
          setPadding({ ...padding, y: value[0] })
        }}
        max={120}
        value={[padding.y]}
      />
    </div>
  )
}
