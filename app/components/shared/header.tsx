"use client";
import Link from "next/link";
import { navLink } from "@/app/constant/nav";
import Image from "next/image";
import logo from "@/app/assets/images/logo.webp";
import Button from "./button";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-25 w-full flex justify-center items-center py-20 sticky top-0 z-50 ">
      <div className="relative h-15 w-full bg-background/30 backdrop-blur-sm border-1 border-orange flex justify-between items-center layout rounded-full ">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        {/* Desktop Navigation - visible on md and larger screens */}
        <nav className="hidden md:flex gap-10">
          {navLink.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.href}
                className="text-foreground text-base font-medium hover:text-orange transition-all duration-200"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Mobile Toggle Button - visible only on small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground text-base font-medium hover:text-orange transition-all duration-200"
        >
          {isOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
        {/* Mobile Navigation - visible on small screens when toggled */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-15 left-0 right-0 rounded-b-lg p-4 flex flex-col gap-4 z-50 w-full bg-gradient-to-b from-background to-[#191919] `}
        >
          {navLink.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.href}
                className="text-foreground text-base font-medium hover:text-orange transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Contact Button - visible on md and larger screens only */}
        <div className="hidden md:block">
          <Button text="Contact Us" />
        </div>
      </div>
    </header>
  );
};

export default Header;
