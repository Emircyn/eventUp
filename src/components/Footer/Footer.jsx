import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const Footer = () => {
  const [select, setSelect] = useState('US');
  const onSelect = (code) => setSelect(code);
  return (
    <footer className="text-neutral-400">
      <div className="flex flex-wrap justify-evenly gap-10 pb-16 ">
        <div className="flex flex-wrap gap-4 lg:flex-col">
          <img src="/LogoWhite.png" alt="logo" />
          <p>Made around the world.</p>
        </div>
        <nav className="flex flex-wrap gap-14">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xl font-semibold text-neutral-800">
              Products
            </a>
            <a href="#">Conference</a>
            <a href="#">Pricing</a>
            <a href="#">Solution</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xl font-semibold text-neutral-800">
              Products
            </a>
            <a href="#">Conference</a>
            <a href="#">Pricing</a>
            <a href="#">Solution</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xl font-semibold text-neutral-800">
              Products
            </a>
            <a href="#">Conference</a>
            <a href="#">Pricing</a>
            <a href="#">Solution</a>
          </div>
        </nav>
        <div className=" flex max-w-xs flex-col  gap-4">
          <h5 className="text-xl font-semibold text-neutral-800">Subscribe to our newsletter.</h5>
          <p>Want to stay up to date with news and updates about our product? Subscribe.</p>
          <div className="relative flex w-full items-center rounded border-[1px]">
            <input
              className="w-full p-4 placeholder:text-neutral-500 focus:outline-none"
              type="text"
              placeholder="email@provider.com"
            />
            <img className="text-black m-2 h-5 w-5 cursor-pointer" src="/arrow-right.png" />
          </div>
          <p className="text-sm text-neutral-200">
            By subscribing to our newsletter you agree to our privacy policy and will get commercial
            communication.
          </p>
        </div>
      </div>
      <hr className="w-full text-neutral-50" />
      <div className="flex flex-wrap-reverse justify-between gap-9 py-12">
        <nav className="flex flex-wrap gap-6">
          <a href="#" className="pr-20">
            © 2022 EventUp, Inc.
          </a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </nav>
        <div className="flex items-center gap-8">
          <ReactFlagsSelect
            selected={select}
            onSelect={onSelect}
            countries={['US', 'GB']}
            customLabels={{ US: 'English (US)', GB: 'English (GB)' }}
          />
          <div className="flex gap-4">
            <a className="h-6 w-6" href="#">
              <img className="h-full w-full" src="/Twitter.png" />
            </a>
            <a className="h-6 w-6" href="#">
              <img className="h-full w-full" src="/Twitter.png" />
            </a>
            <a className="h-6 w-6" href="#">
              <img className="h-full w-full" src="/Twitter.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
