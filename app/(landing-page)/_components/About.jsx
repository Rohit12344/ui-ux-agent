import AnimatedWord from "@/components/common/AnimatedWord";

function About() {
  return (
    <div className="h-screen w-full flex items-center justify-center leading-9 font-medium">
      <div className="sm:leading-9 leading-5 bg-transparent ">
        <h1 className="font-bold  mb-4 sm:mb-8 tracking-[0.6em] overflow-hidden text-foreground/80">
          <AnimatedWord word="About Ather" lineHeight="2.2rem" />
        </h1>
        <p className="overflow-hidden">
          <AnimatedWord
            word={"Ather is an AI collaborator that thinks like"}
            lineHeight="2.2rem"
          />
        </p>
        <p className="overflow-hidden">
          <AnimatedWord
            word={"a senior product designer - understanding"}
            lineHeight="2.2rem"
          />
        </p>
        <p className="overflow-hidden">
          <AnimatedWord
            word={"context, critiquing ideas, and "}
            lineHeight="2.2rem"
          />
        </p>
        <p className="overflow-hidden">
          <AnimatedWord
            word={"guiding you to exceptional design."}
            lineHeight="2.2rem"
          />
        </p>
      </div>
    </div>
  );
}

export default About;
