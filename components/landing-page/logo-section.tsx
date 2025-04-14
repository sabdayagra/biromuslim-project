"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";

const navItems = [
  { name: "BERANDA", href: "/" },
  { name: "DAMAI NEGERI", href: "/damai-negeri" },
  { name: "DUNIA ISLAM", href: "/dunia-islam" },
  { name: "PARA AHLI", href: "/para-ahli" },
  { name: "SYARIAH MUSLIM", href: "/syariah-muslim" },
];

export default function LogoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Reveal>
        {" "}
        <nav className="bg-black text-white w-full lg:w-[75%] mx-auto">
          <div className="max-w-[1280px] mx-auto flex gap-8 items-center lg:justify-start justify-between px-4 py-2">
            {/* Logo */}
            <Link href="/">
              <Image src="/assets/images/Logo.png" alt="Logo" width={1920} height={1080} className="w-[150px] h-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6 items-center">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.href}>
                  <span className={`text-sm font-semibold px-2 py-1 ${item.name === "BERANDA" ? "bg-gray-600" : "text-gray-300"} hover:text-white`}>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Hamburger (mobile) */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none flex left-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-black px-4 pb-4">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.href}>
                  <div className={`py-2 text-sm font-semibold ${item.name === "BERANDA" ? "bg-gray-600" : "text-gray-300"} hover:text-white`}>{item.name}</div>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </Reveal>
    </>
  );
}
