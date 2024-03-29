import { Link } from "@remix-run/react";
import React from "react";
import InstagramIcon from "./Icons/InstagramIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import Logo from "./Logo";
import CartIcon from "./Icons/CartIcon";
import SideBar from "./SideBarMobile";
import { useRootContext } from "~/context/root-context";

type Props = {
  children: React.ReactNode;
  brownTitle?: string;
};

const Layout: React.FC<Props> = ({ children, brownTitle }) => {
  const {
    rootState: { user },
  } = useRootContext();
  return (
    <div className="bg-stone-50">
      {/* Brown Header */}
      <div className="h-7 md:h-10 w-full bg-stone-600 text-stone-300 ">
        <div className="h-full md:max-w-7xl lg:mx-auto px-4 md:px-0 text-sm md:text-base flex items-center justify-center">
          {brownTitle ? <p>{brownTitle}</p> : <p>Wellcome to Adbhut Pehnava</p>}
        </div>
      </div>

      {/* Header */}
      <div className="h-16 lg:h-20 w-full lg:max-w-7xl lg:mx-auto text-stone-600 flex items-center justify-between px-4 lg:px-0 border-b-2 border-stone-300">
        <Logo size="large" />

        {user !== null && (
          <p>
            Hi, <strong>{user?.username}</strong>
          </p>
        )}

        {/* Mobile view */}
        <div className="md:hidden">
          <SideBar />
        </div>

        {/* laptop view */}
        <div className="hidden text-xs md:text-base md:flex items-center justify-center">
          {user?.role === "ADMIN" && (
            <Link to="/admin/dashboard">
              <p className="ml-8">DASHBOARD</p>
            </Link>
          )}
          {user !== null ? (
            <form action="/account/logout" method="post">
              <button
                type="submit"
                className="px-2 h-10 ml-3 bg-red-500 text-white hover:bg-red-400 hover:cursor-pointer rounded-md flex items-center "
              >
                LOGOUT
              </button>
            </form>
          ) : (
            <Link to="/account/login">
              <p className="ml-8">LOGIN</p>
            </Link>
          )}
          <Link to="/cart">
            <div className="h-10 px-2 ml-8 rounded-sm flex items-center justify-center border-2 border-stone-300">
              <CartIcon height="24" width="24" fill="none" stroke="black" />
              <p>0</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Children */}
      <div>{children}</div>

      {/* Footer */}
      <div className="h-70 lg:h-74 w-full bg-stone-600 mt-10 p-4 md:p-0 text-stone-300">
        <div className="h-full lg:max-w-7xl lg:mx-auto flex flex-col items-center md:justify-between lg:flex-row text-xl lg:text-3xl">
          <div className="h-full flex items-center justify-center">
            <Logo size="xlarge" />
          </div>
          <div className="h-full py-8 flex flex-col items-center">
            <p className="mb-5 underline lg:no-underline">Reach out to us</p>
            <div className="flex justify-between w-16">
              <a href="https://instagram.com/adbhutpehnava" target="_blank">
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
                Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandurev,
                arthur Hobli, Vadodara-674467, Gujarat, India
              </p>
              <p>
                <strong>Email address:</strong> help@gmail.com
              </p>
              <p>© 2022 adbhutpehnava.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
