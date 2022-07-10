import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAllProducts } from "~/services/product.server";

type Props = {};

type LoaderData = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  inStock: number;
  isNew: boolean;
  isFeatured: boolean;
}[];

export const loader: LoaderFunction = async ({ params }) => {
  const category = await params.category;
  const AllProducts = await getAllProducts();

  if (category === "dress" || category === "jewellery") {
    const categoryProducts = await AllProducts.filter(
      (item) => item.category === category
    );
    return categoryProducts;
  }
  if (category === "new-arrivals") {
    const newProducts = await AllProducts.filter((item) => item.isNew === true);
    return newProducts;
  }
  return AllProducts;
};

const Category = (props: Props) => {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-x-19 mt-10 text-center">
      {data.map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <div className="flex items-center">
            <img
              src={`${item.image}`}
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
