import Button from "../Button";

const MobileNav = (props) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 z-[40] h-screen w-screen bg-[rgba(0,0,0,0.3)] ${
          props.isOpen === true ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed right-0 top-0 z-50 block h-screen w-10/12 bg-neutral-800 px-4 py-6 transition-all duration-500 lg:hidden ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-right" onClick={() => props.setOpen(false)}>
          <button>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Career</a>
          <a href="#">Blog</a>
          <div className="mx-auto flex w-full justify-center gap-2">
            <Button otherCSS={"w-full"}>Log In</Button>
            <Button otherCSS={"bg-primary-800 w-full"}>Sign Up</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
