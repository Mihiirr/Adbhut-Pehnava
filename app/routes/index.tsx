import ItemContainer from "~/components/ItemContainer";
import Layout from "~/components/Layout";

export default function Index() {
  const FeaturedDressProducts = [
    {
      id: "1",
      image: "/dress1.jpg",
      isNew: true,
    },
    {
      id: "6",
      image: "/JWJSET3.webp",
      isNew: false,
    },
    {
      id: "2",
      image: "/dress2.jpg",
      isNew: true,
    },
    {
      id: "3",
      image: "/dress3.jpg",
      isNew: false,
    },

    {
      id: "4",
      image: "/JWJSET1.webp",
      isNew: true,
    },
    {
      id: "5",
      image: "/JWJSET2.webp",
      isNew: true,
    },
  ];
  return (
    <Layout>
      {/* Corousel */}
      <img
        src="/corousel_watch.webp"
        height="510"
        width="1520"
        alt="corousel"
      />

      {/* Featured Items */}
      <ItemContainer
        title="FEATURED PRODUCTS"
        height="379"
        width="252"
        product={FeaturedDressProducts}
      />
    </Layout>
  );
}
