// import { json, LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
import StaticsCard from "~/components/Admin/dashboard/StaticsCard";

// type LoaderData = {
//   totalStocks: number;
//   totalVarietyProduct: number;
//   totalUsers: number;
//   usersGroupBy: Array<{ role: string; _count: { id: number } }>;
//   netAmountOfTotalStock: number;
// };

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center justify-center mb-10 text-2xl md:text-3xl text-stone-600">
        <p>DASHBOARD</p>
      </div>
      <div className="mb-20 flex flex-wrap items-center justify-center px-2">
        <StaticsCard
          title="Total Sale"
          amount="₹2000"
          description="10 total sales"
        />
        <StaticsCard
          title="Total Orders"
          amount="6"
          description={`3-Delivered, 3-Pending`}
        />
        <StaticsCard
          title="Total User"
          amount={`2`}
          description={`1-ADMIN, 1-USER `}
        />
        <StaticsCard
          title="Total Products"
          amount={`10`}
          description={`Net amount ₹12000`}
        />
        <StaticsCard
          title="Total Variety"
          amount={`3`}
          description="10 total sales"
        />
        <StaticsCard
          title="Total Sale"
          amount="₹2000"
          description="10 total sales"
        />
        <StaticsCard
          title="Total Sale"
          amount="₹2000"
          description="10 total sales"
        />
      </div>
    </div>
  );
};

export default Dashboard;