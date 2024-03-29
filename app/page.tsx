'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { UploadIcon } from '@radix-ui/react-icons'

import {
  Board,
  BoardBackgroundEyedropper,
  BoardBackgroundMesh,
  BoardBackgroundPalette,
  BoardBackgroundProminent,
  BoardPadding,
  ExportButton,
  Frame,
  FrameMode,
  FrameScale,
  Photo,
  PhotoBorderRadius,
} from '~/core/editor'
import { robotoMono } from '~/core/fonts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/core/ui'

export default function Page() {
  return (
    <div className="flex h-screen w-screen bg-stone-900">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="min-w-[260px] max-w-[260px]"
          exit={{ opacity: 0, x: -60 }}
          initial={{ opacity: 0, x: -60 }}
        >
          <div className="flex h-full flex-col justify-between p-4 pr-0">
            <div className="flex flex-col gap-2">
              <h1 className={clsx('rounded-lg text-5xl font-bold tracking-wide', robotoMono.variable)}>Deco</h1>

              <Tabs aria-label="toggle Board mode or Frame mode" defaultValue="board">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="board">Board</TabsTrigger>
                  <TabsTrigger value="frame">Frame</TabsTrigger>
                </TabsList>
                <TabsContent className="flex flex-col gap-4" value="board">
                  <BoardPadding />
                  <PhotoBorderRadius />
                  <FrameScale />
                  <BoardBackgroundPalette />
                  <BoardBackgroundProminent />
                  <BoardBackgroundEyedropper />
                  <BoardBackgroundMesh />
                </TabsContent>
                <TabsContent value="frame">
                  <FrameMode />
                </TabsContent>
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
      <motion.div className="h-full grow p-2">
        <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
          <Board>
            <Frame>
              <Photo
                placeholder={
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
