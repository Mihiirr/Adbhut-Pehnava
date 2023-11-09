import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useOutletContext } from "@remix-run/react";
import { getProducts } from "~/services/notion.server";

type LoaderData = {
  id: string;
  name: string;
  category: string;
  imageUrl?: string;
  price: number;
  inStocks: number;
  isFeatured: boolean;
  isNew: boolean;
}[];

export const loader: LoaderFunction = async ({ params }) => {
  const category = await params.category;
  const allProducts = await getProducts();
  let filteredProducts = allProducts;

  // Filter by category if provided
  if (category === "all") {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter((item) => item.category === category);
  }
  return filteredProducts;
};

const Category = () => {
  const data = useLoaderData<LoaderData>();
  const Target = useOutletContext();
  // Sort products based on the 'sort' parameter
  switch (Target) {
    case "all":
      data;
      break;
    case "featured":
      data.filter((item) => item.isFeatured === true);
      break;
    case "low-to-high":
      data.sort((a, b) => a.price - b.price);
      break;
    case "high-to-low":
      data.sort((a, b) => b.price - a.price);
      break;
    // Add more sorting options as needed
  }
  return (
    <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-x-19 mt-10 text-center">
      {data.map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <div className="flex items-center">
            <img
              src={`${item.imageUrl}`}
              height="510"
              width="1520"
              alt="items"
              className="hover:cursor-pointer"
            />
          </div>
          <p className="text-stone-600">{item.name}</p>
          <p className="text-stone-500">₹{item.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Category;
