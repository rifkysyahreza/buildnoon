import HeaderNavigation from "@/components/HeaderNavigation/Index";
import Hero from "@/components/Home/Hero/Index";
import About from "@/components/Home/About/Index";
import Testimonials from "@/components/Home/Testimonials/Index";
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
