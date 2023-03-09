import { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Board, Frame, Photo, Sidebar } from '~/components/editor'
import { useUpload } from '~/components/upload'

const Home: NextPage = () => {
  const [file, inputProps] = useUpload()

  return (
    <div className="flex h-screen w-screen gap-4 dark:bg-black">
      <div className="w-[248px]">
        <Sidebar />
      </div>
      <div className="relative h-full w-full items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Board className="dark:bg-zinc-800">
            <Frame className="dark:bg-zinc-200">
              <label htmlFor="avatar" className="block h-full w-full">
                {file ? (
                  <Photo src={URL.createObjectURL(file)} />
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-sky-500 to-indigo-500">
                    click to update
                  </div>
                )}
              </label>
              <input id="avatar" name="avatar" {...inputProps} />
            </Frame>
          </Board>
        </div>
      </div>
    </div>
  )
}

export default Home
