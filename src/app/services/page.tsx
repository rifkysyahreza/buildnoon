import HeaderNavigation from "@/components/HeaderNavigation/Index";
import SideCTA from "@/components/SideCTA/Index";
import Hero from "@/components/Services/Hero/Index";
import ServicesList from "@/components/Services/ServicesList/Index";
import Testimonials from "@/components/Home/Testimonials/Index";

export default function Services() {
  return (
    <div>
      <HeaderNavigation></HeaderNavigation>
      <SideCTA></SideCTA>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
        <Hero></Hero>
        <ServicesList></ServicesList>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
