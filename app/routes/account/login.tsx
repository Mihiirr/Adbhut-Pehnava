import { Link } from "@remix-run/react";
import Button from "~/components/Button";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-20 bg-stone-50">
      <div className="flex text-5xl">
        <p className="text-stone-600">YOU CAUGHT US!</p>
        <p className="text-stone-300 ml-6">|</p>
        <div className=" ml-6">
          <p>Work in progress</p>
          <p className="text-lg text-stone-600 mt-2">
            Please check the page again after some time.
          </p>
        </div>
      </div>
      <Link to="/">
        <div className="w-40 mt-5">
          <Button variant="secondary">Home Page</Button>
        </div>
      </Link>
    </div>
  );
};

export default Login;
