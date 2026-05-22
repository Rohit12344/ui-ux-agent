"use client";

import { easeInOut, easeOut, motion, useTransform } from "framer-motion";

function AnimatedChar({ char, index, scrollYProgress }) {
  const staggerPosition = 800 + index * 500;

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [staggerPosition, 1, 0],
    {
      ease: easeOut,
    },
  );

  return (
    <motion.span style={{ translateY: translateY }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default AnimatedChar;
