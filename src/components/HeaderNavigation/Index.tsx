"use client";

import { useEffect, useRef, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "@/assets/images/company-logo.png";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";
import {
  setIsScrolled,
  setIsMobileMenuOpen,
  setInView,
} from "@/lib/features/ui/uiNavigationSlice";

const HeaderNavigation: FC = () => {
  const dispatch = useAppDispatch();

  const isScrolled = useAppSelector((state) => state.uiNavigation.isScrolled);
  const isMobileMenuOpen = useAppSelector(
    (state) => state.uiNavigation.isMobileMenuOpen
  );
  const inView = useAppSelector((state) => state.uiNavigation.inView);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Get all sections with the class "snap-start"
    const sections = document.querySelectorAll("section.snap-start");

    // Options for the Intersection
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    // Intersection Observer to detect which section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setInView(entry.target.id));
          // console.log(`in view: ${inView}`);
          // console.log(`is scrolled: ${isScrolled}`);
          // console.log(`is mobile menu open: ${isMobileMenuOpen}`);
        }
      });
    }, options);

    // Set scroll state based on which section is in view
    if (inView === "hero") {
      dispatch(setIsScrolled(false));
    } else {
      dispatch(setIsScrolled(true));
    }

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [dispatch, inView, isScrolled, isMobileMenuOpen]);

  useEffect(() => {
    dispatch(setIsMobileMenuOpen(false));
  }, [dispatch, isScrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        dispatch(setIsMobileMenuOpen(false));
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    dispatch(setIsMobileMenuOpen(!isMobileMenuOpen));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        {
          "-translate-y-full": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <nav className="container mx-auto p-4 flex h-s justify-between items-center relative backdrop-blur-md  md:rounded-b-3xl">
        <Image src={CompanyLogo} alt="Buildnoon Logo" width={50} height={50} />
        <div className="font-bold md:hidden">Buildnoon</div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <ul
          ref={navRef}
          className={cn(
            "fixed top-0 right-0 h-screen md:h-full bg-white shadow-md md:shadow-none md:bg-transparent transition-transform transform z-20",
            {
              "translate-x-0 pt-4 absolute": isMobileMenuOpen,
              "translate-x-full opacity-0": !isMobileMenuOpen,
              "md:relative md:flex md:space-x-4 md:translate-x-0 md:ml-auto md:opacity-100":
                true,
            }
          )}
        >
          <li className="p-4 md:p-0">
            <Link
              className="hover:text-blue-500 hover:border-b-2 hover:border-red-500"
              href="#home"
            >
              Home
            </Link>
          </li>
          <li className="p-4 md:p-0">
            <Link
              className="hover:text-blue-500 hover:border-b-2 hover:border-red-500"
              href="#about"
            >
              About
            </Link>
          </li>
          <li className="p-4 md:p-0">
            <Link
              className="hover:text-blue-500 hover:border-b-2 hover:border-red-500"
              href="#services"
            >
              Services
            </Link>
          </li>
          <li className="p-4 md:p-0">
            <Link
              className="hover:text-blue-500 hover:border-b-2 hover:border-red-500"
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
