"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "Kode Etik Jurnalistik", href: "#" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Tentang Kami", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Pedoman Media Siber", href: "#" },
  ];

  const socialIcons = [
    { src: "/assets/icon/fb.png", alt: "facebook" },
    { src: "/assets/icon/twitter.png", alt: "twitter" },
    { src: "/assets/icon/ig.png", alt: "instagram" },
    { src: "/assets/icon/yt.png", alt: "youtube" },
    { src: "/assets/icon/vk.png", alt: "vk" },
  ];

  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-[#316d1e] w-full lg:w-[75%] mx-auto py-2 lg:py-0 px-8 text-white text-xs">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Kiri: Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-[11px]">
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="hover:underline whitespace-nowrap">
              {item.name}
            </Link>
          ))}
          {/* Tengah: Tanggal */}
          <div className="hidden sm:block text-[11px] text-center">{today}</div>
        </div>

        {/* Kanan: Icon + Search */}
        <div className="flex items-center gap-3">
          {/* Sosial Media Icons */}
          <div className="flex gap-2">
            {socialIcons.map((icon, idx) => (
              <Image key={idx} src={icon.src} alt={icon.alt} width={12} height={12} className="w-[12px] h-[12px] object-contain" />
            ))}
          </div>

          {/* Separator */}
          <div className="border-l border-black h-[40px] mx-2" />

          {/* Search input dengan icon di dalam */}
          <div className="relative hidden sm:block">
            <input type="text" placeholder="Search..." className="bg-green-800 text-white text-[11px] pl-7 pr-2 py-1 rounded-sm outline-none placeholder:text-white" />
            <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1 0 5.34 5.34a7.5 7.5 0 0 0 11.31 11.31Z" />
            </svg>
          </div>

          {/* Icon search (untuk mobile) */}
          <div className="sm:hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1 0 5.34 5.34a7.5 7.5 0 0 0 11.31 11.31Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
