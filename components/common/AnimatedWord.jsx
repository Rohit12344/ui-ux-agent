"use client";

import React from "react";
import { motion } from "motion/react";

function AnimatedWord({ word, lineHeight = "1.6rem" }) {
  return (
    <motion.span
      className="inline-block text-[clamp(0.8rem,2vw,3rem)] font-bold "
      initial={{ translateY: lineHeight }}
      whileInView={{
        translateY: 0,
        transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
    >
      {word}
    </motion.span>
  );
}

export default AnimatedWord;
