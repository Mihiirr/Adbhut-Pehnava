import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ItemContainer from "~/components/ItemContainer";
import Layout from "~/components/Layout";
import { getFeaturedProducts, getNewProducts } from "~/services/notion.server";

type LoaderData = {
  featuredProducts: Array<{
    id: string;
    name: string;
    category: string;
    imageUrl?: string;
    price: number;
    inStocks: number;
    isFeatured: boolean;
    isNew: boolean;
  }>;
  newProducts: Array<{
    id: string;
    name: string;
    category: string;
    imageUrl?: string;
    price: number;
    inStocks: number;
    isFeatured: boolean;
    isNew: boolean;
  }>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const featuredProducts = await getFeaturedProducts();
  const newProducts = await getNewProducts();
  const data: LoaderData = {
    featuredProducts,
    newProducts,
  };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  console.log(data.featuredProducts);
  return (
    <Layout brownTitle="Free shipping for orders over ₹2000">
      {/* Corousel */}
      <div className="flex items-center justify-center">
        <img
          src="/corousel_watch.webp"
          height="510"
          width="1520"
          alt="corousel"
        />
      </div>

      {/* Featured Items */}
      <ItemContainer
        title="FEATURED PRODUCTS"
        height="379"
        width="252"
        product={data.featuredProducts}
      />
      {/* Newly Arrivals */}
      <ItemContainer
        title="NEWLY ARRIVALS"
        height="379"
        width="252"
        product={data.newProducts}
      />
    </Layout>
  );
}
