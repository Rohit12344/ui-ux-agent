"use client";
import React from "react";
import Feature from "./Feature";
import { features } from "@/constants";
import Iridescence from "./Iridescence";

function Features() {
  return (
    <div className="w-full h-fit relative">
      <Iridescence
        color={[0.3215686274509804, 0.1254901960784314, 0.5058823529411765]}
        mouseReact={false}
        amplitude={0.2}
        speed={1}
      />
      {features.map((feature, index) => (
        <Feature
          key={index}
          number={index + 1}
          feature={feature.feature}
          description={feature.description}
          img={feature.img}
        />
      ))}
    </div>
    // </>
  );
}

export default Features;
