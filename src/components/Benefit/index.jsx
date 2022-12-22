const Benefit = () => {
  return (
    <section className='flex items-center flex-col-reverse lg:flex-row-reverse lg:gap-x-28 lg:gap-y-10'>
      <div className='flex mt-8  gap-6 flex-col'>
        <p className='text-neutral-200 uppercase tracking-[0.2em] font-medium'>
          <span>-</span>BENEFITS OF YOU
        </p>
        <h3 className='lg:text-h3 text-h5 font-semibold text-white'>
          Fast, reliable and
          <br />
          secure for your conferences
        </h3>
        <p className='text-neutral-50'>
          By using us, get the benefits that make it easier for you in the
          conference for your convenience and the participants
        </p>
        <div className='grid mb-11 lg:grid-cols-0 lg:grid-rows-3 gap-x-12 gap-y-4'>
          <div className='flex gap-x-4'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Security & Privacy</span>
          </div>
          <div className='flex gap-x-4'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Audience Q&A</span>
          </div>
          <div className='flex gap-x-4'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Engagement</span>
          </div>
        </div>
      </div>
      <div className='relative lg:my-28 mt-14'>
        <img src='/benefit.png' alt='benefit' />
      </div>
    </section>
  );
};

export default Benefit;
