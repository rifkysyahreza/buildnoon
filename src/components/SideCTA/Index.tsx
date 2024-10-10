"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/hooks/useSelector";

const Index: FC = () => {
  const isScrolled = useAppSelector((state) => state.uiNavigation.isScrolled);

  return (
    <div
      className={cn(
        "fixed bg-white px-4 py-2 right-0 top-[40vh] z-10 transition-all duration-300",
        {
          "translate-x-full": !isScrolled,
        }
      )}
    >
      this is side cta
    </div>
  );
};

export default Index;
