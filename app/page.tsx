'use client'

import { SSRProvider } from 'react-aria'
import { NextUIProvider } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { ThemeProvider } from "next-themes";

import {
  Board,
  BoardAspectRatio,
  BoardBackground,
  ExportButton,
  Frame,
  Photo,
  PhotoBorderRadius,
  PhotoScale,
} from '~/components/editor'
import { useUpload } from '~/components/upload'

export default function Page() {
  const [file, inputProps] = useUpload()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>
        <SSRProvider>
          <div className="flex h-screen w-screen bg-stone-800">
            <div className="basis-[260px]">
              <div className="flex h-full flex-col justify-between p-4 pr-0">
                <div className="flex flex-col gap-4">
                  <BoardAspectRatio />
                  <PhotoBorderRadius />
                  <PhotoScale />
                  <BoardBackground />
                </div>
                <ExportButton />
              </div>
            </div>
            <motion.div className="h-full grow p-4">
              <div className="relative flex h-full items-center justify-center rounded-xl bg-black shadow">
                <Board>
                  <Frame className="">
                    <label htmlFor="avatar" className="block">
                      {file ? (
                        <Photo src={URL.createObjectURL(file)} />
                      ) : (
                        <Photo src="https://images.unsplash.com/photo-1677414519330-b95a8ee85c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80" />
                      )}
                    </label>
                    <input id="avatar" name="avatar" {...inputProps} />
                  </Frame>
                </Board>
              </div>
            </motion.div>
          </div>
        </SSRProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
