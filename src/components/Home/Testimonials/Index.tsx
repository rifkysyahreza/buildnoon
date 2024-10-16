import { FC } from "react";
import { cn } from "@/lib/utils";
import TestimonialCarousel from "./components/TestimonialCarousel";
// import TestimonialsBG from "@/assets/images/testimonials-bg.jpeg";

const Index: FC = () => {
  return (
    <section
      id="testimonials"
      className={cn("section-start relative h-screen w-full snap-start p-[5%]")}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <div className={cn("text-white")}>
          <div
            className={cn(
              "font-bold text-5xl md:text-6xl md:text-center md:pb-9"
            )}
          >
            Testimonials
          </div>
        </div>

        <div>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default Index;
