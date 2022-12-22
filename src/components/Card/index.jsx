import Button from '../Button';

const Card = () => {
  return (
    <div className='bg-cardBG bg-card-pattern mb-10 gap-9 py-14 px-6 lg:px-6 lg:py-12 bg-center items-center justify-around rounded-lg flex flex-col lg:flex-row'>
      <div className='flex flex-col gap-4 max-w-lg'>
        <h3 className='text-h3-custom !text-white'>
          Ready to setup your next conference?
        </h3>
        <p className='text-neutral-50'>
          Build opportunities for future opportunities for products, startups.
        </p>
      </div>
      <div className='flex gap-6 flex-col lg:flex-row'>
        <Button otherCSS='bg-primary-800 text-white w-full hover:scale-105'>
          Create Conference
        </Button>
        <Button otherCSS='border-[1px] text-white w-full hover:scale-105'>
          watch story
        </Button>
      </div>
    </div>
  );
};

export default Card;
