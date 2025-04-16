import Image from "next/image";

const newsData = [
  {
    category: "JAGA NEGERI",
    title: "Peran Strategis Media dalam Memperkuat Moderasi Beragama Menurut Prof. Dr. Ali Mochtar Ngabalin",
    author: "DODODDYDOD",
    date: "12 DESEMBER 2024",
    description: "Di era digital yang penuh dengan arus informasi, media memiliki kekuatan luar biasa dalam membentuk opini publik dan menyebarluaskan informasi...",
    image: "/assets/images/info1.png",
  },
  {
    category: "JAGA NEGERI",
    title: "Arif Wachjunadi Apresiasi Showroom GWM Fatmawati, Layanan dan Inovasi Terbaik",
    date: "11 DESEMBER 2024",
    image: "/assets/images/info2.png",
  },
  {
    category: "JAGA NEGERI",
    title: "Showroom Baru GWM Fatmawati Siap Perluas Jangkauan Konsumen",
    date: "11 DESEMBER 2024",
    image: "/assets/images/info3.png",
  },
];

export default function MuslimInfoSection() {
  return (
    <section className="py-6">
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
        <p className="self-center font-bold text-[16px] w-full lg:w-[20%] mb-0 lg:mb-4">Info Muslim</p>
        {/* Garis dengan dua warna */}
        <div className="mt-2 h-1 w-full" style={{ background: "linear-gradient(to right,  #316d1e 100%, #e5e7eb 10%)" }}></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[450px] shrink-0">
          <div className="relative">
            <img src={newsData[0].image} alt={newsData[0].title} className="w-full h-[224px] lg:h-[524px] object-cover rounded" />
            <span className="absolute bottom-4 left-2 bg-green-700 text-black text-xs px-2 py-0.5 rounded">{newsData[0].category}</span>
          </div>
          <div className="mt-3 space-y-2">
            <h3 className="text-md font-bold">{newsData[0].title}</h3>
            <p className="text-xs text-gray-500 flex flex-row gap-2">
              BY <span className="font-bold">{newsData[0].author}</span>{" "}
              <span className="text-blue-400 self-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" />
                </svg>
              </span>
              {newsData[0].date}
            </p>
            <p className="text-sm text-gray-700">{newsData[0].description}</p>
            <button className="text-xs py-3 px-6 hover:underline border shadow-md">READ MORE</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-4 flex-1 w-full">
          {newsData.slice(1).map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 w-full">
              <div className="relative w-full">
                <Image width={1920} height={1080} src={item.image} alt={item.title} className="w-full h-[150px] lg:h-[258px] object-cover rounded" />
                <span className="absolute bottom-4 left-2 bg-green-700 text-black text-xs px-2 py-0.5 rounded">{item.category}</span>
              </div>
              <div className="flex flex-col justify-between w-full">
                <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
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
    </section>
  );
}
