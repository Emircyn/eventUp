import { useEffect, useState } from "react";
import Button from "../Button";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const stickNavbar = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 flex ${
        scroll > 100 ? "bg-neutral-800/95" : "bg-neutral-800"
      }  h-[94px]`}
    >
      <div className="container mx-auto flex w-[96%] items-center justify-between  text-neutral-0">
        <div className="h-[30px] w-[181px]">
          <a href="/" className="h-full w-full">
            <img draggable="false" src="/Logo.svg" />
          </a>
        </div>
        <nav className="hidden gap-10 lg:flex">
          <div className="link active relative">
            <a href="#" className="">
              home
            </a>
          </div>
          <div className="link relative">
            <a href="#">about</a>
          </div>
          <div className="link relative">
            <a href="#">pricing</a>
          </div>
          <div className="link relative">
            <a href="#">career</a>
          </div>
          <div className="link relative">
            <a href="#">blog</a>
          </div>
        </nav>
        <div className="hidden lg:flex lg:gap-4">
          <Button otherCSS="hover:scale-105">log in</Button>
          <Button otherCSS="bg-primary-800 hover:scale-105">sign up</Button>
        </div>
        <div className="lg:hidden">
          <div onClick={() => setOpen((isOpen) => !isOpen)}>
            <img src="menu.svg" />
          </div>
          <MobileNav isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
