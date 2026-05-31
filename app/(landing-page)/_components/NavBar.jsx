"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import useResponsiveNavbar from "../_hooks/useResponsiveNavbar";

function NavBar() {
  const { scrollDirection } = useResponsiveNavbar();

  return (
    <motion.nav
      className="fixed flex justify-between items-center container-center px-6 py-4 bg-transparent/80 backdrop-blur-lg translate-y-6 rounded-lg z-10 border-primary border"
      animate={{ translateY: scrollDirection === "down" ? -100 : 0 }}
      transition={{
        transitionY: 0,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <span className="uppercase tracking-[0.6em]">Ather</span>

      <div className="font-semibold tracking-widest hidden md:flex md:gap-12">
        <Link
          href="#philosophy"
          className="hover:underline hover:underline-offset-2 "
        >
          Philosophy
        </Link>
        <Link
          href="#capabilities"
          className="hover:underline hover:underline-offset-2"
        >
          Capabilities
        </Link>
        <Link
          href="#research"
          className="hover:underline hover:underline-offset-2"
        >
          Research
        </Link>
      </div>

      <Button>Start Designing</Button>
    </motion.nav>
  );
}

export default NavBar;
