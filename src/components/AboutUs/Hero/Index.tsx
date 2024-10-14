"use client";

import { useAppSelector } from "@/hooks/useSelector";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Image from "next/image";
import HeroAboutImage from "@/assets/images/about-us-hero-bg.jpg";
import VisionMissionImage from "@/assets/images/vision-mission-bg.jpeg";

const Index: FC = () => {
  const inView = useAppSelector((state) => state.uiNavigation.inView);

  return (
    <section
      id="hero"
      className={cn(
        "section-start relative h-screen w-full [clipPath: 'inset(0 0 0 0)'] -z-10 snap-start"
      )}
    >
      <div className={cn("fixed h-full w-full top-0 left-0")}>
        <Image
          src={
            inView === "hero" || inView === "about"
              ? HeroAboutImage
              : VisionMissionImage
          }
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
          Know Us More, Strengthening Foundations, Elevating Lives
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
