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
          onValueChange={w => {
            setAspectRatio({ ...aspectRatio, w: Number(w) })
          }}
          label="Width"
          type="number"
          value={String(aspectRatio.w)}
        />
        <Input
          onValueChange={h => {
            setAspectRatio({ ...aspectRatio, h: Number(h) })
          }}
          label="Height"
          type="number"
          value={String(aspectRatio.h)}
        />

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button className="h-auto w-20" isIconOnly variant="ghost">
              <DotsVerticalIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            onAction={value => {
              const [w, h] = (value as string).split('/')
              setAspectRatio({ h: Number(h), w: Number(w) })
            }}
            aria-label="Actions"
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
