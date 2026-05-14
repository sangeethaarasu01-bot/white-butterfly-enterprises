"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function CategoriesSection() {
  const categories = [
    {
      name: "Millets",
      image: "/images/millets_rice/Sorgum.jpg",
      link: "/millets",
    },
    {
      name: "Rice",
      image: "/images/rice/basmati-rice-6dbc2.webp",
      link: "/rice",
    },
    {
      name: "Pulses",
      image: "/images/pulses/pulses65.jpg",
      link: "/pulses",
    },
    {
      name: "Dry Food",
      image: "/images/dry_food/image_cashew.webp",
      link: "/dry_food",
    },
    {
      name: "Spices",
      image: "/images/spices/Pepper.png",
      link: "/spicies",
    },
    {
      name: "Masala Powders",
      image: "/images/masala/Cumin-Powder-e1619255274195.jpg",
      link: "/masala",
    },
    {
      name: "Herbal",
      image: "/images/herbal/download.jpeg",
      link: "/herbal",
    },
    {
      name: "Coconut Coir",
      image: "/images/coconut/download (1).jpeg",
      link: "/coconut",
    },
  ];

  // duplicate for smooth infinite scroll
  const duplicatedCategories = [...categories, ...categories];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!isPaused) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
          Categories
        </h2>

        {/* Mobile Grid */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl overflow-hidden">
              <Link href={cat.link}>
                <div className="relative w-full h-[180px]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover rounded-xl"
                  />
                </div>
              </Link>

              <div className="p-3 text-center">
                <Link href={cat.link}>
                  <p className="text-sm font-semibold text-gray-800">
                    {cat.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* md & lg Auto Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="hidden md:flex gap-6 overflow-x-scroll scrollbar-hide"
        >
          {duplicatedCategories.map((cat, index) => (
            <div
              key={index}
              className="min-w-[250px] lg:min-w-[280px] bg-white rounded-xl flex-shrink-0"
            >
              <Link href={cat.link}>
                <div className="relative w-full h-[220px]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover rounded-xl"
                  />
                </div>
              </Link>

              <div className="p-4 text-center">
                <Link href={cat.link}>
                  <p className="text-base font-semibold text-gray-800">
                    {cat.name}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
