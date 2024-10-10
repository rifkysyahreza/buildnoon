import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TestimonialsBG from "@/assets/images/testimonials-bg.jpeg";

const Index: FC = () => {
  return (
    <section
      id="testimonials"
      className={cn(
        "relative h-screen w-full [clipPath: 'inset(0 0 0 0)'] snap-start"
      )}
    >
      <div className={cn("relative h-full w-full")}>
        <Image
          src={TestimonialsBG}
          alt="Hero Image"
          className="object-cover w-screen h-screen"
        />
      </div>

      <div
        className={cn(
          "text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        )}
      >
        <div className={cn("font-bold text-7xl md:text-center md:pb-9")}>
          Expertise that Inspires Confidence. Buildings that Instill Pride.
        </div>
        <div
          className={cn("font-semibold text-xl hidden md:block md:text-center")}
        >
          Better building starts with Buildnoon.
        </div>
      </div>
    </section>
  );
};

export default Index;
