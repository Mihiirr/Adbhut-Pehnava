import { Link } from "@remix-run/react";
import React, { useState } from "react";
import InstagramIcon from "./Icons/InstagramIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import SearchIcon from "./Icons/SearchIcon";
import UserIcon from "./Icons/UserIcon";
import Logo from "./Logo";
import CartIcon from "./Icons/CartIcon";

type Props = {
  children: React.ReactNode;
};

const UserOptions = [
  {
    Url: "/account/profile",
    name: "Profile",
  },
  {
    Url: "/account/order-history",
    name: "Order history",
  },
];

const Layout: React.FC<Props> = ({ children }) => {
  const [UserDropdown, SetUserDropdown] = useState(false);

  const userProfileClickHandler = () => {
    SetUserDropdown(!UserDropdown);
  };
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <div className="h-36 lg:h-20 w-full border-b-2 border-gray-200 bg-white flex items-center justify-between px-8">
        <div className="hidden lg:w-4/12">
          <SearchIcon className="rounded-md hover:cursor-pointer" />
        </div>
        {/* <div className="w-4/12 bg-green-300 flex items-center justify-start"> */}
        <Logo size="large" />
        {/* </div> */}
        <div className="w-4/12 flex justify-end">
          <Link to="/account/login">
            <UserIcon className="rounded-md hover:cursor-pointer" />
          </Link>

          {/* <div className="flex items-center justify-between">
              <p className="text-4xl lg:text-lg mr-5">Hi, {user.username}!</p>
              <div>
                <UserIcon
                  className="mr-3 rounded-md hover:cursor-pointer"
                  onClick={userProfileClickHandler}
                />
                {UserDropdown && (
                  <div className="h-auto w-52 bg-white absolute top-30 right-20 rounded-lg p-4 shadow-xl z-10">
                    {user.role === "ADMIN" && (
                      <Link to="/admin/dashboard">
                        <div className="hover:bg-stone-200 hover:cursor-pointer rounded-md flex items-center px-2 h-10 text-xl">
                          Dashboard
                        </div>
                      </Link>
                    )}
                    {UserOptions.map((val) => (
                      <Link to={val.Url}>
                        <div
                          key={val.name}
                          className="hover:bg-stone-200 hover:cursor-pointer rounded-md flex items-center px-2 h-10 text-xl"
                        >
                          {val.name}
                        </div>
                      </Link>
                    ))}
                    <form action="/account/logout" method="post">
                      <button
                        type="submit"
                        className="hover:bg-red-300 hover:cursor-pointer rounded-md flex items-center px-2 h-10 w-full text-xl"
                      >
                        Sign Out
                      </button>
                    </form>
                  </div>
                )}
              </div>
              <Link to="/cart" className="flex">
                <CartIcon className="rounded-md hover:cursor-pointer" />
                {cart.totalCartItems[0]?._count.productId === 0 ? (
                  <p></p>
                ) : (
                  <p>{cart.totalCartItems[0]?._count.productId}</p>
                )}
              </Link>
            </div> */}
        </div>
      </div>

      {/* Children */}
      <div>{children}</div>

      {/* Footer */}
      <div className="h-74 w-full bg-stone-200 mt-10">
        <div className="h-full lg:max-w-7xl lg:mx-auto flex flex-col items-center lg:flex-row">
          <div className="h-full w-4/12 flex items-center justify-center">
            <Logo size="large" />
          </div>
          <div className="h-full w-4/12 py-8 flex flex-col items-center">
            <p className="text-4xl lg:text-2xl mb-5 underline lg:no-underline">
              Reach out to us
            </p>
            <div className="flex justify-between w-16">
              <a href="https://instagram.com/mihiirrrrrr" target="_blank">
                <InstagramIcon className="hover:cursor-pointer" />
              </a>
              <FacebookIcon className="hover:cursor-pointer" />
            </div>
          </div>
          <div className="h-full lg:w-4/12 p-8 flex flex-col items-center">
            <p className="text-4xl lg:text-2xl mb-5 underline lg:no-underline">
              Contact Us
            </p>
            <div className="w-full text-2xl lg:text-lg">
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
