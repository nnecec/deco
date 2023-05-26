// https:// github.com/cristicretu/meshgrad

import chroma from 'chroma-js'

const getRandomColor = (): number => {
  return Math.round(Math.random() * 360)
}

const getPercent = (value: number): number => {
  return Math.round((Math.random() * (value * 100)) % 100)
}

const getHashPercent = (value: number, hash: number, length: number): number => {
  return Math.round(((hash / length) * (value * 100)) % 100)
}

const hexToHSL = (hex?: string): number | undefined => {
  if (hex === undefined) return undefined
  const [h] = chroma(hex).hsl()
  return h
}

const genColors = (length: number, initialHue: number, lightness: number): string[] => {
  const l = lightness % 100

  return Array.from({ length }, (_, i) => {
    // analogous colors + complementary colors
    // https://uxplanet.org/how-to-use-a-split-complementary-color-scheme-in-design-a6c3f1e22644

    // base color
    if (i === 0) {
      return `hsl(${initialHue}, 100%, ${l}%)`
    }
    // analogous colors
    if (i < length / 1.4) {
      return `hsl(${initialHue - 30 * (1 - 2 * (i % 2)) * (i > 2 ? i / 2 : i)}, 100%, ${
        l - i * (1 - 2 * (i % 2)) * 1.75
      }%)`
    }

    // complementary colors
    return `hsl(${initialHue - 150 * (1 - 2 * (i % 2))}, 100%, ${
      l - i * (1 - 2 * (i % 2)) * 1.25
    }%)`
  })
}

export type Options = {
  amount?: number
  lightness?: number
  hash?: number
}

export const meshGradient = (baseColor?: string, options?: Options) => {
  const { amount, lightness, hash } = { amount: 5, lightness: 50, ...options }
  const colors = genColors(amount, hexToHSL(baseColor) ?? getRandomColor(), lightness)

  const proprieties = Array.from({ length: amount }, (_, i) => {
    return `radial-gradient(at ${hash ? getHashPercent(i, hash, amount) : getPercent(i)}% ${
      hash ? getHashPercent(i * 10, hash, amount) : getPercent(i * 10)
    }%, ${colors[i]} 0px, transparent 50%)\n`
  })
  return [colors[0], proprieties.join(',')]
}
