import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return {
    title: `Shopping cart - Glammygirl`,
  };
};

type Props = {};

const Cart = (props: Props) => {
  return (
    <Layout>
      <div className="h-96 flex flex-col items-center justify-center bg-stone-50">
        <div className="h-full md:w-3/6 md:text-3xl text-2xl text-stone-600 flex flex-col items-center justify-center">
          <p>Your cart is currently empty.</p>
          <p className="text-lg text-stone-600 md:mt-2">
            Continue browsing{" "}
            <span className="underline">
              <Link to="/collections">here</Link>
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
