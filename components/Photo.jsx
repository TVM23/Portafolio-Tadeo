"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full">
        <div className="relative flex items-center justify-center">
    {/* Contenedor para el círculo y la imagen */}
    
    <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }}}
        className="absolute flex justify-center items-center w-[290px] h-[290px] xl:w-[490px] xl:h-[490px]"
    >
        <Image 
            src="/assets/image.png" 
            priority 
            quality={100} 
            fill 
            alt="" 
            className="object-contain rounded-full"
        />
    </motion.div>

    {/* Círculo */}
    <motion.svg 
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
        fill="transparent" 
        viewBox="0 0 506 506" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke="var(--accent-color)" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeLinejoin="round" 
        />
    </motion.svg>
</div>

    </div>
  )
}

export default Photo