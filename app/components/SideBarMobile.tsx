import { Link } from "@remix-run/react";
import { useState } from "react";
import CrossIcon from "./Icons/CrossIcon";
import MenuIcon from "./Icons/MenuIcon";

const SideBar = () => {
  const [IsOpen, SetIsOpen] = useState(false);

  const sidebarHandler = () => {
    SetIsOpen(!IsOpen);
  };
  return (
    <>
      {IsOpen === false ? (
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
          IsOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-200`}
      >
        <div className="mt-16 w-full text-xl">
          <p className="h-10 flex items-center w-full border-b-2 border-stone-300">
            DASHBOARD
          </p>
          <p className="h-10 flex items-center w-full border-b-2 border-stone-300">
            SHOP
          </p>
          <p className="h-10 flex items-center w-full border-b-2 border-stone-300">
            ABOUT
          </p>
          <div className="mt-5">
            <Link to="wip">
              <p className="h-8 flex items-center w-full">LOGIN</p>
            </Link>
            <Link to="wip">
              <p className="h-8 flex items-center w-full">CREATE ACCOUNT</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
