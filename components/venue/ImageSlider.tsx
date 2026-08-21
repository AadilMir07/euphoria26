"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/venue-entrance.png",
  "/images/venue-hall.png",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Venue ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-violet-400"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}