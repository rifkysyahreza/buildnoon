"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";
import SideNavigation from "@/components/SideNavigation/Index";
import { setIsSideMenuOpen } from "@/lib/features/ui/uiNavigationSlice";

const Index: FC = () => {
  const dispatch = useAppDispatch();

  const isScrolled = useAppSelector((state) => state.uiNavigation.isScrolled);
  const isSideMenuOpen = useAppSelector(
    (state) => state.uiNavigation.isSideMenuOpen
  );

  const handleShowSideNavigation = () => {
    dispatch(setIsSideMenuOpen(true));
  };

  return (
    <div>
      {isSideMenuOpen && <SideNavigation></SideNavigation>}
      <button
        onClick={handleShowSideNavigation}
        className={cn(
          "fixed bg-white px-4 py-1 -right-5 rounded-t-xl top-[50vh] z-10 transition-all duration-300 -rotate-90",
          {
            "translate-x-full": !isScrolled || isSideMenuOpen,
          }
        )}
      >
        Menu
      </button>
    </div>
  );
};

export default Index;
