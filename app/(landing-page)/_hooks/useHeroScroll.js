import {
  easeOut,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export function useHeroScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "0.5 start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], {
    // ease: easeOut,
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0], {
    ease: easeOut,
  });
  const [currOpacity, setCurrOpacity] = useState(opacity.current);

  const isBackgroundActive = currOpacity > 0;
  useMotionValueEvent(opacity, "change", (latest) => {
    setCurrOpacity(latest);
  });

  return { targetRef, opacity, isBackgroundActive, textOpacity };
}
