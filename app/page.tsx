'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button, Tab, Tabs, Tooltip } from '@nextui-org/react'
import { ChevronLeftIcon, UploadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

import { useUpload } from '~/core/components/upload'
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

const MotionBoard = motion(Board)

const sidebarButtonVariants = {
  open: { rotate: 0 },
  close: { rotate: -180 },
}

export default function Page() {
  const [file, inputProps] = useUpload({
    accept: 'image/jpg, image/png, image/jpeg',
  })
  const [hideSidebar, setHideSidebar] = useState<boolean>(false)

  const artworkURL = useMemo(() => (file ? URL.createObjectURL(file) : undefined), [file])

  useEffect(() => {
    if (artworkURL) {
      return () => {
        URL.revokeObjectURL(artworkURL)
      }
    }
  }, [artworkURL])

  return (
    <div className="flex h-screen w-screen bg-stone-900">
      <LayoutGroup>
        <AnimatePresence mode="popLayout" initial={false}>
          {!hideSidebar && (
            <motion.div
              className="min-w-[260px] max-w-[260px]"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              layout
            >
              <div className="flex h-full flex-col justify-between p-4 pr-0">
                <div className="flex flex-col gap-4">
                  <h1
                    className={clsx('rounded-lg py-2 text-4xl font-semibold', robotoMono.variable)}
                  >
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
                <ExportButton isDisabled={!file} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="h-full grow p-2" layout>
          <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
            <motion.div
              className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"
              layout
              variants={sidebarButtonVariants}
              initial="open"
              animate={hideSidebar ? 'close' : 'open'}
            >
              <Button isIconOnly radius="full" onPress={() => setHideSidebar(!hideSidebar)}>
                <ChevronLeftIcon />
              </Button>
            </motion.div>

            <motion.div className="" layout>
              <MotionBoard layout>
                <Frame>
                  <Tooltip content="Click to upload your artwork.">
                    <label htmlFor="artwork" className="block h-full cursor-pointer">
                      {artworkURL ? (
                        <Photo
                          src={artworkURL}
                          // className="max-h-[80vh] w-[80vw] max-w-[600px] md:max-h-[65vh] md:w-[65vw] lg:max-h-[50vh] lg:w-[50vw]"
                        />
                      ) : (
                        <div className="flex aspect-square w-[500px] items-center justify-center bg-neutral-900">
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
                      <input id="artwork" name="artwork" {...inputProps} />
                    </label>
                  </Tooltip>
                </Frame>
              </MotionBoard>
            </motion.div>
          </div>
        </motion.div>
      </LayoutGroup>
    </div>
  )
}
