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
    featureTitleOpacity,
  } = useFeatureScroll();

  return (
    <div
      className="h-[150vh] last:h-screen w-full flex flex-col items-center justify-center gap-12 leading-9 font-medium bg-linear-to-b from-background to-primary-foreground bg-fixed dark:bg-radial-[at_85%_25%] dark:from-primary dark:to-background overflow-x-hidden z-10"
      ref={targetRef}
    >
      <motion.p
        className="text-xl sm:text-3xl font-bold"
        style={{ opacity: featureTitleOpacity }}
      >
        Feature #{number}
      </motion.p>
      <motion.h1
        className="text-[5.5vw]/[3vh] sm:leading-[15vh] font-bold mb-4 overflow-hidden"
        style={{ scale: headerScale, translateY }}
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

      <motion.div style={{ scale }}>
        <Image
          src={img || "design-reasoning.svg"}
          alt="Design Reasoning"
          width={100}
          height={100}
        ></Image>
      </motion.div>

      <motion.p
        style={{ opacity, scale }}
        className="max-w-[45ch] text-center text-[clamp(1rem,3vw,2rem)]"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default Feature;
