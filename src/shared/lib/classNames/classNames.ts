type Modes = Record<string, boolean | string>;

export function classNames(
  styles: Record<string, string>,
  cls: string,
  modes: Modes = {},
  additional: string[] = [],
): string {
  let res = [cls];

  for (const key in modes) {
    if (modes[key]) {
      res.push(key);
    }
  }

  res = res.map((className) => styles[className]);
  res.push(...additional.filter(Boolean));
  return res.join(' ');
}
