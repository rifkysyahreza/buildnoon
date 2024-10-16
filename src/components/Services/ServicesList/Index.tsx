import { cn } from "@/lib/utils";
import { FC } from "react";
import ServicesListCarousel from "./components/ServicesListCarousel";

const Index: FC = () => {
  return (
    <section
      id="services"
      className={cn(
        "section-start relative h-screen w-full snap-start p-[5%] bg-black"
      )}
    >
      {/* Mobile View */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className={cn("text-white")}>
          <div
            className={cn(
              "font-bold text-5xl md:text-6xl md:text-center md:pb-9"
            )}
          >
            Our Services
          </div>
        </div>

        <div>
          <ServicesListCarousel />
        </div>
      </div>
    </section>
  );
};

export default Index;
