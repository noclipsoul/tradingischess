import Link from "next/link";
import Image from "next/image";
import {StrapiImage} from "@/components/custom/StrapiImage";
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

interface HeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  link: Link;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, link } = data;

  return (
    <header className=" relative h-screen overflow-hidden" id="">
      <div >
      <StrapiImage
        alt={image.alternativeText ?? "no alternative text"}
        className="absolute inset-0 object-cover w-fit h-fit"
        height={1080}
        src={image.url}
        width={1920}
      />
      </div>
     
      <div className="flex items-center justify-center text-center min-h-screen w-full h-full">

        <div className="backdrop-blur-md rounded-xl bg-opacity-50 shadow-lg p-[12%]">
        <h1 className="text-4xl font-semibold text-white ">  {heading}</h1>
        <p className="text-md text-white mt-2">    {subHeading}</p>

        <div className="items-center text-center p-7 ">
          <button className="px-6 py-3 bg-white mr-5 rounded  hover:text-white hover:bg-black  ">Start trading </button>
          <button className="px-6 py-3 bg-transparent text-white rounded hover:text-black hover:bg-white ">Learn more </button>
         

        </div>

    </div>
      </div>


       
        
      
  
    </header>
  );
}