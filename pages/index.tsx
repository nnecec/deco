import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Board, Framer, Photo, Toolbar } from '~/components/editor'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen gap-4 dark:bg-black">
      <div className="w-[248px]">
        <Toolbar />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <Board className="h-3/5 w-4/5 dark:bg-zinc-800">
          <Framer className="h-5/6 w-5/6 dark:bg-zinc-200">
            <Photo />
          </Framer>
        </Board>
      </div>
    </div>
  )
}

export default Home
