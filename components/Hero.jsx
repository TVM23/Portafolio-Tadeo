import { Button } from "@/components/ui/button";
import { FiDownload, FileDownload } from "react-icons/fi";

//elements from folder components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Hero = () => {
  return (
    <section className="h-full py-12">
        <div className="container h-full mx-auto">
            <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
                {/*  Texto  */}
                <div className="order-2 text-center xl:text-left xl:order-none">
                    <span className="text-2xl">Developer</span>
                    <h1 className="mb-6 h1">
                        Hello, I’m<br/><span className="text-accent">Tadeo Vázquez Manzo</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80 text-justify">
                    I am a student at TecNM Campus Jiquilpan pursuing a degree in Systems Engineering with a specialization in Web Development. However, I also work in other types of software projects.
                    </p>
                    <p className="max-w-[500px] mb-9 text-white/80 text-justify">
                    I am passionate about solving complex problems and developing efficient solutions. I am constantly seeking opportunities to enhance my skills and expand my knowledge in the field of software development
                    </p>
                    {/*  Botones y social  */}
                    <div className="flex flex-col items-center gap-8 xl:flex-row">
                        <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                        <span>Download CV</span>
                        <FiDownload className="text-xl"/>
                        </Button>
                        <div className="mb-8 xl:mb-0">
                        <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full 
                            flex justify-center items-center text-accent text-base hover:bg-accent 
                            hover:text-primary hover:transition-all duration-500" />
                        </div>
                    </div>
                </div>
                {/*  Foto  */}
                <div className="order-1 mb-8 xl:order-none xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero