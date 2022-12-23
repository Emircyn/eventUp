import Button from '../Button';

const Card = () => {
  return (
    <div className="mb-32 flex flex-col items-center justify-around gap-9 rounded-lg  bg-cardBG bg-card-pattern bg-center py-14 px-6 lg:flex-row lg:px-6 lg:py-12">
      <div className="flex max-w-lg flex-col gap-4">
        <h3 className="text-h3-custom !text-white">Ready to setup your next conference?</h3>
        <p className="text-neutral-50">
          Build opportunities for future opportunities for products, startups.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <Button otherCSS="bg-primary-800 text-white w-full hover:scale-105">
          Create Conference
        </Button>
        <Button otherCSS="border-[1px] text-white w-full hover:scale-105">watch story</Button>
      </div>
    </div>
  );
};

export default Card;
