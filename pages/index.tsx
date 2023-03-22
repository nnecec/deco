import { motion } from 'framer-motion'

import {
  Board,
  BoardAspectRatio,
  BoardBackground,
  Export,
  Frame,
  Photo,
  PhotoBorderRadius,
  PhotoScale,
} from '~/components/editor'
import { Progress } from '~/components/ui'
import { useUpload } from '~/components/upload'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [file, inputProps] = useUpload()

  return (
    <div className="flex h-screen w-screen gap-4 bg-black">
      <div className="basis-[248px]">
        <div className="flex h-full flex-col p-2">
          <div>
            <BoardAspectRatio />
            <PhotoBorderRadius />
            <PhotoScale />
            <BoardBackground />
            <Export />
            <Progress value={50}/>
          </div>
          ),
        </div>
      </div>
      <motion.div layout className="relative flex h-full grow items-center justify-center">
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
      </motion.div>
    </div>
  )
}

export default Home
