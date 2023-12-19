'use client'
// https://github.com/luukdv/color.js
type Options = {
  /**
   * Default: 5
   * The amount of colors that should be returned.
   * When set to 1 a singular value is returned, otherwise an array of values.
   * */
  amount: number
  /**
   * Default: 20
   * Configures how many similar colors should be combined into one color.
   * A value of 1 would mean every individual color would be considered, but this is often not ideal.
   * Especially in photographs there's usually a lot of color data, and grouping colors could give more usable results.
   * In the first example below, group is set to 5 and a lot of individual colors in the sea are returned.
   * When more grouping is applied (30 in the second example), the results become more distinct.
   * */
  group: number
  /**
   *
   * */
  parser?: (rgb: RGB) => unknown
  /**
   * Default: 10
   * Configures how many pixels of an image should be processed.
   * For example, a value of 20 means every 20th pixel is interpreted.
   * A higher value means less accurate results, but better performance.
   * An example of default sampling on an image
   * */
  sample: number
}
type Data = Uint8ClampedArray
export type RGB = {
  b: number
  g: number
  r: number
}
type Equation = (data: Data, args: Options) => RGB[]
type Image = HTMLImageElement | Url
type Url = string

const getSrc = (img: Image): string => (typeof img === 'string' ? img : img.src)

const split = (number: number, duration: number): number => {
  const grouped = Math.round(number / duration) * duration

  return Math.min(grouped, 255)
}

const getImageData = (src: Url): Promise<Data> =>
  new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    let img: any = new Image()

    img.addEventListener('load', () => {
      canvas.height = img.height
      canvas.width = img.width
      context.drawImage(img, 0, 0)

      const data = context.getImageData(0, 0, img.width, img.height).data

      resolve(data)
      img = null
    })
    img.addEventListener('error', () => reject(new Error('Image loading failed.')))
    img.crossOrigin = ''
    img.src = src
  })

const getAverage = (data: Data, { sample }: Options): RGB[] => {
  const gap = 4 * sample
  const amount = data.length / gap
  const rgb = { b: 0, g: 0, r: 0 }

  for (let i = 0; i < data.length; i += gap) {
    rgb.r += data[i]!
    rgb.g += data[i + 1]!
    rgb.b += data[i + 2]!
  }

  return [
    {
      b: Math.round(rgb.b / amount),
      g: Math.round(rgb.g / amount),
      r: Math.round(rgb.r / amount),
    },
  ]
}

const getProminent = (data: Data, { amount, group, sample }: Options): RGB[] => {
  const gap = 4 * sample
  const colors: { [key: string]: number } = {}

  for (let i = 0; i < data.length; i += gap) {
    const rgb = [split(data[i]!, group), split(data[i + 1]!, group), split(data[i + 2]!, group)].join(',')

    colors[rgb] = colors[rgb] ? colors[rgb]! + 1 : 1
  }

  return Object.entries(colors)
    .sort(([, valA], [, valB]) => valB - valA)
    .slice(0, amount)
    .map(([rgb]) => {
      const [r, g, b] = rgb.split(',').map(Number)
      return { b: b!, g: g!, r: r! }
    })
}

const createDropper = (equation: Equation, img: Image, options?: Partial<Options>): Promise<RGB[]> =>
  new Promise((resolve, reject) =>
    getImageData(getSrc(img))
      .then(data =>
        resolve(
          equation(data, {
            amount: 5,
            group: 20,
            sample: 10,
            ...options,
          }),
        ),
      )
      .catch(error => reject(error)),
  )

const average = (img: Image, options?: Partial<Options>) => createDropper(getAverage, img, options)
const prominent = (img: Image, options?: Partial<Options>) => createDropper(getProminent, img, options)

export { average, prominent }

export const getColors = async (img: Image, options?: Partial<Options>) => {
  const parser = options?.parser ?? (rgb => rgb)
  const colors = await prominent(img, { ...options, amount: 7 })
  const color = await average(img, options)

  return [...color, ...colors].map(o => parser(o))
}
