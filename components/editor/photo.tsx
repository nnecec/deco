import type { PropsWithChildren, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type PhotoProps = {
  src?: string
}
export const Photo = (props: PropsWithChildren<PhotoProps>) => {
  const [selectedImage, setSelectedImage] = useState()

  const imageChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
    }
  }

  const removeSelectedImage = () => {
    setSelectedImage()
  }

  return (
    <div>
      <label htmlFor="">
      <input accept="image/*" type="file" onChange={imageChange} />
      </label>
      {selectedImage ? (
        <div>
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="photo"
            width="200"
            height="200"
          />
        </div>
      ) : (
        <input accept="image/*" type="file" onChange={imageChange} />
      )}
    </div>
  )
}
