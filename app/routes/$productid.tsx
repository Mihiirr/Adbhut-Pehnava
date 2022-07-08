import { MetaFunction } from "@remix-run/node";
import { Link, useCatch, useParams } from "@remix-run/react";
import Layout from "~/components/Layout";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return {
    title: `prodID`,
    description: `Enjoy the ProdId joke and much more`,
  };
};

const Productdetail = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center bg-stone-100">
        <div className="h-full lg:h-4/5 w-full flex justify-center">
          <img src={`/dress1.jpg`} height="600" width="400" />
        </div>
        <div className="h-full w-full lg:w-4/5 bg-white p-10 flex flex-col items-center rounded-t-[70px] lg:rounded-t-3xl">
          <div className="w-full lg:w-2/5 lg:text-3xl text-2xl">
            <div className="flex w-full justify-between">
              <p>Peace White</p>
              <p>Rs. 600</p>
            </div>
            <p className="text-xl text-gray-500 mb-5">peace white</p>

            <div className="mb-6 flex items-center">
              <label htmlFor="size-input" className="text-3xl">
                Size:
              </label>
              <select
                id="size-input"
                name="size"
                className="text-xl ml-2 border-2 border-black rounded"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <Link to="/wip">
              <Button type="submit" variant="secondary">
                Add to cart
              </Button>
            </Link>
          </div>
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
