"use client";

import { useEffect, useState, useRef, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "@/assets/images/company-logo.png";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

const HeaderNavigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
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
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        {
          "bg-white shadow-md": isScrolled,
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
              "translate-x-0 pt-4": isMobileMenuOpen,
              "translate-x-full bg-black": !isMobileMenuOpen,
              "md:relative md:flex md:space-x-4 md:translate-x-0 md:ml-auto":
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
