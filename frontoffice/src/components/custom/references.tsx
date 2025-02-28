"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StrapiImage } from "@/components/custom/StrapiImage";

interface imgs {
  documentId: string;
  url: string;
  alternativeText: string | null;
  onClick?: (() => void) | null;
}

interface Reference {
  id: number;
  name: string;
  logo: imgs;
}

interface ReferencesProps {
  id: number;
  __component: string;
  title: string;
  reference: Reference[];
}

export function Reference({ data }: { readonly data: ReferencesProps }) {
  const { title, reference } = data;

  return (
    <section className=" mx-auto text-center">
      <h4 className="text-4xl font-sans font-semibold mt-10 mb-10 text-green-600 md:text-5xl">
       {title}
      </h4>
      <div className="mb-10 ml-4">
      <Swiper
  className="container"
  spaceBetween={17}
  slidesPerView={1}
  autoplay={{ delay: 1500, disableOnInteraction: false }}
  modules={[Autoplay]}
  breakpoints={{
    640: { slidesPerView: 2 }, 
    768: { slidesPerView: 3 }, 
    1024: { slidesPerView: 4 }, 
    1280: { slidesPerView: 4 }, 
  }}
>
  {reference.map((refer) => (
    <SwiperSlide key={refer.id}>
      <div className="flex flex-col items-center p-4 bg-white">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <StrapiImage
            alt={refer.logo.alternativeText ?? "no alternative text"}
            className="h-20 mb-4 object-contain"
            height={1080}
            src={refer.logo.url}
            width={1920}
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {refer.name}
          </h3>
        </a>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}