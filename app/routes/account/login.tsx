import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Button from "~/components/Button";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return {
    title: `Login - Glammygirl`,
  };
};

type Props = {};

const Login = (props: Props) => {
  return (
    <Layout brownTitle="Free shipping for orders over ₹2000">
      <div className="h-full w-full p-5 md:p-10 flex items-center justify-center">
        <div className="lg:w-4/12 md:w-8/12 w-full p-5 flex flex-col items-center justify-center">
          <p className="text-3xl text-stone-600">LOGIN</p>
          <form className=" w-full mt-8">
            <div className="flex flex-col justify-between">
              <label className="text-sm text-stone-500">USERNAME</label>
              <input
                type="text"
                className="h-8 border-2 border-stone-400 rounded px-2"
              />
            </div>
            <div className="flex flex-col justify-between mt-5">
              <label className="text-sm text-stone-500">PASSWORD</label>
              <input
                type="password"
                className="h-8 border-2 border-stone-400 rounded px-2"
              />
            </div>
            <div className="mt-5">
              <Button variant="secondary">LOGIN</Button>
              <p className="mt-2">
                Dont have an account?{" "}
                <span className="underline">
                  <Link to="/account/register">Create account</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
