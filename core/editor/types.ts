import type { ClassValue } from 'clsx'

export type FrameMode<T = Partial<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = {
  designer: {
    className: string
    items: DesignerNode<T>[]
  }
  frame: {
    className: string
    designer: string
  }
  name: string
}

type DesignerNode<T> = {
  children?: React.ReactNode
  component?: React.ReactNode | string
  name?: string
  props?: Omit<T, 'className'> & {
    className: ClassValue | ClassValue[]
  }
}
