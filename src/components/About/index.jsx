const About = () => {
  return (
    <div className='flex items-center flex-col lg:flex-row gap-8 justify-evenly py-14 w-full'>
      <div className='relative w-auto'>
        <img draggable='false' src='/about-image.png' />
      </div>
      <div className='flex flex-col justify-center gap-4 max-w-xl'>
        <h3 className='text-h3-custom'>Everyone on their own device.</h3>
        <p className='lg:text-xl text-lg leading-8 text-neutral-500'>
          <span className='font-semibold'>EventUp</span> is designed to be
          inclusive, by being able to use your own device to help
          hybrid-conference teams create, collaborate and celebrate together.
        </p>
      </div>
    </div>
  );
};

export default About;
