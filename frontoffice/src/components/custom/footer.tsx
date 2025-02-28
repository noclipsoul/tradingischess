"use client"

import { title } from "process"
import { StrapiImage } from "./StrapiImage"
import React from "react"

interface Slinks {
  id: number
  text: string
  url: string
  icon: Image
  title: string  | ""
}
interface Image {
  id: number
  documentId: string
  url: string
  alternativeText: string | null
}
interface FNlink{
  id:string;
title:string 
links: Slinks[]
}
interface FooterProps {
  data: {
    logo: {
      id: number
      url: string
      text: string
      icon:Image;
    }
    socialLink: Slinks[]
    Foot_nav_link: FNlink[]
    copyright_description:string;
    copyright:string;
    descriptionlogo:string;
  }
}

export function Footer({ data }: Readonly<FooterProps>) {
  const { socialLink, logo,descriptionlogo,copyright,copyright_description,Foot_nav_link } = data
  return (
    <footer className="relative px-10 overflow-hidden font-sans bg-black text-white py-5">
      <div className="  px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
              <a href="/">
              <StrapiImage
                  alt={ "no alternative text"}
                  className="w-[103.68] h-[32]"
                  height={60}
                  src={logo.icon.url}
                  width={162}
                />
            </a>
          <div className="">
          <p className="p-5">
            {descriptionlogo.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          </div>  
          </div>
        <div className="">
          {Foot_nav_link.map((FNlink) => (
             <div key={FNlink.id} className="text-white text-xl">
              {FNlink.title}
             
               <div className="text-sm p-1 text-center">
            
                  {FNlink.links.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      rel="noopener noreferrer"
                      className="text-center   "
                    >
                      <span className="text-white">{link.text}</span>
                    </a>
                  ))}  
               </div>
             </div>
          ))}
          </div>
          <div className=" ">
             
                <div className="mb-3">
                {socialLink.map((link) => (
                <a
                  key={link.id}
                  href={link.url.startsWith('https') ? link.url : `https://${link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3  rounded-lg "
                >
                  <span className="sr-only">{link.text}</span>
                  <StrapiImage
                    src={link.icon.url}
                    alt={link.url}
                    width={40}
                    height={40}
                  />
                </a>
              ))}
              </div>
          
          </div>
        
     
       
         </div>
 

       












        <div className=" flex  flex-col md:justify-between  pt-5 border-t border-gray-800 text-center md:text-left text-sm text-gray-400">
        <p className=" justify-normal">{copyright_description}</p>
          <div className=" flex  flex-row justify-center md:justify-start p-5 ">

          <p>{copyright}</p>
        </div>
        </div>
      
      </div>
    </footer>
  )
}