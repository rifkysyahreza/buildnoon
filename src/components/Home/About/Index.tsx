import { cn } from "@/lib/utils";
import { FC } from "react";
import Image from "next/image";
import AboutMobile from "@/assets/images/about-mobile.png";

const Index: FC = () => {
  return (
    <section
      id="about"
      className={cn(
        "section-start snap-start h-screen w-full bg-black relative"
      )}
    >
      <Image
        src={AboutMobile}
        alt="About Mobile"
        className={cn("object-cover md:object-fill w-screen h-screen -z-10")}
      />

      <section
        className={cn(
          "absolute md:w-full flex flex-col items-center justify-center gap-8 top-0 text-white text-center pt-12 px-4"
        )}
      >
        <h1
          className={cn(
            "text-3xl md:text-6xl font-extrabold leading-tight tracking-wide"
          )}
        >
          We Are Committed To Build Better
        </h1>
        <p
          className={cn(
            "max-w-3xl text-base md:text-xl leading-relaxed text-justify backdrop-blur-md font-medium p-6 bg-opacity-50 bg-black rounded-lg"
          )}
        >
          Welcome to Buildnoon, where your vision meets our{" "}
          <span className="font-bold text-green-300">
            quality craftsmanship
          </span>{" "}
          and{" "}
          <span className="font-bold text-green-300">innovative solutions</span>
          . Specializing in{" "}
          <span className="font-bold text-green-300">residential</span>,{" "}
          <span className="font-bold text-green-300">commercial</span>, and{" "}
          <span className="font-bold text-green-300">
            industrial construction
          </span>
          , our expert team delivers{" "}
          <span className="font-bold text-green-300">customized</span> and{" "}
          <span className="font-bold text-green-300">sustainable</span> projects
          tailored to your unique needs. With a commitment to{" "}
          <span className="font-bold text-green-300">integrity</span> and{" "}
          <span className="font-bold text-green-300">precision</span>, we ensure
          every build stands the test of time and enhances its environment.
          Choose Buildnoon as your trusted partner and let&apos;s create a{" "}
          <span className="font-bold text-green-300">brighter tomorrow</span>{" "}
          together.
        </p>
      </section>
    </section>
  );
};

export default Index;
