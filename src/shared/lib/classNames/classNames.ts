type Modes = Record<string, (boolean | string)>

export function classNames(
    styles: Record<string, string>,
    cls: string,
    modes: Modes = {},
    additional: string[] = [],
): string {
  const res = [
    cls,
    ...additional.filter(Boolean),
  ];

  for (const key in modes) {
    if (modes[key]) {
      res.push(key);
    }
  }

  return res
      .map((className) => styles[className])
      .join(' ');
}
