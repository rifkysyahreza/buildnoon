import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AboutBG from "@/assets/images/abous-us-about.png";

const Index: FC = () => {
  return (
    <section
      id="about"
      className="section-start flex items-center snap-start h-screen w-full bg-black relative"
    >
      <Image
        src={AboutBG}
        alt="About Mobile"
        className={cn("object-cover md:object-contain w-screen h-screen ")}
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
          Your Vision, Our Blueprint
        </h1>
        <p
          className={cn(
            "max-w-3xl text-base md:text-xl leading-relaxed text-justify backdrop-blur-md font-medium p-6 bg-opacity-50 bg-black rounded-lg"
          )}
        >
          Welcome to Buildnoon, Indonesia’s premier construction company
          dedicated to building the future with precision, integrity, and
          excellence. Established in 2099, we have proudly served clients across
          Indonesia, transforming visions into reality through our comprehensive
          range of construction services. What Buildnoon can offer:
        </p>

        <div className="max-w-3xl text-sm md:text-lg leading-relaxed text-justify backdrop-blur-md font-medium p-6 bg-opacity-50 bg-black rounded-lg">
          <ol className="list-decimal">
            <li>
              Experienced staff and Key People to fully understand the Clients
              requirements.
            </li>
            <li>
              Full Engineering Support by Global Design Centers at various
              locations.
            </li>
            <li>Contract Terms and conditions that are flexible.</li>
            <li>
              The option of Partnerships, JVs and Long-term Commitment with
              Clients.
            </li>
          </ol>
        </div>
      </section>
    </section>
  );
};

export default Index;
