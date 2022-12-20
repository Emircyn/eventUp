import Button from '../Button';

const MobileNav = (props) => {
  return (
    <>
      <div
        className={`absolute w-screen h-screen bg-[rgba(0,0,0,0.3)] top-0 right-0 z-[40] ${
          props.isOpen === true ? 'block' : 'hidden'
        }`}
      ></div>
      <div
        className={`fixed right-0 top-0 bg-neutral-800 w-10/12 h-screen z-50 block lg:hidden px-4 py-6 transition-all duration-500 ${
          props.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='text-right' onClick={() => props.setOpen(false)}>
          <button>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col gap-4'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Pricing</a>
          <a href='#'>Career</a>
          <a href='#'>Blog</a>
          <div className='flex w-full justify-center gap-2 mx-auto'>
            <Button otherCSS={'w-full'}>Log In</Button>
            <Button otherCSS={'bg-primary-800 w-full'}>Sign Up</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
