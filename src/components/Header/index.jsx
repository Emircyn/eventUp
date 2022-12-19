import { useState } from 'react';
import Button from '../Button';
import { Sling as Hamburger } from 'hamburger-react';
import MobileNav from './MobileNav';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className='flex justify-between items-center  h-[94px] text-neutral-0'>
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
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <MobileNav />}
      </div>
    </header>
  );
};

export default Header;
