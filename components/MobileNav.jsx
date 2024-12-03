"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from 'react-icons/ci';
import { Button } from "./ui/button";


const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'My projects',
        path: '/projects',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]


const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex items-center justify-center">
            <CiMenuBurger className="text-[40px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-2xl text-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        TVM <span className="text-xl text-accent">Web Developer</span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className=
                                {`${link.path === pathName && "text-accent border-b-2 border-accent"} 
                                    text-xl capitalize hover:text-accent-hover transition-all`}
                            >
                            {link.name}
                        </Link>
                    );
                })}
                        <Link href="/contact">
                            <Button>Download CV</Button>
                        </Link>
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav