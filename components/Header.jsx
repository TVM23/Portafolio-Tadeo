import Link from "next/link";
import { Button } from "./ui/button";

//Nav from components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full py-8 text-white border-b-4 border-accent xl:py-12 bg-primary">
        <div className="container flex items-center justify-between mx-auto">
            {/*  this is the Logo  */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                TVM <span className="text-xl text-accent">Developer</span>
            </h1>
            </Link>

            {/*  import desktop Nav.jsx from components & button */}
            <div className="items-center hidden gap-8 xl:flex">
                <Nav />
                <Link href="/contact">
                    <Button>Download CV</Button>
                </Link>
            </div>

            {/* nav for mobile devices */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
        
    </header>
  );
};

export default Header;