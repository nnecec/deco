import { Button } from '@nextui-org/react'
import { toJpeg } from 'html-to-image'

const handleExport = () => {
  toJpeg(document.querySelector('#board')).then(dataUrl => {
    const link = document.createElement('a')
    link.download = 'my-image-name.jpeg'
    link.href = dataUrl
    link.click()
  })
}

export const ExportButton = () => {
  return <Button onClick={handleExport}>export</Button>
}
