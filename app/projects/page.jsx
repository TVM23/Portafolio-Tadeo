"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns";



const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Reserva Plus",
    description:
      "This was a team project consisting of a website and an Android mobile application dedicated to hotel reservations. " +
      "The website offers a chatbot service and two separate interfaces: one for clients and another for administrative roles. The mobile app includes all the features clients need to " +
      "book and manage their reservations.",
    stack: [
      { name: "Python" },
      { name: "Django" },
      { name: "PostgreSql" },
      { name: "Kotlin" },
    ],
    images: ["/assets/work/01/01A.png", "/assets/work/01/01B.png", "/assets/work/01/01C.png", "/assets/work/01/01D.png", "/assets/work/01/01E.png",
      "/assets/work/01/01F.png", "/assets/work/01/01G.png", "/assets/work/01/01H.png", "/assets/work/01/01I.png", "/assets/work/01/01J.png",
    ],
    live: "",
    github: "https://github.com/TVM23/ReservaPlus",
    github2: "https://github.com/Martindjcg1/ReservaPlusApp",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "Tlapaleria Ceja",
    description:
      "An e-commerce-oriented website developed for a local hardware store. The platform includes a " +
      "wide range of tools and features designed for both customers and the site administrator.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "C#" },
      { name: "ASP.NET" },
      { name: "SQL Server" },
    ],
    images: ["/assets/work/02/02A.png", "/assets/work/02/02B.png", "/assets/work/02/02C.png", "/assets/work/02/02D.png", "/assets/work/02/02E.png"],
    live: "",
    github: "https://github.com/TVM23/TlapaleriaCeja",
  },
  {
    num: "03",
    category: "Interactive hand device simulator",
    title: "Interactive Glove",
    description:
      "A project featuring a glove device constructed using 3D-printed components and Arduino " +
      "hardware, alongside a simulator developed in the Unity environment. The device enables " +
      "interaction with objects within the simulation.",
    stack: [{ name: "C#" },
      { name: "Unity" },
      { name: "Arduino" }
    ],
    images: ["/assets/work/03/03A.jpeg", "/assets/work/03/03B.jpeg", "/assets/work/03/03C.jpeg", "/assets/work/03/03D.jpeg", "/assets/work/03/03E.jpeg"],
    live: "",
    github: "https://github.com/Alets30/Guante-Rehabilitaci-n",
  },
  {
    num: "04",
    category: "Custom language to C++ transpiler",
    title: "Transpiler ETH",
    description:
      "A tool specifically designed to translate code written in a custom programming language, developed with a unique syntax tailored by our team, into equivalent C++ code",    stack: [{ name: "Java" }],
      images: ["/assets/work/04/04A.jpeg", "/assets/work/04/04B.jpeg", "/assets/work/04/04C.jpeg", "/assets/work/04/04D.jpeg"],
      live: "",
    github: "https://github.com/Hugo071/CompiladorLSS_C",
  },
];


const Projects = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <section className="h-full py-4">
      <motion.section initial={{opacity:0}} animate={{opacity:1, transition: {delay:2.4, duration:0.4, ease:"easeIn"} }} 
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container h-full mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            { /* Left column */ }
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                { /* outline num */ }
                <div className="font-extrabold leading-none text-transparent text-8xl font-outline-2">
                  {project.num}
                </div>
                { /* project category */ }
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                { /* project category */ }
                <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.category} project
                </h2>
                { /* project description */ }
                <p className="text-white/60">{project.description}</p>
                { /* stack */ }
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                      return (
                        <li key={index} className="text-xl text-accent">
                          {item.name}
                          { /* quita la ultima coma */ }
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                </ul>
                { /* border */ }
                <div className="border border-white/20"></div>
                { /* buttons */ }
                <div className="flex items-center gap-4">
                  { /* Live project */ }
                  {project.num !== "03" && project.num !== "04" && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  { /* Gi hub link */ }
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-3xl text-white group-hover:text-accent"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {project.num === "01" && (
                      <Link href={project.github2} target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-3xl text-white group-hover:text-accent"/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github mibile app repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                </div>
              </div>
            </div>
            { /* Right column */ }
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange} >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="h-[460px]"
                        modules={[Navigation, Pagination]}
                      >
                        {project.images.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex} className="w-full">
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              { /* Overlay */ }
                              <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                              { /* Image */ }
                              <div className="relative w-full h-full">
                                <Image src={image} fill className="object-contain w-full h-full" alt={`Project ${project.num} - Image ${imgIndex}`} />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </SwiperSlide>
                  )
                })}
                { /* Slider buttons */ }
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
                  justify-between xl:w-max xl:justify-none" 
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                  w-[44px] h-[44px] flex justify-center items-center transition-all"/>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}

export default Projects