type Modes = Record<string, (boolean | string)> 

export function classNames(cls: string, modes: Modes = {}, additional: string[] = []): string {
  const res = [
    cls,
    ...additional,
  ]

  for(const key in modes) {
    if(modes[key]) {
      res.push(key)
    }
  }

  return res.join(' ')
}