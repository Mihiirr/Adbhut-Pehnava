import React from "react";
import { json, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import ProductContainer from "~/components/Admin/products/ProductContainer";
import Button from "~/components/Button";
import { getAllProducts } from "~/services/product.server";
import SearchIcon from "~/components/Icons/SearchIcon";

type Props = {};

type LoaderData = {
  allProducts: Array<{
    id: string;
    name: string;
    image: string;
    price: number;
    inStock: number;
    isNew: boolean;
    isFeatured: boolean;
  }>;
  dressProducts: Array<{
    id: string;
    name: string;
    image: string;
    price: number;
    inStock: number;
    isNew: boolean;
    isFeatured: boolean;
  }>;
  jewelleryProducts: Array<{
    id: string;
    name: string;
    image: string;
    price: number;
    inStock: number;
    isNew: boolean;
    isFeatured: boolean;
  }>;
};

export const loader: LoaderFunction = async () => {
  const allProducts = await getAllProducts();

  const dressProducts = allProducts.filter((item) => item.category == "dress");
  const jewelleryProducts = allProducts.filter(
    (item) => item.category == "jewellery"
  );
  const data: LoaderData = {
    allProducts,
    dressProducts,
    jewelleryProducts,
  };
  return json(data);
};

const Products: React.FC<Props> = (props) => {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-end mt-10 px-4">
        <select className="w-40 mr-4 p-1 md:p-2 border-2 rounded">
          <option>All Products</option>
          <option>Recently Added</option>
          <option>Dress</option>
          <option>Jewellery</option>
        </select>
        <input
          placeholder="Search Product"
          className="pl-2 pr-8 py-1 md:py-2 rounded border-2"
        />
        <SearchIcon
          height="24"
          width="24"
          fill="none"
          stroke="black"
          className="absolute mr-2"
        />
      </div>
      <div className="flex flex-col items-center">
        {/* Featured Items */}
        <ProductContainer
          title="PRODUCTS"
          height="379"
          width="252"
          product={data.allProducts}
        />
      </div>
    </div>
  );
};

export default Products;
