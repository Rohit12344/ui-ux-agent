"use client";

import AnimatedWord from "@/components/common/AnimatedWord";
import { motion } from "motion/react";

function About() {
  // const {
  //   targetRef,
  //   scrollYProgress,
  //   scale,
  //   opacity,
  //   translateY,
  //   headerScale,
  // } = useAboutScroll();

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center text-[clamp(0.8rem,2.2vw,3rem)] leading-9 font-medium bg-background overflow-hidden z-10"
      // ref={targetRef}
    >
      <h1 className="text-2xl font-bold mb-16 tracking-widest overflow-hidden text-muted-foreground">
        <AnimatedWord word="About Ather" />
      </h1>

      <p className="max-w-[45ch] overflow-hidden">
        <AnimatedWord
          word={"Ather is an AI collaborator that thinks like"}
          lineHeight="2rem"
        />
      </p>

      <p className="max-w-[45ch] overflow-hidden">
        <AnimatedWord
          word={"a senior product designer - understanding"}
          lineHeight="2rem"
        />
      </p>

      <p className="max-w-[45ch] overflow-hidden">
        <AnimatedWord
          word={"context, critiquing ideas, and "}
          lineHeight="2rem"
        />
      </p>

      <p className="max-w-[45ch] overflow-hidden">
        <AnimatedWord
          word={"guiding you to exceptional design."}
          lineHeight="2rem"
        />
      </p>

      {/* senior product designer &mdash;
      
      {"understanding context, critiquing ideas, and guiding you to exceptional design."
        .split("")
        .map((word, index) => {
          return (
            <p className="max-w-[45ch] overflow-hidden" key={index}>
              <AnimatedWord key={index} word={word} lineHeight="2rem" />{" "}
            </p>
          );
        })} */}
    </div>
  );
}

export default About;
