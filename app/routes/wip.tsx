import { Link } from "@remix-run/react";
import Button from "~/components/Button";

type Props = {};

const Wip = (props: Props) => {
  return (
    <div className="h-screen flex flex-col md:items-center justify-center p-20 bg-stone-50">
      <div className="flex flex-col md:flex-row text-3xl lg:text-5xl">
        <p className="text-stone-600">YOU CAUGHT US!</p>
        <p className="hidden text-stone-300 lg:ml-6">|</p>
        <div className="md:ml-6">
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
