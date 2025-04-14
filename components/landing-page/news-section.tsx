"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const newsList = [
  {
    title: "Apakah Meninggal di Bulan Ramadhan Jaminan Langsung Masuk Surga? Temukan Jawabannya",
    date: "17 MARET 2025",
    image: "/assets/images/news2.png",
  },
  {
    title: "Kapolri Gelar Kegiatan Bhakti Sosial dan Safari Ramadhan di Polda Jawa Barat",
    date: "17 MARET 2025",
    image: "/assets/images/news1.png",
  },
  {
    title: "Perkara yang Bisa Menggugurkan Ganjaran Pahala Kita di Bulan Ramadhan",
    date: "17 MARET 2025",
    image: "/assets/images/news2.png",
  },
  {
    title: "Apakah Meninggal di Bulan Ramadhan Jaminan Langsung Masuk Surga? Temukan Jawabannya",
    date: "17 MARET 2025",
    image: "/assets/images/news1.png",
  },
];
export default function NewsSection() {
  return (
    <>
      <Reveal>
        <div className="bg-[#e2e2e2] px-4 py-6 w-full lg:w-[75%] mx-auto">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {newsList.map((news, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#e6e6e6] rounded">
                {/* Gambar */}
                {news.image ? <Image src={news.image} alt={news.title} width={80} height={80} className="w-[80px] h-[80px] object-cover rounded" /> : <div className="w-[80px] h-[80px] bg-gray-400 rounded" />}

                {/* Konten */}
                <div className="flex flex-col justify-between text-sm">
                  <h3 className="text-[13px] text-black font-normal leading-tight">{news.title}</h3>
                  <div className="flex items-center text-gray-500 text-xs gap-1 mt-2">
                    <CalendarDays className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
