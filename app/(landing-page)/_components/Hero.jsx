"use client";

import Silk from "./Silk";
import { motion, useReducedMotion } from "motion/react";
import { useHeroScroll } from "../_hooks/useHeroScroll";
import { useSupportsWebGL } from "@/app/hooks/useSupportWebGL";
import StaticHeroBackdrop from "./StaticHeroBackdrop";

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const supportsWebGL = useSupportsWebGL();

  const shouldUseSilk = supportsWebGL === true && !prefersReducedMotion;

  const { targetRef, textOpacity, opacity } = useHeroScroll();

  return (
    <motion.div
      className="w-full h-screen relative flex justify-center items-center"
      style={{ opacity: opacity }}
    >
      {shouldUseSilk ? (
        <Silk
          speed={5}
          scale={1}
          color="#FFC0CB"
          noiseIntensity={0.3}
          rotation={0}
          // frameLoop={isBackgroundActive ? "always" : "demand"}
        />
      ) : (
        <StaticHeroBackdrop />
      )}
      <header className=" container-center">
        <motion.h1
          className="text-[clamp(3rem,8vw,6rem)] tracking-tighter leading-[0.95] text-shadow-[5px_5px_5px_rgba(153,106,177,0.18)] w-min mx-auto dark:text-shadow-[5px_5px_5px_rgba(0,0,0,0.8),0_0_40px_rgba(24,192,184,0.3)] z-10"
          style={{ opacity: textOpacity }}
          ref={targetRef}
        >
          <span className="uppercase block text-lg tracking-normal">
            AI Design Intelligence System
          </span>
          Design with <span className="italic font-semibold">Intelligence</span>
          .
          <br />
          Beyond Generation.
        </motion.h1>
      </header>
    </motion.div>
  );
}

export default Hero;
