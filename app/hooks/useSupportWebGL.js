"use client";

import { useEffect, useState } from "react";

export function useSupportsWebGL() {
  const [supportsWebGL, setSupportsWebGL] = useState(null);

  useEffect(() => {
    function createCanvas() {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl");
        setSupportsWebGL(Boolean(gl));
      } catch {
        setSupportsWebGL(false);
      }
    }

    createCanvas();
  }, []);

  return supportsWebGL;
}
