'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { UploadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import {
  Board,
  BoardBackground,
  BoardPadding,
  ExportButton,
  Frame,
  FrameMode,
  FrameScale,
  Photo,
  PhotoBorderRadius,
} from '~/core/editor'
import { robotoMono } from '~/core/fonts'

export default function Page() {
  return (
    <div className="flex h-screen w-screen bg-stone-900">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="min-w-[260px] max-w-[260px]"
          exit={{ opacity: 0, x: -60 }}
          initial={{ opacity: 0, x: -60 }}
          layout
        >
          <div className="flex h-full flex-col justify-between p-4 pr-0">
            <div className="flex flex-col gap-2">
              <h1 className={clsx('rounded-lg text-5xl font-bold tracking-wide', robotoMono.variable)}>Deco</h1>
              <Tabs aria-label="toggle Board mode or Frame mode" fullWidth>
                <Tab className="flex flex-col gap-4" key="board" title="Board">
                  <BoardPadding />
                  <PhotoBorderRadius />
                  <FrameScale />
                  <BoardBackground />
                </Tab>
                <Tab key="frame" title="Frame">
                  <FrameMode />
                </Tab>
              </Tabs>
            </div>
            <div>
              <ExportButton />
              <div className="p-1 text-xs text-neutral-500">
                <a href="https://github.com/nnecec" rel="noreferrer" target="_blank">
                  Made by Foccia.Studio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div className="h-full grow p-2" layout>
        <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
          {/* <motion.div className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-100" layout>
            <Button isIconOnly onPress={() => setHideSidebar(!hideSidebar)} radius="full">
              {hideSidebar ? <ViewVerticalIcon /> : <SquareIcon />}
            </Button>
          </motion.div> */}
          <Board>
            <Frame>
              <Photo
                placeholder={
                  <div className="flex aspect-square w-[50vw] items-center justify-center bg-neutral-900">
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
                }
              />
            </Frame>
          </Board>
        </div>
      </motion.div>
      {/* <input className="hidden" id="artwork" name="artwork" ref={inputRef} type="file" /> */}
    </div>
  )
}
