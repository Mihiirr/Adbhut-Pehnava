import { Link } from "@remix-run/react";
import { useState } from "react";
import { collectionsMenu } from "~/menus";
import CartIcon from "./Icons/CartIcon";
import CrossIcon from "./Icons/CrossIcon";
import DownArrowIcon from "./Icons/DownArrowIcon";
import MenuIcon from "./Icons/MenuIcon";

const SideBar = () => {
  const [IsSideBarOpen, SetIsSideBarOpen] = useState(false);
  const [IsShopMenuOpen, SetIsShopMenuOpen] = useState(false);

  const sidebarHandler = () => {
    SetIsSideBarOpen(!IsSideBarOpen);
  };

  const showMenuHandler = () => {
    SetIsShopMenuOpen(!IsShopMenuOpen);
  };
  return (
    <>
      {IsSideBarOpen === false ? (
        <button onClick={sidebarHandler}>
          <MenuIcon />
        </button>
      ) : (
        <button className="top-2 right-4 fixed z-50" onClick={sidebarHandler}>
          <CrossIcon />
        </button>
      )}
      <div
        className={`h-screen w-7/12 p-2 bg-stone-600 top-0 right-0 fixed text-white ${
          IsSideBarOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-200`}
      >
        <div className="mt-16 w-full text-xl">
          <Link to="/wip">
            <p className="h-10 flex items-center w-full border-b-2 border-stone-300">
              DASHBOARD
            </p>
          </Link>
          <Link to="/cart">
            <div className="h-10 flex items-center w-full border-b-2 border-stone-300">
              <p>CART</p>
              <CartIcon
                height="24"
                width="24"
                fill="#ffffff"
                stroke="white"
                className="ml-2"
              />
              <p>0</p>
            </div>
          </Link>
          <div
            onClick={showMenuHandler}
            className={`w-full h-10 flex items-center ${
              IsShopMenuOpen ? "bg-stone-500" : "border-b-2 border-stone-300"
            }`}
          >
            <p className="mr-2">SHOP</p>
            <DownArrowIcon fill="#ffffff" height="12" width="12" />
          </div>
          {IsShopMenuOpen && (
            <div className="flex flex-col text-base">
              {collectionsMenu?.map((item) => (
                <Link to={item.url} key={item.name}>
                  <button
                    className="w-full py-1 px-4 flex items-center justify-start bg-stone-500 border-b-2 border-stone-300"
                    onClick={async () => {
                      await sidebarHandler();
                      await showMenuHandler();
                    }}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
          )}
          <div className="mt-5">
            <Link to="/wip">
              <p className="h-8 flex items-center w-full">LOGIN</p>
            </Link>
            <Link to="/wip">
              <p className="h-8 flex items-center w-full">CREATE ACCOUNT</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
