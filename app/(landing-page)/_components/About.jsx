"use client";

import AnimatedChar from "@/components/common/AnimatedChar";
import { motion } from "motion/react";

import useAboutScroll from "../_hooks/useAboutScroll";

function About() {
  const {
    targetRef,
    scrollYProgress,
    scale,
    opacity,
    translateY,
    headerScale,
  } = useAboutScroll();

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center text-3xl  text-[#000080] leading-9 font-medium bg-linear-to-b from-background to-white/80 gap-6  overflow-hidden"
      ref={targetRef}
    >
      <motion.h1
        className="text-9xl font-bold mb-4 tracking-widest overflow-hidden"
        style={{ scale: headerScale }}
      >
        {"About Ather".split("").map((char, index) => {
          return (
            <AnimatedChar
              key={index}
              char={char}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          );
        })}
      </motion.h1>

      <motion.p style={{ translateY, opacity, scale }} className="max-w-[50ch]">
        Ather is an AI collaborator that thinks like a senior product designer
        &mdash; understanding context, critiquing ideas, and guiding you to
        exceptional design.
      </motion.p>
    </div>
  );
}

export default About;
