"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/KESO K350X V4 Urban Dusk Scooter (4).png",
    alt: "KESO K350X V4 Urban Dusk Scooter",
    title: "K350X V4 Urban Dusk",
    subtitle: "Glide Into the Future",
  },
  {
    src: "/KESOY BOLT-ON 5500 Camshaft Showcase (1).png",
    alt: "KESOY Bolt-On 5500 Camshaft",
    title: "Bolt-On 5500 Camshaft",
    subtitle: "Precision Engineered Performance",
  },
  {
    src: "/KESQ K350X V4_ Glide Into the Future.png",
    alt: "KESO K350X V4 Glide Into the Future",
    title: "K350X V4",
    subtitle: "Ride the Next Generation",
  },
];

export default function FeatureSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    // Note: If the top of the image is hidden by your navbar, change "-mt-16" to "mt-0"
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden -mt-16">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Top Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-28 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-2">
            Featured Collection
          </p>
          <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-6xl uppercase leading-tight drop-shadow-lg">
            {slides[index].title}
          </h2>
          <p className="text-white/90 text-base sm:text-lg mt-3 max-w-xl drop-shadow">
            {slides[index].subtitle}
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM RIGHT CTA - CLICKING THIS GOES TO /product */}
      {/* ======================================================== */}
      <div className="absolute bottom-0 right-0 z-20 pb-16 pr-6 sm:pr-10 lg:pr-16">
        <Link
          href="/product"
          className="group inline-flex items-center gap-3 bg-kesor-red text-white font-bold uppercase tracking-wide px-8 py-4 rounded-full shadow-2xl hover:bg-kesor-purple transition-colors duration-300"
        >
          View Product
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      {/* Bottom Left Slide Controls */}
      <div className="absolute bottom-0 left-0 z-20 pb-16 pl-6 sm:pl-10 lg:pl-16 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 ml-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
