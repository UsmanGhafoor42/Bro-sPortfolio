import Image from "next/image";
import every from "@/app/assets/icons/every.png";
import Button from "../shared/button";
import Badge from "./badge";

const HeroComponent = () => {
  return (
    <section id="home" className="h-full w-full flex flex-col justify-center items-center layout  py-10">
      <Badge text="3 Spots Available" />
      <h1 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-medium flex flex-wrap justify-center items-center gap-2 py-3 text-center">
        <span>Every Great Story</span>
        <Image
          src={every}
          alt="every"
          width={80}
          height={80}
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20"
        />
      </h1>
      <h1 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-medium flex justify-center items-center gap-2 text-center">
        Deserves a Great Editor.
      </h1>
      <div className="flex justify-center items-center gap-2 py-8">
        <Button text="Editing Work" href="/contact" />
        <Button text="How it works" href="/contact" />
      </div>
    </section>
  );
};

export default HeroComponent;
