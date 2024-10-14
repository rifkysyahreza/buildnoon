import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/useSelector";
import { setIsSideMenuOpen } from "@/lib/features/ui/uiNavigationSlice";
import { IoMdClose } from "react-icons/io";

const Index = () => {
  const dispatch = useAppDispatch();

  const handleCloseSideMenu = () => {
    return () => {
      dispatch(setIsSideMenuOpen(false));
    };
  };

  return (
    <div
      className={cn(
        "w-screen h-screen bg-slate-600 backdrop-blur-sm bg-opacity-30 fixed top-0 right-0 z-50 flex flex-col items-center justify-center gap-2"
      )}
    >
      {/* Side Navigation */}
      <div className="flex flex-col items-center justify-center gap-8 text-xl text-white font-bold bg-black p-8 bg-opacity-50 rounded-lg">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/teams">Teams</Link>
      </div>

      {/* Close Button */}
      <Button
        onClick={handleCloseSideMenu()}
        variant="destructive"
        className=""
      >
        <IoMdClose />
      </Button>
    </div>
  );
};

export default Index;
