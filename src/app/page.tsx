import HeaderNavigation from "@/components/HeaderNavigation/Index";
import Hero from "@/components/Hero/Index";
import About from "@/components/About/Index";
import Testimonials from "@/components/Testimonials/Index";
import SideCTA from "@/components/SideCTA/Index";

export default function Home() {
  return (
    <div className="">
      <HeaderNavigation></HeaderNavigation>
      <SideCTA></SideCTA>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
        <Hero></Hero>
        <About></About>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
