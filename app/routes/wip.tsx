import { Link } from "@remix-run/react";
import Button from "~/components/Button";

type Props = {};

const Wip = (props: Props) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-stone-50">
      <div className="h-30 md:w-7/12 md:px-5 flex flex-col md:flex-row text-3xl lg:text-5xl">
        <div className="h-full md:w-3/6 flex items-center justify-center md:border-r-2 md:border-stone-300 text-stone-600">
          <strong>YOU CAUGHT US!</strong>
        </div>
        <div className="h-full md:w-3/6 flex flex-col items-center justify-center">
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
