"use client";

import Silk from "./Silk";
import { motion } from "motion/react";
import { useHeroScroll } from "../_hooks/useHeroScroll";

function Hero({ setSilkReady }) {
  const { targetRef, opacity, isBackgroundActive } = useHeroScroll();

  return (
    <motion.div style={{ opacity }}>
      <Silk
        speed={isBackgroundActive ? 5 : 0}
        scale={1}
        color="#FFC0CB"
        noiseIntensity={0.3}
        rotation={0}
        onReady={() => setSilkReady(true)}
        frameLoop={isBackgroundActive ? "always" : "demand"}
      />

      <header className="py-30 container-center">
        <h1
          className="text-[clamp(3rem,8vw,6rem)] tracking-tighter leading-[0.95] text-shadow-[5px_5px_5px_rgba(0,0,0,0.8),0_0_40px_rgba(24,192,184,0.3)] w-min mx-auto"
          ref={targetRef}
        >
          <span className="uppercase block text-lg tracking-normal">
            AI Design Intelligence System
          </span>
          Design with <span className="italic font-semibold">Intelligence</span>
          .
          <br />
          Beyond Generation.
        </h1>
      </header>
    </motion.div>
  );
}

export default Hero;
