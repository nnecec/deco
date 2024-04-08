import type { FrameMode } from '../../types'

import { Polaroid1989Frame } from './polaroid-1989'
import { XiaomiLeicaFrame } from './xiaomi-leica'

export const frameModePresets: Record<string, FrameMode> = {
  [Polaroid1989Frame.name]: Polaroid1989Frame,
  [XiaomiLeicaFrame.name]: XiaomiLeicaFrame,
}
