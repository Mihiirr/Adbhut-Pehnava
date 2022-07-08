import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ItemContainer from "~/components/ItemContainer";
import Layout from "~/components/Layout";
import { getAllFeaturedProducts } from "~/services/product.server";

type LoaderData = {
  featuredProducts: Array<{
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
  const featuredProducts = await getAllFeaturedProducts();
  const data: LoaderData = {
    featuredProducts,
  };
  return json(data);
};

export default function Index() {
  const data = useLoaderData();
  return (
    <Layout>
      {/* Corousel */}
      <div>
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
    </Layout>
  );
}
