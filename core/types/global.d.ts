interface EyeDropperOpenOptions {
  signal?: AbortSignal
}

interface ColorSelectionResult {
  sRGBHex: string
}

interface EyeDropper {
  open: (options?: EyeDropperOpenOptions) => Promise<ColorSelectionResult>
}

interface EyeDropperConstructor {
  new (): EyeDropper
}

interface Window {
  EyeDropper: EyeDropperConstructor
}
