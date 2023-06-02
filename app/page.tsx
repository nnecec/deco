'use client'

import { useEffect, useState } from 'react'
import { Button, Tab, Tabs, Tooltip } from '@nextui-org/react'
import { ChevronLeftIcon, ChevronRightIcon, UploadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { atom, useAtom } from 'jotai'

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

const artworkAtom = atom('')

export default function Page() {
  const [file, inputProps] = useUpload({
    accept: 'image/jpg, image/png, image/jpeg',
  })
  const [hideSidebar, setHideSidebar] = useState<boolean>(false)
  const [artworkURL, setArtworkURL] = useAtom(artworkAtom)

  useEffect(() => {
    if (file) {
      setArtworkURL(URL.createObjectURL(file))
    }
  }, [file])

  useEffect(() => {
    if (artworkURL) {
      return () => {
        URL.revokeObjectURL(artworkURL)
      }
    }
  }, [artworkURL])

  return (
    <div className="flex h-screen w-screen bg-stone-900">
      {!hideSidebar && (
        <div className="min-w-[260px] max-w-[260px]">
          <div className="flex h-full flex-col justify-between p-4 pr-0">
            <div className="flex flex-col gap-4">
              <h1 className={clsx(robotoMono.className, 'rounded-lg py-2 text-4xl font-semibold')}>
                Deco
                <span className="ml-2 text-xs">
                  <a href="https://twitter.com/nnecec_cn" target="_blank">
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
        </div>
      )}
      <div className="h-full grow p-4">
        <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-xl bg-black shadow-xl">
          <div className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
            <Button isIconOnly onPress={() => setHideSidebar(!hideSidebar)}>
              {hideSidebar ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </Button>
          </div>
          <Board>
            <Frame>
              <Tooltip content="Click to upload your artwork.">
                <label htmlFor="artwork" className="block cursor-pointer">
                  {artworkURL ? (
                    <Photo src={artworkURL} />
                  ) : (
                    <div className="flex h-[500px] w-[500px] items-center justify-center bg-neutral-900">
                      <div className="flex flex-col items-center gap-2">
                        <UploadIcon className="h-6 w-6 text-neutral-500" />
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
  )
}
