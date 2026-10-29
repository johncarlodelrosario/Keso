import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden min-h-screen w-full flex items-center px-6 sm:px-12 lg:px-20 py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homeBanner.png')" }}
    >
      {/* Dark Overlay lang para mabasa ang text, walang grid */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content — Left Aligned */}
      <div className="relative z-10 flex flex-col items-start text-left max-w-2xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-kesor-red/30 bg-kesor-red/10 text-kesor-red font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
          Engineered for Performance
        </div>

        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(74,0,160,0.8)]">
          KESOR
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-8 mb-10">
          <span className="text-2xl md:text-4xl font-extrabold tracking-widest uppercase text-gray-200">
            Motorcycle
          </span>
          <span className="hidden md:block h-10 w-1.5 bg-kesor-red rounded-full"></span>
          <span className="text-2xl md:text-4xl font-extrabold tracking-widest uppercase text-kesor-red">
            EBikes
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-12 font-medium leading-relaxed">
          Precision-engineered performance parts made in Taiwan. Upgrade your
          ride with uncompromising quality and speed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/product"
            className="group flex items-center justify-center gap-2 bg-kesor-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.7)] w-full sm:w-auto"
          >
            SHOP PARTS
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/dealer"
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 w-full sm:w-auto"
          >
            FIND A DEALER
          </Link>
        </div>
      </div>
    </section>
  );
}
