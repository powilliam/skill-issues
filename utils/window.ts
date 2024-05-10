export function screen(): Omit<
  Screen,
  "orientation" | "pixelDepth" | "colorDepth"
> {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
      availHeight: 0,
      availWidth: 0,
    };
  }

  return window.screen;
}
