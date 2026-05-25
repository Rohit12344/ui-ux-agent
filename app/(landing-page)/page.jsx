"use client";

import NavBar from "./_components/NavBar";
import About from "./_components/About";
import Hero from "./_components/Hero";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Feature from "./_components/Feature";
import { features } from "@/constants";
import Footer from "./_components/Footer";

function LandingPage() {
  const [silkReady, setSilkReady] = useState(false);

  return (
    <>
      {!silkReady && (
        <div className="w-full! h-screen! translate-1/2 fixed! text-white container-center">
          <Spinner className="size-8 " />
        </div>
      )}

      <div
        className={`relative flex flex-col items-center ${silkReady ? "visible" : "invisible"}`}
      >
        {silkReady && <NavBar />}
        <Hero setSilkReady={setSilkReady} />
        {silkReady && (
          <>
            <About />
            {features.map((feature, index) => (
              <Feature
                key={index}
                number={index + 1}
                feature={feature.feature}
                description={feature.description}
                img={feature.img}
              />
            ))}
          </>
        )}
        {silkReady && <Footer />}
      </div>
    </>
  );
}

export default LandingPage;
