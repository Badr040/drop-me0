"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGES = [
  {
    url: "/machint-1.jpG.png", // غيّر الاسم إلى صورتك الأولى
  },
  {
    url: "/image2.jpg", // غيّر الاسم إلى صورتك الثانية
  },
  {
    url: "/image3.jpg", // غيّر الاسم إلى صورتك الثالثة
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    );
  };

  // Auto-play slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // تغيير الصورة كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt="Recycling Banner"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-colors text-white shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-colors text-white shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-white/50 w-2.5 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
