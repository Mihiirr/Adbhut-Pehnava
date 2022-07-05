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
      id: "2",
      image: "/dress2.jpg",
      isNew: true,
    },
    {
      id: "3",
      image: "/dress3.jpg",
      isNew: false,
    },
  ];

  const FeaturedJewelleryProducts = [
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
    {
      id: "6",
      image: "/JWJSET3.webp",
      isNew: false,
    },
  ];
  return (
    <Layout>
      {/* Corousel */}
      <div className="max-w-7xl mx-auto h-96 mt-20 bg-stone-300">
        <img
          src="/corousel_watch.webp"
          height="384"
          width="1280"
          alt="corousel"
        />
      </div>

      {/* Featured Items */}
      <ItemContainer
        title="Featured Items"
        height="379"
        width="252"
        product={FeaturedDressProducts}
      />

      {/* Jwellery Set */}
      <ItemContainer
        title="Jewellery Set"
        height="256"
        width="256"
        product={FeaturedJewelleryProducts}
      />
    </Layout>
  );
}
