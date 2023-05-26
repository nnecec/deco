'use client'

import { useEffect, useMemo, useState } from 'react'
import { SSRProvider } from 'react-aria'
import { Button, NextUIProvider, Tooltip } from '@nextui-org/react'
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
  IconPhotoUp,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

import {
  Board,
  BoardAspectRatio,
  BoardBackground,
  ExportButton,
  Frame,
  Photo,
  PhotoBorderRadius,
  PhotoScale,
} from '~/core/components/editor'
import { useUpload } from '~/core/components/upload'

export default function Page() {
  const [file, inputProps] = useUpload({
    accept: 'image/jpg, image/png, image/jpeg',
  })
  const [hideSidebar, setHideSidebar] = useState(false)

  const url = useMemo(() => (file ? URL.createObjectURL(file) : undefined), [file])

  useEffect(() => {
    if (url) {
      return () => {
        URL.revokeObjectURL(url)
      }
    }
  }, [url])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>
        <SSRProvider>
          <div className="flex h-screen w-screen bg-stone-800">
            {!hideSidebar && (
              <motion.div className="min-w-[260px] max-w-[260px]">
                <div className="flex h-full flex-col justify-between p-4 pr-0">
                  <div className="flex flex-col gap-4">
                    <h1 className="rounded-lg py-2 text-4xl">
                      Decox
                      <span className="ml-2 text-xs">
                        <a href="https://twitter.com/nnecec_cn" target="_blank">
                          @nnecec
                        </a>
                      </span>
                    </h1>
                    <BoardAspectRatio />
                    <PhotoBorderRadius />
                    <PhotoScale />
                    <BoardBackground />
                  </div>
                  <ExportButton isDisabled={!file} />
                </div>
              </motion.div>
            )}
            <motion.div className="h-full grow p-4">
              <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
                <div className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button isIconOnly onPress={() => setHideSidebar(!hideSidebar)}>
                    {hideSidebar ? (
                      <IconLayoutSidebarRightCollapse />
                    ) : (
                      <IconLayoutSidebarLeftCollapse />
                    )}
                  </Button>
                </div>
                <Board>
                  <Frame className="">
                    <Tooltip content="Click to upload your artwork.">
                      <label htmlFor="avatar" className="block cursor-pointer">
                        {url ? (
                          <Photo src={url} />
                        ) : (
                          <div className="flex h-[500px] w-[500px] items-center justify-center bg-neutral-100">
                            <div className="flex flex-col items-center gap-2">
                              <IconPhotoUp size={40} className="text-neutral-500" />
                              <p className="text-xl text-neutral-500">Upload to {" "}
                                <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                                  Decox your Artwork
                                </span></p>
                            </div>
                          </div>
                        )}
                        <input id="avatar" name="avatar" {...inputProps} />
                      </label>
                    </Tooltip>
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
