import { cubicBezier, easeOut, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function useFeatureScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.2 end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.96], {
    ease: easeOut,
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 1],
    [0, 0, 1, 1],
    {
      // ease: easeOut,
      ease: cubicBezier(0.1, 0.9, 0.2, 1),
      foregroundY: [0, 2],
      backgroundY: [0, 0.5],
    },
  );
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [400, 0, 0], {
    ease: easeOut,
  });

  const headerScale = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1.5, 1, 0.94],
    {
      ease: easeOut,
    },
  );
  return {
    targetRef,
    scrollYProgress,
    scale,
    opacity,
    translateY,
    headerScale,
  };
}

export default useFeatureScroll;
