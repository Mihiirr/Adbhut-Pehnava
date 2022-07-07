import { Link } from "@remix-run/react";
import Button from "~/components/Button";

type Props = {};

const Wip = (props: Props) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-stone-50">
      <div className="h-30 md:w-3/4 flex flex-col md:flex-row items-center justify-center text-3xl lg:text-5xl">
        <p className="text-stone-600">YOU CAUGHT US!</p>
        <div className="hidden md:flex h-full text-stone-300 lg:ml-6 border-x-2 border-stone-300"></div>
        <div className="text-center md:ml-6">
          <p>Work in progress</p>
          <p className="text-lg text-stone-600 md:mt-2">
            Please check the page again after some time.
          </p>
        </div>
      </div>
      <Link to="/">
        <div className="w-32 lg:w-40 mt-2 lg:mt-5">
          <Button variant="secondary">Home Page</Button>
        </div>
      </Link>
    </div>
  );
};

export default Wip;
