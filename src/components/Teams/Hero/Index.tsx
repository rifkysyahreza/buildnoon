import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/utils";
import HeroImage from "@/assets/images/teams-hero-bg.jpeg";

const Index: FC = () => {
  return (
    <section
      id="hero"
      className={cn(
        "section-start relative h-screen w-full [clipPath: 'inset(0 0 0 0)'] -z-10 snap-start"
      )}
    >
      <div className={cn("fixed h-full w-full top-0 left-0")}>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="object-cover w-screen h-screen"
        />
      </div>

      <div
        className={cn(
          "text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        )}
      >
        <div
          className={cn(
            "font-bold text-4xl md:text-7xl md:text-center md:pb-9"
          )}
        >
          Engineered by Experts, Powered by Teamwork
        </div>
        <div
          className={cn("font-semibold text-xl hidden md:block md:text-center")}
        >
          Who&apos;s behind Buildnoon?
        </div>
      </div>
    </section>
  );
};

export default Index;
