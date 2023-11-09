import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useCatch, useLoaderData, useParams } from "@remix-run/react";
import Layout from "~/components/Layout";
import Button from "~/components/Button";
import { getProductById } from "~/services/notion.server";

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data) {
    return {
      title: "No product",
      description: "No product found",
    };
  }
  return {
    title: `${data.product.name} - Adbhut Pehnava`,
    description: `Enjoy the "${data.product.name}" joke and much more`,
  };
};

type LoaderData = {
  product: {
    id: string;
    name: string;
    category: string;
    imageUrl?: string;
    price: number;
    inStocks: number;
    isFeatured: boolean;
    isNew: boolean;
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const productId = await params.productid;
  if (!productId) {
    throw new Response("Product Not found.", {
      status: 404,
    });
  }
  const product = await getProductById(productId);
  if (!product) {
    throw new Response("Product Not found.", {
      status: 404,
    });
  }
  const data: LoaderData = {
    product,
  };
  return json(data);
};

const Productdetail = () => {
  const data = useLoaderData();
  return (
    <Layout brownTitle="Free shipping for orders over ₹2000">
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-start">
          {/* Image Carousel/Gallery */}
          <div className="lg:w-1/3 w-full p-4 flex flex-col items-center">
            <img
              src={data.product.imageUrl}
              className="w-full h-auto mb-4 shadow-lg"
            />
            {/* Additional images can be displayed here */}
          </div>
          {/* Product Info and Details */}
          <div className="lg:w-1/3 w-full p-4">
            <div className="text-4xl mb-2 text-[#5c3b28]">
              {data.product.name}
            </div>
            <div className="text-lg text-gray-500 mb-4">
              Rs. {data.product.price}
            </div>
            <div className="mb-6 text-gray-600">
              Category: {data.product.category}
            </div>
            {/* Size Selection */}
            {/* ... [Size selection form remains the same] */}
            <Link to="/wip" className="text-white py-2 px-4 rounded">
              <Button type="submit" variant="secondary">
                Add to cart
              </Button>
            </Link>
            <Link to="/wip" className="text-white py-2 px-4 rounded">
              <Button type="submit" variant="secondary">
                Add to Favourite
              </Button>
            </Link>
            {/* Product Description and Customer Reviews */}
            <div className="mt-6">
              {/* Product highlights and description */}
              {/* Customer reviews section */}
            </div>
          </div>
        </div>
        {/* Related Products Section */}
        <div className="mt-10">
          {/* Display related products or recommendations */}
        </div>
      </div>
    </Layout>
  );
};

export default Productdetail;

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  switch (caught.status) {
    case 400: {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-20 bg-stone-50">
          <p className="text-5xl mb-6">
            What you're trying to do is not allowed.
          </p>
          <Link
            to="/"
            className="h-10 w-36 flex items-center justify-center text-lg border-2 border-gray-200 hover:bg-stone-100"
          >
            Home Page
          </Link>
        </div>
      );
    }
    case 404: {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-20 bg-stone-50">
          <p className="text-5xl mb-6">
            Product Not Found with id: {params.productid}?
          </p>
          <Link
            to="/"
            className="h-10 w-36 flex items-center justify-center text-lg border-2 border-gray-200 hover:bg-stone-100"
          >
            Home Page
          </Link>
        </div>
      );
    }
    case 401: {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-20 bg-stone-50">
          <p className="text-5xl mb-6">
            Sorry, but {params.productid} is not your product.
          </p>
          <Link
            to="/"
            className="h-10 w-36 flex items-center justify-center text-lg border-2 border-gray-200 hover:bg-stone-100"
          >
            Home Page
          </Link>
        </div>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  const { productid } = useParams();
  return (
    <div className="h-screen flex flex-col items-center justify-center p-20 bg-stone-50">
      <p className="text-5xl mb-6">
        There was an error loading product by the id ${productid}. Sorry.
      </p>
      <Link
        to="/"
        className="h-10 w-36 flex items-center justify-center text-lg border-2 border-gray-200 hover:bg-stone-100"
      >
        Home Page
      </Link>
    </div>
  );
}
