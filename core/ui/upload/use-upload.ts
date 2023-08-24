'use client'

import { useEffect, useRef, useState } from 'react'

import type { UseUploadProps } from './types'

export const useUpload = ({ accept = '*', multiple }: UseUploadProps = {}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>()

  useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current
      input.type = 'file'
      input.accept = accept
      input.multiple = multiple ?? false

      function handleChange(e: Event) {
        console.log(e)
        const inputTarget = e.target as HTMLInputElement
        const _files = [...(inputTarget?.files ?? [])]
        setFiles(_files)
      }

      input.addEventListener('change', handleChange)

      return () => {
        input.removeEventListener('change', handleChange)
      }
    }
  }, [])

  return [inputRef, files] as const
}
