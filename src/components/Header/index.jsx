import { useEffect, useState } from 'react';
import Button from '../Button';
import MobileNav from './MobileNav';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const stickNavbar = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  }, []);

  return (
    <header
      className={`flex sticky top-0 z-30 ${
        scroll > 100 ? 'bg-neutral-800/95' : 'bg-neutral-800'
      }  h-[94px]`}
    >
      <div className='container flex mx-auto w-[96%] justify-between items-center  text-neutral-0'>
        <div className='w-[181px] h-[30px]'>
          <a href='/' className='w-full h-full'>
            <img draggable='false' src='/Logo.svg' />
          </a>
        </div>
        <nav className='hidden lg:flex gap-10'>
          <div className='relative link active'>
            <a href='#' className=''>
              home
            </a>
          </div>
          <div className='relative link'>
            <a href='#'>about</a>
          </div>
          <div className='relative link'>
            <a href='#'>pricing</a>
          </div>
          <div className='relative link'>
            <a href='#'>career</a>
          </div>
          <div className='relative link'>
            <a href='#'>blog</a>
          </div>
        </nav>
        <div className='hidden lg:flex lg:gap-4'>
          <Button otherCSS='hover:scale-105'>log in</Button>
          <Button otherCSS='bg-primary-800 hover:scale-105'>sign up</Button>
        </div>
        <div className='lg:hidden'>
          <div onClick={() => setOpen((isOpen) => !isOpen)}>
            <img src='menu.svg' />
          </div>
          <MobileNav isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
