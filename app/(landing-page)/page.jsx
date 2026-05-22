"use client";

import NavBar from "./_components/NavBar";
import About from "./_components/About";
import Hero from "./_components/Hero";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

function LandingPage() {
  const [silkReady, setSilkReady] = useState(false);
  console.log("Silk Ready:", silkReady);
  return (
    <>
      {!silkReady && (
        <div className="w-full! h-screen! translate-1/2 fixed! text-black container-center">
          <Spinner className="size-8 " />
        </div>
      )}

      <div
        className={`relative flex flex-col items-center ${silkReady ? "visible" : "invisible"} `}
      >
        {silkReady && <NavBar />}
        <Hero setSilkReady={setSilkReady} />
        {silkReady && <About />}
      </div>
    </>
  );
}

export default LandingPage;
