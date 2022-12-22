const DisplayRoom = () => {
  return (
    <section className="mb-14 flex flex-col-reverse items-center gap-y-8 lg:mb-32 lg:flex-col lg:gap-20">
      <div className="flex flex-col items-center gap-4 lg:mt-28">
        <h3 className="text-h3-custom text-center">
          Powerful virtual conferencing
          <br /> platform solution
        </h3>
        <p className="text-center text-xl text-neutral-500">
          Dedicated spaces that make it easy to come together.
        </p>
      </div>
      <div className="relative">
        <img src="/room.png" alt="room" draggable="false" />
      </div>
    </section>
  );
};

export default DisplayRoom;
