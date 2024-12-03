"use client"

import { FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiDotnet, SiKotlin, SiCsharp, SiMysql, SiMicrosoftsqlserver, 
    SiMongodb, SiGit, SiGithub, SiArduino, SiDjango, SiBootstrap, SiDocker, SiPostgresql } from  "react-icons/si" 
import { User2, MailIcon, HomeIcon, PhoneCall, SchoolIcon, GraduationCap, Briefcase, MonitorCog, ClipboardPenIcon } from "lucide-react"


const about = {
    title: "About me",
    description: " I am always looking for new learning opportunities and " + 
    "practical experiences that can help me grow both academically and professionally.",
    info: [
        {
            fieldName: <User2 size={20}/>,
            fieldValue: "Tadeo Vázquez Manzo"
        },
        {
            fieldName: <PhoneCall size={20}/>,
            fieldValue: "(+52) 353 108 5444"
        },
        {
            fieldName: <MailIcon size={20}/>,
            fieldValue: "tadeovazquez519@gmail.com"
        },
        {
            fieldName: <Briefcase size={20}/>,
            fieldValue: "Available"
        },
        {
            fieldName: <SchoolIcon size={20}/>,
            fieldValue: "Student at TecNM Jiquilpan"
        },
        {
            fieldName: <HomeIcon size={20}/>,
            fieldValue: "Jiquilpan de Juárez, México"
        },
    ]
}

const experience = {
    title: "My experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "+ 
    "ut aliquip ex ea commodo consequat.",
    items: [
        {
            company: "School Project",
            position: "ReservaPlus site and android app",
            duration: "August 2024 - December 2024"
        },
        {
            company: "CIIDIR IPN Ud. Michoacán",
            position: "Computer equipment maintenance",
            duration: "January 2024 - July 2024"
        },
        {
            company: "Tlapaleria Ceja",
            position: "E-commerce Web Site",
            duration: "January 2024 - July 2024"
        },
        {
            company: "School Project",
            position: "Custom language to C++ transpiler",
            duration: "July 2023 - December 2023"
        },
        
    ]
}

const education = {
    title: "My education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "+ 
    "ut aliquip ex ea commodo consequat.",
    items: [
        {
            institution: "TecNM Campus Jiquilpan",
            degree: "Computer Systems Engineering Degree",
            duration: "2020 - Present"
        },
        {
            institution: "Udemy",
            degree: "Docker Course",
            duration: "2024"
        },
        {
            institution: "Udemy",
            degree: "Spring Boot Course",
            duration: "2024"
        },
        {
            institution: "CBTa #236",
            degree: "Office automation technician",
            duration: "2017 - 2020"
        },
    ]
}

const skills = {
    title: "My skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
      "ut aliquip ex ea commodo consequat.",
    items: [
      {
        category: "Frontend",
        skills: [
          {
            icon: <FaHtml5 />,
            name: "Html 5",
          },
          {
            icon: <FaCss3 />,
            name: "Css 3",
          },
          {
            icon: <SiBootstrap />,
            name: "Bootstrap",
          },
        ],
      },
      {
        category: "BackEnd",
        skills: [
          {
            icon: <FaJava />,
            name: "Java",
          },
          {
            icon: <FaJs />,
            name: "JavaScript",
          },
          {
            icon: <FaPython />,
            name: "Python",
          },
          {
            icon: <SiCsharp />,
            name: "C#",
          },
          {
            icon: <SiKotlin />,
            name: "Kotlin",
          },
          {
            icon: <SiDotnet />,
            name: "ASP.NET",
          },
          {
            icon: <SiDjango />,
            name: "Django",
          },
        ],
      },
      {
        category: "Data",
        skills: [
          {
            icon: <SiMysql />,
            name: "MySql",
          },
          {
            icon: <SiMicrosoftsqlserver />,
            name: "Sql Server",
          },
          {
            icon: <SiPostgresql />,
            name: "Sql Server",
          },
          {
            icon: <SiMongodb />,
            name: "MongoDb",
          },
        ],
      },
      {
        category: "Other",
        skills: [
          {
            icon: <SiGit />,
            name: "Git",
          },
          {
            icon: <SiGithub />,
            name: "GitHub",
          },
          {
            icon: <SiDocker />,
            name: "Docker",
          },
        ],
      },
    ],
  
};
  

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

const Resume = () => {
  return (
    <section className="h-full py-12">
        <div className="container h-full mx-auto ">
            <h1 className="mb-10 h1">
                <li className="text-accent"><span className="text-white">Resume</span></li>
            </h1>
            <div className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0" >
                <div className="container mx-auto">
                    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About Me</TabsTrigger>
                        </TabsList>

                        { /*  Contenido de las tabs */}
                        <div className="min-h-[70hv] w-full">
                            { /* experience tab */}
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <div className="flex items-center gap-x-4 ">
                                        <Briefcase className="text-accent"/>
                                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    </div>
                                     {/* <p className="mx-auto text-white/60 xl:mx-0">{experience.description}</p> */}
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                <li key={index} className="bg-sec_gray h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[400px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        { /* Dot */ }
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            { /* education tab */}
                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <div className="flex items-center gap-x-4 ">
                                        <GraduationCap className="text-accent"/>
                                        <h3 className="text-4xl font-bold">{education.title}</h3>
                                    </div>
                                    {/* <p className="mx-auto text-white/60 xl:mx-0">{education.description}</p> */}
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => {
                                                return (
                                                <li key={index} className="bg-sec_gray h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[400px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        { /* Dot */ }
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            { /*  skills tab */}
                            <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <div className="flex items-center gap-x-4 ">
                                        <MonitorCog className="text-accent"/>
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    </div>
                                    {/* <p className="mx-auto text-white/60 xl:mx-0">{skills.description}</p> */}
                                    <ul>
                                    {skills.items.map((item, index) => {
                                        return (
                                        <li className="mb-5" key={index}>
                                            <h4 className="flex justify-center mb-4 text-xl font-semibold">{item.category}</h4>
                                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-[30px] justify-center">

                                            {item.skills.map((skill, skillIndex) => {
                                                return (
                                                <li key={skillIndex}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[75px] bg-sec_gray rounded-xl flex justify-center items-center group">
                                                                <div className="text-5xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                                );
                                            })}
                                            </ul>
                                        </li>
                                        );
                                    })}
                                    </ul>
                                </div>
                            </TabsContent>
                            { /* about tab */}
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <div className="flex items-center gap-x-4 ">
                                        <ClipboardPenIcon className="text-accent"/>
                                        <h3 className="text-4xl font-bold">{about.title}</h3>
                                    </div>
                                    <p className="mx-auto text-white/60 xl:mx-0">{about.description}</p>
                                    <ul className="grid grid-cols-1 mx-auto xl:grid-cols-2 gap-y-6 xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                                                    <span className="text-accent">{item.fieldName}</span>
                                                    <span className="">{item.fieldValue}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume