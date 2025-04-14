import Footer from "@/components/landing-page/footer";
import LogoSection from "@/components/landing-page/logo-section";
import MuslimInfoBottom from "@/components/landing-page/muslim-info-bottom";
import Navbar from "@/components/landing-page/navbar";
import NewsSection from "@/components/landing-page/news-section";
import PopularNews from "@/components/landing-page/popular-news";

export default function Home() {
  return (
    <div className="w-full overflow-x-auto">
      <Navbar />
      <LogoSection />
      <NewsSection />
      <PopularNews />
      <Footer />
    </div>
  );
}
