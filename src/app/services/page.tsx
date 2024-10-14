import HeaderNavigation from "@/components/HeaderNavigation/Index";
import SideCTA from "@/components/SideCTA/Index";

export default function Services() {
  return (
    <div>
      <HeaderNavigation></HeaderNavigation>
      <SideCTA></SideCTA>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar"></div>
    </div>
  );
}
