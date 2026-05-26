"use client";

import { easeInOut, useTransform, motion } from "motion/react";

function AnimatedChar({ char, index, scrollYProgress }) {
  const staggerPosition = index * 10;

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [staggerPosition, 0, 0],
    {
      ease: easeInOut,
      foregroundY: [0, 2],
      backgroundY: [0, 0.5],
    },
  );

  return (
    <motion.span style={{ translateY: translateY }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default AnimatedChar;
