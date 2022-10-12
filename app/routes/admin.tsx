import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import React from "react";
import AdminLayout from "~/components/Admin/AdminLayout";

type Props = {};

const Admin: React.FC<Props> = (props) => {
  return (
    <AdminLayout>
      <div className="bg-stone-50">
        <Outlet />
      </div>
    </AdminLayout>
  );
};

export default Admin;

export const meta: MetaFunction = () => {
  return {
    title: "Admin Panel",
    description: `Wellcome to the admin panel of Fashion World`,
  };
};
