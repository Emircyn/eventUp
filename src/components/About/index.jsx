const About = () => {
  return (
    <section className="flex w-full flex-col items-center justify-evenly gap-8 py-14 lg:flex-row">
      <div className="relative w-auto">
        <img draggable="false" src="/about-image.png" />
      </div>
      <div className="flex max-w-xl flex-col justify-center gap-4">
        <h3 className="text-h3-custom">Everyone on their own device.</h3>
        <p className="text-lg leading-8 text-neutral-500 lg:text-xl">
          <span className="font-semibold">EventUp</span> is designed to be inclusive, by being able
          to use your own device to help hybrid-conference teams create, collaborate and celebrate
          together.
        </p>
      </div>
    </section>
  );
};

export default About;
