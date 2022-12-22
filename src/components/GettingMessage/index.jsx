const GettingMassage = () => {
  return (
    <section className='flex lg:gap-48 gap-10  flex-col lg:flex-row justify-around my-14 lg:my-36'>
      <div className='flex gap-4'>
        <div className='relative'>
          <img src='/andrew-pow.png' alt='andrew-pow' />
        </div>
        <div>
          <h5 className='font-semibold text-xl lg:text-h5'>
            Sunaryo Situmorang
          </h5>
          <span className='text-lg text-neutral-500'>
            Founder & CEO EventUp
          </span>
        </div>
      </div>
      <div className='flex lg:w-[523px] lg:h-[330]'>
        <h2 className='text-h3-custom'>
          {/* <div className='relative'>
            <img className='w-20 absolute -left-14 -top-6' src='/Frame.svg' />
          </div> */}
          Our goal is to build software that enables users who need it to launch
          their products in this pandemic and all-digital time
          {/* <div className='relative '>
            <img
              className='inline absolute -top-14 right-40'
              src='/Frame_.svg'
            />
          </div> */}
        </h2>
      </div>
    </section>
  );
};

export default GettingMassage;
