import { easeInOut, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function useAboutScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.96], {
    ease: easeInOut,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [400, 0, 0]);

  const headerScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.6, 1, 0.94],
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

export default useAboutScroll;
