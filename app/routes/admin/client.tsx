import React from "react";

type Props = {};

const Users = [
  {
    fullName: "Mihir Patel",
    contact: "9737942543",
    Address:
      "Ratnaraj residency near kh-0 circle B/H siddhraj zori, Sargasan, Gandhinagar",
    orders: 2,
  },
  {
    fullName: "Kishan Patel",
    contact: "8866817172",
    Address: "	Imperia heights near gh-2 circle B/H antilia, Sargasan, Vadodara",
    orders: 0,
  },
  {
    fullName: "Ashu Patel",
    contact: "8989337747",
    Address: "	Imperia heights sector-21 B/H mannat, Sargasan, Mumbai",
    orders: 3,
  },
];

const Client: React.FC<Props> = (props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center mt-10 text-2xl md:text-3xl text-stone-600">
        <p>CLIENTS</p>
      </div>
      <div className="bg-white p-4 mt-10 first:mt-20">
        <p className="text-xl md:text-3xl">Users</p>
        <table className="w-full mt-6 border-collapse">
          <tbody className="text-left">
            <tr className="[&>th]:border-stone-100 [&>th]:border-r-2 md:[&>th]:border-none [&>th]:pl-2 h-16 text-sm md:text-md bg-stone-400 md:bg-white">
              <th className="pl-2">Full Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Orders</th>
            </tr>
            {Users.map((item) => (
              <tr
                key={item.fullName}
                className="[&>td]:border-stone-400 [&>td]:border-r-2 md:[&>td]:border-none [&>td]:pl-2 h-16 even:bg-stone-100 text-sm md:text-md"
              >
                <td>{item.fullName}</td>
                <td>{item.contact}</td>
                <td>{item.Address}</td>
                <td>{item.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Client;
