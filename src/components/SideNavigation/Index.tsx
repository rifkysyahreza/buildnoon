import { cn } from "@/lib/utils";
import React from "react";

const Index = () => {
  return (
    <div
      className={cn(
        "w-screen h-screen bg-slate-600 backdrop-blur-sm bg-opacity-30 fixed top-0 right-0 z-50 flex flex-col items-center justify-center"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-8 text-xl text-white font-bold bg-black p-8 bg-opacity-50 rounded-lg">
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>Services</h1>
        <h1>Teams</h1>
      </div>
    </div>
  );
};

export default Index;
