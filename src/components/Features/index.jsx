import React from 'react';

const Features = () => {
  return (
    <div className='flex text-center lg:text-start flex-col-reverse lg:flex-row lg:gap-x-28 lg:gap-y-10'>
      <div className='flex mt-8 lg:mt-48 gap-6 flex-col'>
        <p className='text-neutral-200 uppercase tracking-[0.2em] font-medium'>
          <span>-</span>all features
        </p>
        <h3 className='lg:text-h3 text-h5 font-semibold text-white'>
          Video calls loved by
          <br />
          extraordinary teams.
        </h3>
        <p className='text-neutral-50'>
          Making hybrid‑conference inclusive with unique audio technology.
        </p>
        <div className='grid mb-11 lg:grid-cols-2 lg:grid-rows-3 gap-x-12 gap-y-4'>
          <div className='flex gap-x-4'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Intergration with google meet</span>
          </div>
          <div className='flex gap-x-4'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Get data event analytics</span>
          </div>
          <div className='flex gap-x-4'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Protect events with a passcode</span>
          </div>
          <div className='gap-x-4 hidden lg:flex'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Messages with participation</span>
          </div>
          <div className='gap-x-4 hidden lg:flex'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Advanced Q&A settings</span>
          </div>
          <div className='gap-x-4 hidden lg:flex'>
            <img className='inline' src='/tick-circle.svg' />
            <span className='text-white'>Crowdsource questions</span>
          </div>
        </div>
      </div>
      <div className='relative lg:my-28 mt-14'>
        <img src='/features.png' alt='features' />
      </div>
    </div>
  );
};

export default Features;
