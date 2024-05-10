import { useState, useLayoutEffect, useCallback } from "react";

const initialState = {
  width: 0,
  height: 0,
  availHeight: 0,
  availWidth: 0,
};

export default function useScreen(): Omit<
  Screen,
  "orientation" | "pixelDepth" | "colorDepth"
> {
  if (typeof window === "undefined") {
    return initialState;
  }

  const [state, stateSet] = useState(initialState);

  const callback = useCallback(() => stateSet(window.screen), []);

  useLayoutEffect(() => {
    callback();
  }, [callback]);

  useLayoutEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, [callback]);

  return state;
}
