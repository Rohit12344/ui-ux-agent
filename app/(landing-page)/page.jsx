import About from "./_components/About";
import Hero from "./_components/Hero";
import Feature from "./_components/Feature";
import { features } from "@/constants";

function LandingPage() {
  return (
    <>
      <Hero />
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
  );
}

export default LandingPage;
