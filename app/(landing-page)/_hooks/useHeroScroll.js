import {
  easeInOut,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export function useHeroScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], {
    ease: easeInOut,
  });
  const [currOpacity, setCurrOpacity] = useState(opacity.current);

  const isBackgroundActive = currOpacity > 0;
  useMotionValueEvent(opacity, "change", (latest) => {
    setCurrOpacity(latest);
  });

  return { targetRef, opacity, isBackgroundActive };
}
