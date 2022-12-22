const Benefit = () => {
  return (
    <section className="flex flex-col-reverse items-center lg:flex-row-reverse lg:gap-x-28 lg:gap-y-10">
      <div className="mt-8 flex  flex-col gap-6">
        <p className="font-medium uppercase tracking-[0.2em] text-neutral-200">
          <span>-</span>BENEFITS OF YOU
        </p>
        <h3 className="text-h5 font-semibold text-white lg:text-h3">
          Fast, reliable and
          <br />
          secure for your conferences
        </h3>
        <p className="text-neutral-50">
          By using us, get the benefits that make it easier for you in the conference for your
          convenience and the participants
        </p>
        <div className="lg:grid-cols-0 mb-11 grid gap-x-12 gap-y-4 lg:grid-rows-3">
          <div className="flex gap-x-4">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Security & Privacy</span>
          </div>
          <div className="flex gap-x-4">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Audience Q&A</span>
          </div>
          <div className="flex gap-x-4">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Engagement</span>
          </div>
        </div>
      </div>
      <div className="relative mt-14 lg:my-28">
        <img src="/benefit.png" alt="benefit" />
      </div>
    </section>
  );
};

export default Benefit;
