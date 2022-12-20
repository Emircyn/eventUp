const DisplayRoom = () => {
  return (
    <div className='flex lg:flex-col flex-col-reverse items-center gap-y-8 lg:gap-20 lg:mb-32 mb-14'>
      <div className='flex flex-col items-center gap-4 lg:mt-28'>
        <h3 className='text-h3-custom text-center'>
          Powerful virtual conferencing
          <br /> platform solution
        </h3>
        <p className='text-xl text-neutral-500 text-center'>
          Dedicated spaces that make it easy to come together.
        </p>
      </div>
      <div className='relative'>
        <img src='/room.png' alt='room' draggable='false' />
      </div>
    </div>
  );
};

export default DisplayRoom;
