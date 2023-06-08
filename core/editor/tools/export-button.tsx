import { useRef, useState } from 'react'
import { faker } from '@faker-js/faker'
import { Button } from '@nextui-org/react'
import { toJpeg } from 'html-to-image'

import type { ButtonProps } from '@nextui-org/react'

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
  const divRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div className="relative">
      <Button
        className="w-full border border-zinc-600/60 bg-transparent duration-500 transition-colors focus:border-slate-500/20 focus:outline-none"
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        {...props}
        onClick={handleExport}
      >
        Export
      </Button>
      <div
        style={{
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          opacity,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 cursor-default rounded-xl border border-slate-300/60 bg-transparent opacity-0 duration-500 transition-opacity"
        ref={divRef}
      />
    </div>
  )
}
