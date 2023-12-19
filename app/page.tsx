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
import { jetbrainsMono } from '~/core/fonts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/core/ui'

import styles from './styles.module.css'

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
              <h1 className={clsx('rounded-lg text-5xl font-bold tracking-wide', jetbrainsMono.variable)}>Deco</h1>

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
      <div className="h-full grow p-2">
        <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
          <Board>
            <Frame>
              <Photo
                placeholder={
                  <div className="flex aspect-square w-[30vw] items-center justify-center bg-neutral-900">
                    <div className="flex flex-col items-center gap-2">
                      <UploadIcon className="size-8 text-neutral-500" />
                      <p className="group text-xl text-neutral-500">
                        Upload to{' '}
                        <span
                          className={clsx(
                            styles['text-gradient-move'],
                            'inline-flex bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-[200%_auto] bg-clip-text text-2xl font-bold text-transparent',
                          )}
                        >
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
      </div>
      {/* <input className="hidden" id="artwork" name="artwork" ref={inputRef} type="file" /> */}
    </div>
  )
}
