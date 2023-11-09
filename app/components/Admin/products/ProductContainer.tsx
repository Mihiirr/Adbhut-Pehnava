import { Link } from "@remix-run/react";
import React from "react";
import Button from "~/components/Button";

type Props = {
  title: string;
  height: string;
  width: string;
  product: {
    id: string;
    name: string;
    category: string;
    imageUrl?: string;
    price: number;
    inStocks: number;
    isFeatured: boolean;
    isNew: boolean;
  }[];
};

const ProductContainer: React.FC<Props> = (props) => {
  return (
    <div className="h-auto w-full lg:max-w-7xl my-6 lg:my-10 lg:mx-auto flex flex-col items-center">
      <div className="h-10 px-4 lg:px-0 lg:h-20 w-full flex items-end justify-between">
        <div className="h-2/4 w-2/12 lg:w-2/5 border-t-2 border-stone-600"></div>
        <div className="h-full w-7/12 flex items-center justify-center text-base lg:text-xl text-stone-600">
          {props.title}
        </div>
        <div className="h-2/4 w-2/12 lg:w-2/5 border-t-2 border-stone-600"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-24 gap-y-10 mt-10 text-center">
        {props.product.map((items) => (
          <div>
            <Link to={`/${items.id}`} key={items.id}>
              <div className="h-48 w-32 lg:h-96 lg:w-64 flex items-center">
                <img
                  src={`${items.imageUrl}`}
                  height={props.height}
                  width={props.width}
                  alt="items"
                  className="hover:cursor-pointer"
                />
              </div>
              <p className="text-stone-600">{items.name}</p>
              <p className="text-stone-500">₹{items.price}</p>
            </Link>
            <Link to={`/admin/products/deleteproduct/${items.id}`}>
              <Button variant="danger">Remove Product</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
