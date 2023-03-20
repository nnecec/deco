import { toJpeg } from 'html-to-image'
import { useAtom } from 'jotai'

export const Export = () => {
  const handleExport = () => {
    toJpeg(document.querySelector('#board')).then(dataUrl => {
      const link = document.createElement('a')
      link.download = 'my-image-name.jpeg'
      link.href = dataUrl
      link.click()
    })
  }

  return <button onClick={handleExport}>export</button>
}
