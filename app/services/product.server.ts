export function getAllProducts() {
  return [
    {
      id: "1",
      name: "White-dress",
      category: "dress",
      image: "/dress1.jpg",
      price: 799,
      inStock: 10,
      isNew: false,
      isFeatured: true,
    },
    {
      id: "2",
      name: "Plajo",
      category: "dress",
      image: "/dress2.jpg",
      price: 700,
      inStock: 19,
      isNew: true,
      isFeatured: false,
    },
    {
      id: "3",
      name: "Black-dress",
      category: "dress",
      image: "/dress3.jpg",
      price: 999,
      inStock: 7,
      isNew: false,
      isFeatured: true,
    },
    {
      id: "4",
      name: "Patyala",
      category: "dress",
      image: "/dress4.jpg",
      price: 1299,
      inStock: 5,
      isNew: true,
      isFeatured: false,
    },
    {
      id: "5",
      name: "Ring",
      category: "jewellery",
      image: "/JWJSET1.webp",
      price: 1800,
      inStock: 10,
      isNew: false,
      isFeatured: true,
    },
    {
      id: "6",
      name: "Jewels",
      category: "jewellery",
      image: "/JWJSET2.webp",
      price: 900,
      inStock: 19,
      isNew: true,
      isFeatured: false,
    },
    {
      id: "7",
      name: "Necklash",
      category: "jewellery",
      image: "/JWJSET3.webp",
      price: 700,
      inStock: 7,
      isNew: false,
      isFeatured: true,
    },
    {
      id: "8",
      name: "Ring Set",
      category: "jewellery",
      image: "/JWJSET4.webp",
      price: 1299,
      inStock: 5,
      isNew: true,
      isFeatured: false,
    },
  ];
}

export async function getAllFeaturedProducts() {
  const product = await getAllProducts();
  const featuredProduct = await product.filter(
    (item) => item.isFeatured === true
  );
  return featuredProduct;
}

export async function getUniqueProducts(id: string) {
  const product = await getAllProducts();
  const featuredProduct = await product.find((item) => item.id === id);
  return featuredProduct;
}

export async function getUnioqueProducts(id: string) {
  const product = await getAllProducts();
  const featuredProduct = await product.find((item) => item.id === id);
  return featuredProduct;
}
