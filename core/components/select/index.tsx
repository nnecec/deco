import { ChevronDownIcon } from '@radix-ui/react-icons'

type Option = {
  label: string
  value: string | ReadonlyArray<string> | number | undefined
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
}

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <div className="relative mx-auto max-w-xs">
      <ChevronDownIcon className="absolute inset-y-0 right-2.5 my-auto h-6 w-6" />
      <select
        className="w-full appearance-none rounded-md border bg-transparent p-2.5 shadow-sm outline-none focus:border-default/60"
        {...props}
      >
        {options.map(option => (
          <option key={String(option.value)} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
