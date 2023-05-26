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
  return (
    <Button {...props} onClick={handleExport}>
      export
    </Button>
  )
}
