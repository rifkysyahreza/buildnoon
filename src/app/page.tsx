// import HeaderNavigation from "@/components/HeaderNavigation/Index";
import Hero from "@/components/Hero/Index";
import About from "@/components/About/Index";

export default function Home() {
  return (
    <div className="">
      {/* <HeaderNavigation></HeaderNavigation> */}
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
        <Hero></Hero>
        <About></About>
      </div>
    </div>
  );
}
