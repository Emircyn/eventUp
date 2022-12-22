import Button from '../Button';

const Hero = () => {
  return (
    <section className="flex w-full flex-col-reverse items-center gap-16 pt-10 lg:flex-row">
      <div className="item flex w-full flex-col gap-6 text-center  lg:text-start">
        <h1 className="relative text-h4 font-semibold leading-tight text-white lg:text-h1">
          Reliable, secure
          <span className="relative h-full">
            <img className="-mt-9 inline" src="/Ornament.svg" />
          </span>
          conference to get the best events
        </h1>
        <p className="text-lg text-neutral-50 lg:text-xl">
          Hold incredible events, share knowledge, build and grow your product , create opportunity
        </p>
        <div className="mb-36 flex justify-center gap-6 lg:justify-start">
          <Button otherCSS="bg-primary-800 text-white hover:scale-105">Create Conference</Button>
          <Button otherCSS="text-white border-[1px] group hover:scale-105">
            Watch story
            <img className="ml-2 hidden group-hover:scale-105 lg:inline" src="/arrow-right.svg" />
          </Button>
        </div>
      </div>
      <div className="relative mx-4 lg:mb-10">
        <img draggable="false" src="/Image.png" alt="works" />
      </div>
    </section>
  );
};

export default Hero;
