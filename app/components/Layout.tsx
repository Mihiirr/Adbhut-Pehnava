import { Link } from "@remix-run/react";
import React from "react";
import InstagramIcon from "./Icons/InstagramIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import SearchIcon from "./Icons/SearchIcon";
import Logo from "./Logo";
import CartIcon from "./Icons/CartIcon";

type Props = {
  children: React.ReactNode;
};

const headerLinks = [
  {
    name: "SHOP",
    url: "wip",
  },
  {
    name: "ABOUT",
    url: "wip",
  },
  {
    name: "CONTACT",
    url: "wip",
  },
];

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-stone-50">
      {/* Login Header */}
      <div className="h-7 md:h-10 w-full bg-stone-600 text-stone-300 ">
        <div className="h-full md:max-w-7xl lg:mx-auto px-4 md:px-0 text-sm md:text-base flex items-center justify-between">
          <SearchIcon />
          <div className="flex items-center">
            <p>
              <Link to="wip">Login</Link> <span className="mx-4">|</span>
              <Link to="wip">Create account</Link>
            </p>
            <div className="h-5 md:h-7 w-8 md:w-12 ml-4 md:border-2 md:border-stone-300 flex items-center justify-around rounded-sm">
              <CartIcon />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="h-16 lg:h-20 w-full lg:max-w-7xl lg:mx-auto text-stone-600 flex items-center justify-between px-4 lg:px-0">
        <div className="hidden lg:w-4/12">
          <SearchIcon className="rounded-md hover:cursor-pointer" />
        </div>
        <Logo size="large" />
        <div className="w-4/12 text-xs md:text-base flex justify-end">
          {headerLinks.map((val) => (
            <Link to={val.url} key={val.name}>
              <p className="ml-8">{val.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Children */}
      <div>{children}</div>

      {/* Footer */}
      <div className="h-70 lg:h-74 w-full bg-stone-600 mt-10 p-4 md:p-0 text-stone-300">
        <div className="h-full lg:max-w-7xl lg:mx-auto flex flex-col items-center lg:flex-row text-xl lg:text-4xl">
          <div className="h-full md:w-4/12 flex items-center justify-center">
            <Logo size="large" />
          </div>
          <div className="h-full w-4/12 py-8 flex flex-col items-center">
            <p className="mb-5 underline lg:no-underline">Reach out to us</p>
            <div className="flex justify-between w-16">
              <a href="https://instagram.com/mihiirrrrrr" target="_blank">
                <InstagramIcon
                  className="hover:cursor-pointer"
                  stroke="white"
                />
              </a>
              <FacebookIcon className="hover:cursor-pointer" stroke="white" />
            </div>
          </div>
          <div className="h-full lg:w-4/12 p-8 flex flex-col items-center">
            <p className="mb-5 underline lg:no-underline">Contact Us</p>
            <div className="w-full text-base lg:text-lg">
              <p>
                Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur,
                Varthur Hobli, Bengaluru-560103, Karnataka, India
              </p>
              <p>Email address:</p>
              <p>help@gmail.com</p>
              <p>© 2022 FashionAndWorld.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
