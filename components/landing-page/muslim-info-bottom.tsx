"use client";

import React from "react";
import { Reveal } from "../ui/Reveal";

const newsData = [
  {
    image: "/assets/images/bottom1.png",
    category: "DUNIA ISLAM",
    title: "Tips Mudik Lebaran 2024 Untuk Perjalanan yang Aman dan Nyaman Lewat #Tipsmudikaman2024",
    author: "DODDODYDOD",
    date: "4 APRIL 2024",
    comments: 0,
    description: "BiroMuslim - Wah, sebentar lagi kita bakal sibuk dengan segala persiapan untuk mudik Lebaran tahun 2024, nih! Bisa jadi, ini...",
  },
  {
    image: "/assets/images/bottom2.png",
    category: "DUNIA ISLAM",
    title: "Yuk, Pahami Keutamaan Zakat Fitrah dan Cara Menghitungnya dengan Benar",
    author: "DIAN PURWANTO",
    date: "2 APRIL 2024",
    comments: 0,
    description: "Bulan Ramadan tidak hanya sekadar moment untuk meningkatkan ibadah, tapi juga saat yang tepat untuk membersihkan harta dan jiwa melalui...",
  },
];

const smallNewsLeft = [
  {
    image: "/assets/images/bl1.png",
    title: "Persiapan Kendaraan dan Rute Jalan Untuk #Mudik2024Lancar",
    date: "28 MARET 2024",
  },
  {
    image: "/assets/images/bl2.png",
    title: "Memahami Syarat, Niat, dan Tata Cara Menunaikan Zakat",
    date: "18 MARET 2024",
  },
];

const smallNewsRight = [
  {
    image: "/assets/images/br1.png",
    title: "Kapan Malam Lailatul Qadar di Ramadan 1445 H Dilaksanakan ?",
    date: "25 MARET 2024",
  },
  {
    image: "/assets/images/br2.png",
    title: "Mengetahui Manfaat Shalat Dhuha di Bulan Ramadhan",
    date: "15 MARET 2024",
  },
];

const MuslimInfoBottom = () => {
  return (
    <>
      <Reveal>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
            <p className="self-center font-bold text-[16px] w-full lg:w-[20%]">Info Muslim</p>
            {/* Garis dengan dua warna */}
            <div className="mt-2 h-1 w-full" style={{ background: "linear-gradient(to right,  #316d1e 100%, #e5e7eb 10%)" }}></div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* KONTEN ATAS */}
            {newsData.map((item, idx) => (
              <div key={idx}>
                <div className="relative">
                  <img src={item.image} alt={item.title} className="rounded w-full h-[100px] lg:h-[258px] object-cover" />
                  <span className="absolute bottom-2 left-2 bg-green-700 text-black text-xs px-2 py-0.5 rounded">{item.category}</span>
                </div>
                <h3 className="font-semibold text-base mt-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-1">
                  <span className="text-green-600 font-semibold">{`BY ${item.author}`}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" />
                      </svg>
                    </span>
                    {item.date}
                  </span>
                  <span className="flex flex-row justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024">
                      <path
                        fill="currentColor"
                        d="m174.72 855.68l130.048-43.392l23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352c0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8l-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416s-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
                      />
                    </svg>{" "}
                    0
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}

            {/* KONTEN KECIL */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {/* LEFT SMALL */}
              <div className="flex flex-col gap-4">
                {smallNewsLeft.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-[133px] h-[86px] object-cover rounded" />
                    <div>
                      <h4 className="text-[15px] font-semibold">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                        <span className="text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" />
                          </svg>
                        </span>
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SMALL */}
              <div className="flex flex-col gap-4">
                {smallNewsRight.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-[133px] h-[86px] object-cover rounded" />
                    <div>
                      <h4 className="text-[15px] font-semibold">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                        <span className="text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" />
                          </svg>
                        </span>
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default MuslimInfoBottom;
