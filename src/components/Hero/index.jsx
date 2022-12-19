import Button from '../Button';

const Hero = () => {
  return (
    <section className='w-full text-center lg:text-start  gap-16 flex lg:flex-row flex-col-reverse items-center'>
      <div className='w-full flex flex-col  gap-6'>
        <h1 className='text-white leading-tight relative text-h2 lg:text-h1 font-semibold'>
          Reliable, secure conference to get the best events
          <img
            className='absolute  top-2 right-72 hidden 2xl:block'
            src='/Ornament.svg'
          />
        </h1>
        <p className='text-lg lg:text-xl text-neutral-50 mb-14'>
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
      <div className='relative'>
        <img draggable='false' src='/Image.png' alt='works' />
      </div>
    </section>
  );
};

export default Hero;
