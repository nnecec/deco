import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { useAtom } from 'jotai'

import { boardAspectRatioAtom } from '../store'

export const BoardAspectRatio = () => {
  const [aspectRatio, setAspectRatio] = useAtom(boardAspectRatioAtom)

  return (
    <div>
      <div className="flex gap-2">
        <Input
          label="Width"
          type="number"
          value={String(aspectRatio.w)}
          onValueChange={w => {
            setAspectRatio({ ...aspectRatio, w: Number(w) })
          }}
        />
        <Input
          label="Height"
          type="number"
          value={String(aspectRatio.h)}
          onValueChange={h => {
            setAspectRatio({ ...aspectRatio, h: Number(h) })
          }}
        />

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button className="h-auto w-20" isIconOnly variant="ghost">
              <DotsVerticalIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Actions"
            onAction={value => {
              const [w, h] = (value as string).split('/')
              setAspectRatio({ w: Number(w), h: Number(h) })
            }}
          >
            <DropdownItem key="1/1">1:1</DropdownItem>
            <DropdownItem key="4/3">4:3</DropdownItem>
            <DropdownItem key="3/4">3:4</DropdownItem>
            <DropdownItem key="3/2">3:2</DropdownItem>
            <DropdownItem key="2/3">2:3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
