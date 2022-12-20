import Button from '../Button';

const Hero = () => {
  return (
    <section className='w-full pt-10 gap-16 flex lg:flex-row flex-col-reverse items-center'>
      <div className='w-full item text-center lg:text-start flex flex-col  gap-6'>
        <h1 className='text-white leading-tight relative text-h4 lg:text-h1 font-semibold'>
          Reliable, secure
          <span className='relative h-full'>
            <img className='inline -mt-9' src='/Ornament.svg' />
          </span>
          conference to get the best events
        </h1>
        <p className='text-lg lg:text-xl text-neutral-50'>
          Hold incredible events, share knowledge, build and grow your product ,
          create opportunity
        </p>
        <div className='flex gap-6 mb-36 justify-center lg:justify-start'>
          <Button otherCSS='bg-primary-800 text-white hover:scale-105'>
            Create Conference
          </Button>
          <Button otherCSS='text-white border-[1px] group hover:scale-105'>
            Watch story
            <img
              className='ml-2 hidden lg:inline group-hover:scale-105'
              src='/arrow-right.svg'
            />
          </Button>
        </div>
      </div>
      <div className='relative mx-4 lg:mb-10'>
        <img draggable='false' src='/Image.png' alt='works' />
      </div>
    </section>
  );
};

export default Hero;
