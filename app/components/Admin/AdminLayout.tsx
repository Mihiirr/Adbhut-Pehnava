import { Link } from "@remix-run/react";
import React from "react";
import Logo from "../Logo";
import AdminSideBarMobile from "./AdminSideBarMobile";

type Props = {
  children: React.ReactNode;
};

const HeaderLinks = [
  {
    name: "DASHBOARD",
    href: "/admin/dashboard",
  },
  {
    name: "ORDERS",
    href: "/admin/orders",
  },
  {
    name: "CLIENTS",
    href: "/admin/client",
  },
  {
    name: "PRODUCTS",
    href: "/admin/products",
  },
];

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-10">
      {/* Header */}
      <div className="h-16 lg:h-20 w-full lg:max-w-7xl lg:mx-auto border-b-2 text-stone-600 border-stone-300 flex items-center justify-between px-4 lg:px-0">
        <Logo size="large" />

        {/* Mobile view */}
        <div className="md:hidden">
          <AdminSideBarMobile HeaderLinks={HeaderLinks} />
        </div>

        {/* Laptop view */}
        <div
          id="dashboard"
          className="hidden md:flex ml-12 items-center justify-between text-lg target:bg-blue-300"
        >
          {HeaderLinks.map((item) => (
            <Link
              to={item.href}
              key={item.name}
              className="mr-6 hover:underline hover:cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Children */}
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
