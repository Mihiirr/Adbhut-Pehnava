import { Link } from "@remix-run/react";
import CrossIcon from "./Icons/CrossIcon";

type Props = {
  menuHandler: any;
};

const SideBar = (props: Props) => {
  return (
    <div className="h-screen w-7/12 p-2 bg-stone-600 top-0 right-0 fixed text-white">
      <CrossIcon onClick={props.menuHandler} />
      <div className="mt-5 w-full text-xl">
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
  );
};

export default SideBar;
