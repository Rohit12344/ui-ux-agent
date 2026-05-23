"use client";

import AnimatedChar from "@/components/common/AnimatedChar";
import { motion } from "motion/react";
import useFeatureScroll from "../_hooks/useFeatureScroll";
import Image from "next/image";

function Feature({ number, feature, description, img }) {
  const {
    targetRef,
    scrollYProgress,
    scale,
    opacity,
    translateY,
    headerScale,
  } = useFeatureScroll();

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-evenly text-3xl leading-9 font-medium bg-primary-foreground  dark:bg-primary overflow-hidden"
      ref={targetRef}
    >
      <motion.p className="text-3xl font-bold" style={{ opacity: opacity }}>
        Feature #{number}
      </motion.p>
      <motion.h1
        className="text-8xl font-bold mb-4 overflow-hidden"
        style={{ scale: headerScale }}
      >
        {feature.split("").map((char, index) => {
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

      <Image
        src={img || "design-reasoning.svg"}
        alt="Design Reasoning"
        width={120}
        height={120}
        style={{ scale: headerScale }}
      ></Image>

      <motion.p
        style={{ translateY, opacity, scale }}
        className="max-w-[45ch] text-center"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default Feature;
