import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useAtom } from 'jotai'

import {
  boardAspectRatioAtom,
  boardBackgroundAtom,
  photoBorderRadiusAtom,
  photoScaleAtom,
} from '../../store'

export const BoardBackground = () => {

  const [color, setColor] = useState("#aabbcc");

  return (
    <HexColorPicker color={color} onChange={setColor} style={{width: '100%'}}/>
  )
}
