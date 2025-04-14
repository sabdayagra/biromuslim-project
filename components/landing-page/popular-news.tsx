"use client";

import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import MuslimInfoSection from "./muslim-info";
import ColoumnPPS from "./coloumn-pps";
import MuslimInfoBottom from "./muslim-info-bottom";

const articles = [
  {
    title: "PP Muhammadiyah Tetapkan 1 Ramadhan 1446 H Jatuh pada 1 Maret 2025",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr1.jpeg",
    thumb: "/assets/images/gbr1.jpeg",
    date: "24 MARET 2025",
    description: "Cilegon – Kakorlantas Polri Irjen Pol Drs. Agus Suryonugroho S.H., M.Hum bersama Menteri Perhubungan (Menhub) Dudy Purwandy meninjau kondisi Pelabuhan Merak...",
  },
  {
    title: "Hasil Sidang Kode Etik AKBP FWLS Dipecat Dari Polri Dan Jadi Tersangka",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr2.jpeg",
    thumb: "/assets/images/gbr2.jpeg",
    date: "24 MARET 2025",
    description: "Jakarta – Penegakan hukum terhadap AKBP FWLS terus berlanjut. Mantan Kapolres Ngada yang terlibat dalam kasus pelanggaran serius tersebut baru-baru ini resmi...",
  },
  {
    title: "Bongkar Sindikat Pengoplosan Gas LPG Subsidi di Gianyar dengan Omset Rp650 Juta per Bulan",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr3.png",
    thumb: "/assets/images/gbr3.png",
    date: "24 MARET 2025",
    description: "Bali – Sindikat pengoplosan gas LPG subsidi yang beroperasi di Gianyar, Bali, kini telah berhasil diungkap oleh Direktorat Tindak Pidana...",
  },
  {
    title: "Terungkap Modus Kecurangan MinyaKita: Takaran Tak Penuh, Label Palsu, Sampai Produksi Tanpa Izin",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr4.png",
    thumb: "/assets/images/gbr4.png",

    date: "24 MARET 2025",
    description: "Jakarta – Satgas Pangan Polri baru-baru ini mengungkap praktik penipuan yang dilakukan oleh oknum yang tidak bertanggung jawab terhadap minyak...",
  },
  {
    title: "Hari Ini Terakhir Pendaftaran Anggota Polri Tahun 2025",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr5.png",
    thumb: "/assets/images/gbr5.png",

    date: "24 MARET 2025",
    description: "Jakarta – Polri kembali membuka kesempatan bagi putra-putri terbaik bangsa untuk bergabung menjadi anggota Polri. Pendaftaran penerimaan anggota Polri tahun...",
  },
  {
    title: "Hari Ini Terakhir Pendaftaran Anggota Polri Tahun 2025",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr6.png",
    thumb: "/assets/images/gbr6.png",

    date: "24 MARET 2025",
    description: "Jakarta – Polri kembali membuka kesempatan bagi putra-putri terbaik bangsa untuk bergabung menjadi anggota Polri. Pendaftaran penerimaan anggota Polri tahun...",
  },
  {
    title: "Hari Ini Terakhir Pendaftaran Anggota Polri Tahun 2025",
    group: "JAGA NEGERI",
    img: "/assets/images/gbr6.png",
    thumb: "/assets/images/gbr6.png",

    date: "24 MARET 2025",
    description: "Jakarta – Polri kembali membuka kesempatan bagi putra-putri terbaik bangsa untuk bergabung menjadi anggota Polri. Pendaftaran penerimaan anggota Polri tahun...",
  },
];

