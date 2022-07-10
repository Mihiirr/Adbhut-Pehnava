import { Link } from "@remix-run/react";
import React from "react";
import Button from "./Button";

type Props = {
  title: string;
  height: string;
  width: string;
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    isNew: boolean;
  }[];
};

const ItemContainer: React.FC<Props> = (props) => {
  return (
    <div className="h-auto lg:max-w-7xl mt-6 lg:mt-20 lg:mx-auto flex flex-col items-center">
      <div className="h-10 px-4 lg:px-0 lg:h-20 w-full flex items-end justify-between">
        <div className="h-2/4 w-2/12 lg:w-2/5 border-t-2 border-stone-600"></div>
        <div className="h-full w-7/12 flex items-center justify-center text-base lg:text-xl text-stone-600">
          {props.title}
        </div>
        <div className="h-2/4 w-2/12 lg:w-2/5 border-t-2 border-stone-600"></div>
      </div>
      <div className="w-50 h-8 bg-green-400">
        <Link to="/collections">
          <Button>SHOW ALL PRODUCTS</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-24 gap-y-10 mt-10 text-center">
        {props.product.map((items) => (
          <Link to={items.id} key={items.id}>
            <div className="h-48 w-32 lg:h-96 lg:w-64 flex items-center">
              <img
                src={`${items.image}`}
                height={props.height}
                width={props.width}
                alt="items"
                className="hover:cursor-pointer"
              />
            </div>
            <p className="text-stone-600">{items.name}</p>
            <p className="text-stone-500">₹{items.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
