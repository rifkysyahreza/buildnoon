import HeaderNavigation from "@/components/HeaderNavigation/Index";
import SideCTA from "@/components/SideCTA/Index";
import Hero from "@/components/AboutUs/Hero/Index";
import About from "@/components/AboutUs/About/Index";

export default function AboutUs() {
  return (
    <div>
      <HeaderNavigation></HeaderNavigation>
      <SideCTA></SideCTA>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
        <Hero></Hero>
        <About></About>
      </div>
    </div>
  );
}
