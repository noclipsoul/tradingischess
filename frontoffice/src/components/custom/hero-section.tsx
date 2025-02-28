'use client';

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { StrapiImage } from "@/components/custom/StrapiImage";

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface Hero { 
  id:number;
  heading: string;
  subHeading: string;
  image: {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  };
  btn: Link;
}
interface HeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  name:string;
  heros: Hero [];
 
}


export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const {   heros } = data;
  return (
    <header className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        className="w-full h-full"
      >
        {heros.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <StrapiImage
                src={slide.image.url}
                alt={slide.image.alternativeText?? "no alternative text"} width={500} height={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">{slide.heading}</h1>
                <p className="text-lg md:text-2xl text-white mb-6">{slide.subHeading}</p>
                <Link href={slide.btn.url} className="px-5 py-3 text-white bg-green-600 rounded">
                 {slide.btn.text}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
