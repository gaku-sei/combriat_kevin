export function visit(object: unknown, cb: (value: string) => string) {
  if (
    (!Array.isArray(object) && typeof object !== "object") ||
    object === null
  ) {
    return;
  }

  for (const key in object) {
    const k = key as keyof typeof object;
    if (typeof object[k] === "string") {
      (object[k] as string) = cb(object[k]);
    }
    visit(object[k], cb);
  }
}
