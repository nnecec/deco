import {motion} from 'framer-motion'

import { Board, Frame, Photo, Sidebar } from '~/components/editor'
import { useUpload } from '~/components/upload'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [file, inputProps] = useUpload()

  return (
    <div className="flex h-screen w-screen gap-4 dark:bg-black">
      <div className="basis-[248px]">
        <Sidebar />
      </div>
      <motion.div layout className="relative flex h-full grow items-center justify-center">
        <Board>
          <Frame className="">
            <label htmlFor="avatar" className="block">
              {file ? (
                <div className="h-full w-full bg-gradient-to-r from-sky-500 to-indigo-500">
                  click to update
                </div>
              ) : (
                // <Photo src={URL.createObjectURL(file)} />
                <Photo src="https://images.unsplash.com/photo-1678737046425-c85475e7855f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1270&q=80" />
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