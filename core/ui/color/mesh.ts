// forked from https://github.com/cristicretu/meshgrad

import type { AnyColor, HslColor } from 'colord'

import { colord } from 'colord'

export type Options = {
  amount?: number // color amount
  hash?: number // same color in different places
  offset?: number // color offset
}

const getPercent = (value: number): number => {
  return Math.round((Math.random() * (value * 100)) % 100)
}

const getHashPercent = (value: number, hash: number, length: number): number => {
  return Math.round(((hash / length) * (value * 100)) % 100)
}

const genColors = (hsl: HslColor, { amount, offset }: Required<Omit<Options, 'hash'>>): string[] => {
  return Array.from({ length: amount }, (_, i) => {
    // analogous colors + complementary colors
    // https://uxplanet.org/how-to-use-a-split-complementary-color-scheme-in-design-a6c3f1e22644

    // base color
    if (i === 0) {
      return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    }
    // analogous colors
    if (i < length / 1.4) {
      return `hsl(${hsl.h - 10 * offset * (1 - 2 * (i % 2)) * (i > 2 ? i / 2 : i)}, ${hsl.s}%, ${
        hsl.l - i * (1 - 2 * (i % 2)) * 1.75
      }%)`
    }
    return `hsl(${hsl.h - 20 * offset * (1 - 2 * (i % 2))}, ${hsl.s}%, ${hsl.l - i * (1 - 2 * (i % 2)) * 1.25}%)`
  })
}

export const meshGradient = (baseColor: AnyColor, options?: Options) => {
  const { amount, hash, offset } = { amount: 5, hash: undefined, offset: 1, ...options }
  const colors = genColors(colord(baseColor).toHsl(), { amount, offset })

  const proprieties = Array.from({ length: amount }, (_, i) => {
    return `radial-gradient(at ${hash ? getHashPercent(i, hash, amount) : getPercent(i)}% ${
      hash ? getHashPercent(i * 10, hash, amount) : getPercent(i * 10)
    }%, ${colors[i]} 0px, transparent 55%)\n`
  })
  return [colors[0], proprieties.join(',')]
}
