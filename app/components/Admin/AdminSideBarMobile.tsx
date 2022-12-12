import { Link } from "@remix-run/react";
import { useState } from "react";
import Button from "../Button";
import CrossIcon from "../Icons/CrossIcon";
import MenuIcon from "../Icons/MenuIcon";

type Props = {
  HeaderLinks: {
    name: String;
    href: String;
  }[];
};

const AdminSideBar: React.FC<Props> = ({ HeaderLinks }) => {
  const [IsSideBarOpen, SetIsSideBarOpen] = useState(false);

  const sidebarHandler = () => {
    SetIsSideBarOpen(!IsSideBarOpen);
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
        } ease-in-out duration-200 z-50`}
      >
        <div className="mt-16 w-full text-xl" onClick={sidebarHandler}>
          {HeaderLinks.map((item) => (
            <Link to={`${item.href}`}>
              <p className="h-10 flex items-center w-full border-b-2 border-stone-300">
                {item.name}
              </p>
            </Link>
          ))}
          <Link to="/admin/addproduct">
            <div className="mt-4">
              <Button variant="primary">Add Product</Button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
