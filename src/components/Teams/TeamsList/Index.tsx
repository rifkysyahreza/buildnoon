import React from "react";
import TeamsCard from "./components/TeamsCard";

const Index = () => {
  return (
    <section
      id="teams"
      className="section-start w-full h-screen snap-start bg-black"
    >
      <div className="text-white text-center text-4xl font-bold p-10">
        Teams
      </div>
      <TeamsCard />
    </section>
  );
};

export default Index;
