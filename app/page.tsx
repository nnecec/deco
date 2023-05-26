'use client'

import { useEffect, useState } from 'react'
import { Button, NextUIProvider, Tooltip } from '@nextui-org/react'
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
  IconPhotoUp,
} from '@tabler/icons-react'
import { ThemeProvider } from 'next-themes'

import { useUpload } from '~/core/components/upload'
import {
  Board,
  BoardAspectRatio,
  BoardBackground,
  ExportButton,
  Frame,
  Photo,
  PhotoBorderRadius,
  PhotoScale,
} from '~/core/editor'

export default function Page() {
  const [file, inputProps] = useUpload({
    accept: 'image/jpg, image/png, image/jpeg',
  })
  const [hideSidebar, setHideSidebar] = useState<boolean>(false)
  const [tempImageUrl, setTempImageUrl] = useState<string>('')

  useEffect(() => {
    if (file) {
      setTempImageUrl(URL.createObjectURL(file))
    }
  }, [file])

  useEffect(() => {
    if (tempImageUrl) {
      return () => {
        URL.revokeObjectURL(tempImageUrl)
      }
    }
  }, [tempImageUrl])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>
        <div className="flex h-screen w-screen bg-stone-800">
          {!hideSidebar && (
            <div className="min-w-[260px] max-w-[260px]">
              <div className="flex h-full flex-col justify-between p-4 pr-0">
                <div className="flex flex-col gap-4">
                  <h1 className="rounded-lg py-2 text-4xl font-semibold">
                    Deco
                    <span className="ml-2 text-xs">
                      <a href="https://twitter.com/nnecec_cn" target="_blank">
                        × Foccia.Studio
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
            </div>
          )}
          <div className="h-full grow p-4">
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
                    <label htmlFor="artwork" className="block cursor-pointer">
                      {tempImageUrl ? (
                        <Photo src={tempImageUrl} />
                      ) : (
                        <div className="flex h-[500px] w-[500px] items-center justify-center bg-neutral-100">
                          <div className="flex flex-col items-center gap-2">
                            <IconPhotoUp size={40} className="text-neutral-500" />
                            <p className="text-xl text-neutral-500">
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
              </Board>
            </div>
          </div>
        </div>
      </NextUIProvider>
    </ThemeProvider>
  )
}