export default function PopularNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };
  return (
    <>
      <Reveal>
        <div className="w-full px-4 lg:px-0 lg:w-[75%] mx-auto flex flex-col lg:flex-row my-5">
          {/* Left */}
          <div className="space-y-6 w-full lg:w-[70%] mt-2">
            <div className="flex flex-col lg:flex-row">
              <p className="w-fit font-bold">Berita Terpopuler</p>
              {/* Garis dengan dua warna */}
              <div className="mt-2 ml-2 h-1 w-full lg:w-[680px] self-center" style={{ background: "linear-gradient(to right, #316d1e 100%, #e5e7eb 10%)" }}></div>
            </div>
            <div className="relative w-full overflow-hidden">
              {/* Slides Container */}
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {articles.map((slide, idx) => (
                  <div key={idx} className="min-w-full relative">
                    <Image src={slide.img} alt={slide.title} width={1920} height={1080} className="object-cover w-full h-[300px] sm:h-[450px] lg:h-[600px]" />

                    {/* Overlay hanya bagian bawah */}
                    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/70 to-transparent"></div>

                    {/* Text Content */}
                    <div className="absolute bottom-20 left-4 sm:left-8 text-white z-10 space-y-2">
                      <p className="p-1 border border-black bg-[#316d1e] w-fit text-xs text-black">{slide.group}</p>
                      <h2 className="text-lg sm:text-2xl font-semibold">{slide.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute right-0 bottom-0  flex flex-col shadow-md border border-gray-300">
                <button onClick={nextSlide} className="bg-[#316d1e] hover:bg-green-800 text-white w-10 h-10 flex items-center justify-center">
                  <ChevronRight size={20} />
                </button>
                <button onClick={prevSlide} className="bg-white hover:bg-gray-100 text-black w-10 h-10 flex items-center justify-center border-t border-gray-300">
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
            {/* Thumbnail Selector */}
            <div className="flex items-center gap-2 mt-2 px-2 sm:px-4 overflow-x-auto">
              {articles.map((thumb, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`border-4 ${currentIndex === idx ? "border-[#316d1e]" : "border-transparent"} rounded-sm overflow-hidden`}>
                  <Image src={thumb.thumb} alt={thumb.title} width={100} height={60} className="object-cover w-[80px] h-[50px] sm:w-[100px] sm:h-[60px]" />
                </button>
              ))}
            </div>

            <ColoumnPPS />

            <MuslimInfoSection />

            <ColoumnPPS />

            <MuslimInfoBottom />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 w-full lg:w-[30%]">
            <div className="flex flex-col gap-4 mx-0 lg:mx-4">
              <div className="flex flex-col lg:flex-row ">
                <p className="w-fit font-bold text-[16px]">Berita Terpopuler</p>
                {/* Garis dengan dua warna */}
                <div className="mt-2 ml-2 h-1 w-full lg:w-[170px] self-center" style={{ background: "linear-gradient(to right, #316d1e 100%, #e5e7eb 10%)" }}></div>
              </div>
              <div className="border bg-[#fafafa] py-4 text-center">No Content Availabe</div>
            </div>

            <div className="border rounded-lg w-full max-w-full lg:max-w-xs mx-auto p-4 bg-white shadow-sm">
              {/* Header */}
              <div className="border-b pb-2 text-sm text-gray-700 font-medium">
                Postingan dari <span className="font-semibold">@Polri_News</span>
              </div>

              {/* Isi */}
              <div className="flex flex-col py-6 space-y-2">
                {/* Icon X */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                </svg>

                <h3 className="text-lg font-bold">Belum ada Tweet</h3>
                <p className="text-sm text-gray-500">Jika mereka memposting, Anda dapat melihatnya di sini.</p>

                <a href="https://twitter.com/Polri_News" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition w-fit">
                  Lihat di X
                </a>
              </div>
            </div>

            {/* PPS */}
            <div className="relative border rounded-lg w-full h-full lg:h-[300px] max-w-full lg:max-w-xs mx-auto bg-white p-6 shadow-sm text-center">
              {/* Tombol Close */}
              <button className="absolute top-2 right-2 text-xs text-blue-500 hover:text-blue-700">✕</button>

              {/* Teks Tengah */}
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold text-[#a96a6a] tracking-widest leading-snug">
                  KOLOM <br /> PPS
                </h2>
              </div>
            </div>
            <div className="relative border rounded-lg w-full h-full lg:h-[300px] max-w-full lg:max-w-xs mx-auto bg-white p-6 shadow-sm text-center">
              {/* Tombol Close */}
              <button className="absolute top-2 right-2 text-xs text-blue-500 hover:text-blue-700">✕</button>

              {/* Teks Tengah */}
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold text-[#a96a6a] tracking-widest leading-snug">
                  KOLOM <br /> PPS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
