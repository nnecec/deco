'use client'

import { useRef, useState } from 'react'

import type { ChangeEvent, InputHTMLAttributes } from 'react'

import type { UploadProps } from './types'

export const useUpload = ({ accept = '*' }: UploadProps = {}): [
  File | undefined,
  InputHTMLAttributes<HTMLInputElement>,
] => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File>()

  const handleChange = (files: FileList | null) => {
    if (!files) return
    setFile(files[0])
  }

  const inputProps = {
    type: 'file',
    accept,
    multiple: false,
    style: { display: 'none' },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e.target.files)
    },
    ref: inputRef,
  }

  return [file, inputProps]
}
