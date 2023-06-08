import type { FrameMode } from '~/core/types'

import { PolaroidFrame } from './polaroid'
import { XiaomiLeicaFrame } from './xiaomi-leica'

export const frameModePresets: Record<string, FrameMode> = {
  Polaroid: PolaroidFrame,
  'Xiaomi - Leica': XiaomiLeicaFrame,
}
