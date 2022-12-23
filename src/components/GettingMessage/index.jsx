const GettingMassage = () => {
  return (
    <section className="my-14 flex flex-col  justify-around gap-10 lg:my-36 lg:flex-row lg:gap-48">
      <div className="flex gap-4">
        <div className="relative">
          <img src="/andrew-pow.png" alt="andrew-pow" />
        </div>
        <div>
          <h5 className="text-xl font-semibold lg:text-h5">Sunaryo Situmorang</h5>
          <span className="text-lg text-neutral-500">Founder & CEO EventUp</span>
        </div>
      </div>
      <div className="flex lg:h-[330] lg:w-[523px]">
        <blockquote className="text-h3-custom">
          {/* <div className='relative'>
            <img className='w-20 absolute -left-14 -top-6' src='/Frame.svg' />
          </div> */}
          "Our goal is to build software that enables users who need it to launch their products in
          this pandemic and all-digital time"
          {/* <div className='relative '>
            <img
              className='inline absolute -top-14 right-40'
              src='/Frame_.svg'
            />
          </div> */}
        </blockquote>
      </div>
    </section>
  );
};

export default GettingMassage;
