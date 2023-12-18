import { toJpeg } from 'html-to-image'

import { faker } from '@faker-js/faker'

import type { ButtonProps } from '~/core/ui'

import { Button } from '~/core/ui'

const handleExport = () => {
  const dom = document.querySelector('#board') as HTMLElement
  if (dom) {
    toJpeg(dom).then(dataUrl => {
      const link = document.createElement('a')
      link.download = `${faker.color.human()} ${faker.animal.cat().toLowerCase()}.jpeg`
      link.href = dataUrl
      link.click()
    })
  }
}

export const ExportButton = (props: ButtonProps) => {
  // const divRef = useRef<HTMLInputElement>(null)
  // const [isFocused, setIsFocused] = useState(false)
  // const [position, setPosition] = useState({ x: 0, y: 0 })
  // const [opacity, setOpacity] = useState(0)

  // const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
  //   if (!divRef.current || isFocused) return

  //   const div = divRef.current
  //   const rect = div.getBoundingClientRect()

  //   setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  // }

  // const handleBlur = () => {
  //   setIsFocused(false)
  //   setOpacity(0)
  // }

  // const handleMouseEnter = () => {
  //   setOpacity(1)
  // }

  // const handleMouseLeave = () => {
  //   setOpacity(0)
  // }

  return (
    <div>
      <div className="group relative inline-flex w-full overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#3b82f6_50%,#ec4899_100%)] opacity-0 transition-opacity group-hover:opacity-100" />
        <Button className="z-10 w-full hover:bg-secondary" onClick={handleExport} variant="secondary" {...props}>
          Export
        </Button>
      </div>
      {/* <div className="relative">
        <Button
          className="w-full border border-zinc-600/60 bg-transparent transition-colors duration-500 focus:border-slate-500/20 focus:outline-none"
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          variant="outline"
          {...props}
          onClick={handleExport}
        >
          Export
        </Button>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 cursor-default rounded-xl border border-slate-300/60 bg-transparent opacity-0 transition-opacity duration-500"
          ref={divRef}
          style={{
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
            opacity,
          }}
        />
      </div> */}
    </div>
  )
}
