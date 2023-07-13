'use client'

import { useEffect, useState } from 'react'
import { Button, Tab, Tabs, Tooltip } from '@nextui-org/react'
import { ChevronLeftIcon, UploadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import {
  Board,
  BoardAspectRatio,
  BoardBackground,
  ExportButton,
  Frame,
  FrameMode,
  FrameScale,
  Photo,
  PhotoBorderRadius,
} from '~/core/editor'
import { robotoMono } from '~/core/fonts'
import { useUpload } from '~/core/ui/upload'

const sidebarButtonVariants = {
  close: { rotate: -180 },
  open: { rotate: 0 },
}

export default function Page() {
  const [inputRef, files] = useUpload({
    accept: 'image/jpg, image/png, image/jpeg',
  })

  const [hideSidebar, setHideSidebar] = useState<boolean>(false)

  const file = files ? URL.createObjectURL(files[0]) : ''

  useEffect(() => {
    if (file) {
      return () => {
        URL.revokeObjectURL(file)
      }
    }
  }, [file])

  return (
    <div className="flex h-screen w-screen bg-stone-900">
      <AnimatePresence initial={false} mode="popLayout">
        {!hideSidebar && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="min-w-[260px] max-w-[260px]"
            exit={{ opacity: 0, x: -60 }}
            initial={{ opacity: 0, x: -60 }}
            layout
          >
            <div className="flex h-full flex-col justify-between p-4 pr-0">
              <div className="flex flex-col gap-4">
                <h1 className={clsx('rounded-lg py-2 text-4xl font-semibold', robotoMono.variable)}>
                  Deco
                  <span className="ml-2 text-xs">
                    <a href="https://github.com/nnecec" target="_blank">
                      # Foccia.Studio
                    </a>
                  </span>
                </h1>
                <Tabs aria-label="toggle Board mode or Frame mode">
                  <Tab key="board" title="Board">
                    <BoardAspectRatio />
                    <PhotoBorderRadius />
                    <FrameScale />
                    <BoardBackground />
                  </Tab>
                  <Tab key="frame" title="Frame">
                    <FrameMode />
                  </Tab>
                </Tabs>
              </div>
              <ExportButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className="h-full grow p-2" layout>
        <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
          <motion.div
            animate={hideSidebar ? 'close' : 'open'}
            className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"
            initial="open"
            layout
            variants={sidebarButtonVariants}
          >
            <Button isIconOnly onPress={() => setHideSidebar(!hideSidebar)} radius="full">
              <ChevronLeftIcon />
            </Button>
          </motion.div>
          <Board>
            <Frame>
              <Tooltip content="click to upload your ARTWORK.">
                <label className="block cursor-pointer" htmlFor="artwork">
                  {file ? (
                    <Photo src={file} />
                  ) : (
                    <div className="flex aspect-square w-[30vw] items-center justify-center bg-neutral-900">
                      <div className="flex flex-col items-center gap-2">
                        <UploadIcon className="h-8 w-8 text-neutral-500" />
                        <p className="text-2xl text-neutral-500">
                          Upload to{' '}
                          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                            Deco your Artwork
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </label>
              </Tooltip>
            </Frame>
          </Board>
        </div>
      </motion.div>
      <input className="hidden" id="artwork" name="artwork" ref={inputRef} type="file" />
    </div>
  )
}
