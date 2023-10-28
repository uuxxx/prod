export function isKeyOf<T extends object>(
    key: string | number | symbol,
    obj: T,
): asserts key is keyof T {
  if (!(key in obj)) {
    throw new Error(`${String(key)} isn't keyof ${JSON.stringify(obj)}`);
  }
}
