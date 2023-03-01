import { useSetAtom } from 'jotai'
import { presets as defaultPresets } from '../presets'
import { styleAtom } from '../store'
export type ToolbarProps = {
  presets?: any
}

export const Toolbar = ({ presets }: ToolbarProps) => {
  const setStyle = useSetAtom(styleAtom)

  const finalPresets = {
    ...defaultPresets,
    ...presets
  }

  const presetOptions = Object.keys(finalPresets)

  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Preset</span>
        </label>
        <select
          className="select w-full max-w-xs"
          onChange={e => setStyle(finalPresets[e.target.value])}
        >
          {presetOptions.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
