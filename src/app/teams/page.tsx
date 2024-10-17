import HeaderNavigation from "@/components/HeaderNavigation/Index";
import SideCTA from "@/components/SideCTA/Index";
import Hero from "@/components/Teams/Hero/Index";
import TeamsList from "@/components/Teams/TeamsList/Index";

export default function Teams() {
  return (
    <div>
      <HeaderNavigation></HeaderNavigation>
      <SideCTA></SideCTA>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
        <Hero></Hero>
        <TeamsList></TeamsList>
      </div>
    </div>
  );
}
