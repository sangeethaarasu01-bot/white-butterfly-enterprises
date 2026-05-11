"use client";

import useEmblaCarousel from "embla-carousel-react";

type Props = {
  children: React.ReactNode;
};

export default function Carousel({ children }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">{children}</div>
    </div>
  );
}
