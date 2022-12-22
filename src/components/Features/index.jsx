import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col-reverse items-center lg:flex-row lg:gap-x-28 lg:gap-y-10">
      <div className="mt-8 flex flex-col gap-6 lg:mt-48">
        <p className="font-medium uppercase tracking-[0.2em] text-neutral-200">
          <span>-</span>all features
        </p>
        <h3 className="text-h5 font-semibold text-white lg:text-h3">
          Video calls loved by
          <br />
          extraordinary teams.
        </h3>
        <p className="text-neutral-50">
          Making hybrid‑conference inclusive with unique audio technology.
        </p>
        <div className="mb-11 grid gap-x-12 gap-y-4 lg:grid-cols-2 lg:grid-rows-3">
          <div className="flex gap-x-4">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Intergration with google meet</span>
          </div>
          <div className="flex gap-x-4">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Get data event analytics</span>
          </div>
          <div className="flex gap-x-4">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Protect events with a passcode</span>
          </div>
          <div className="hidden gap-x-4 lg:flex">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Messages with participation</span>
          </div>
          <div className="hidden gap-x-4 lg:flex">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Advanced Q&A settings</span>
          </div>
          <div className="hidden gap-x-4 lg:flex">
            <img className="inline" src="/tick-circle.svg" />
            <span className="text-white">Crowdsource questions</span>
          </div>
        </div>
      </div>
      <div className="relative mt-14 lg:my-28">
        <img src="/features.png" alt="features" />
      </div>
    </section>
  );
};

export default Features;
