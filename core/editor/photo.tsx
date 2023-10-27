'use client'

import { useEffect } from 'react'
import type { PropsWithChildren, ReactNode } from 'react'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'

import { useUpload } from '../ui/upload'
import { photoBorderRadiusAtom, photoSrcAtom } from './store'

export type PhotoProps = {
  className?: string
  placeholder?: ReactNode
}
export const Photo = ({ className, placeholder }: PropsWithChildren<PhotoProps>) => {
  const borderRadius = useAtomValue(photoBorderRadiusAtom)
  const [src, setSrc] = useAtom(photoSrcAtom)
  const [inputRef, files] = useUpload({
    accept: 'image/jpg, image/png, image/jpeg',
  })

  useEffect(() => {
    const file = files?.[0] ? URL.createObjectURL(files[0]) : ''
    if (file) {
      setSrc(file)
      return () => {
        URL.revokeObjectURL(file)
      }
    }
  }, [files, setSrc])

  return (
    <div
      className={clsx('overflow-hidden', className)}
      id="deco-artwork"
      style={{
        borderRadius,
      }}
    >
      <label className="cursor-pointer" htmlFor="artwork">
        {src ? <motion.img alt="your artwork" layout src={src} /> : placeholder}
      </label>
      <input className="hidden" id="artwork" name="artwork" ref={inputRef} type="file" />
    </div>
  )
}
