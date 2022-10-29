import React from "react";

type Props = {
  pendingDelivery: {
    fullName: string;
    contact: string;
    orderItems: string;
    shippingAddress: string;
    paymentMethod: string;
    totalPrice: string;
  }[];
  title: string;
};

const DeliveryContainer = (props: Props) => {
  return (
    <div className="bg-white p-4 mt-20 first:mt-20">
      <p className="text-xl md:text-3xl">{props.title}</p>
      <table className="w-full mt-6 border-collapse">
        <tbody className="text-left">
          <tr className="[&>th]:border-stone-100 [&>th]:border-r-2 md:[&>th]:border-none [&>th]:pl-2 h-16 text-sm md:text-md bg-stone-400 md:bg-white">
            <th className="pl-2">Full Name</th>
            <th>Contact</th>
            <th>Order Items</th>
            <th>Shipping Address</th>
            <th>Payment Method</th>
            <th>Total Price</th>
          </tr>
          {props.pendingDelivery.map((item) => (
            <tr
              key={item.fullName}
              className="[&>td]:border-stone-400 [&>td]:border-r-2 md:[&>td]:border-none [&>td]:pl-2 h-16 even:bg-stone-100 text-sm md:text-md"
            >
              <td>{item.fullName}</td>
              <td>{item.contact}</td>
              <td>{item.orderItems}</td>
              <td>{item.shippingAddress}</td>
              <td>{item.paymentMethod}</td>
              <td>₹{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryContainer;
