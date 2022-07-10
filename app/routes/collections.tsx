import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import Button from "~/components/Button";
import Layout from "~/components/Layout";

type Props = {};

const browseLinks = [
  {
    name: "All Products",
    link: "all-products",
    url: "/collections",
  },
  {
    name: "New Arrivals",
    link: "new-arrivals",
    url: "/collections/new-arrivals",
  },
  {
    name: "Dress",
    link: "dress",
    url: "/collections/dress",
  },
  {
    name: "Jewellery",
    link: "jewellery",
    url: "/collections/jewellery",
  },
];

const Collection = (props: Props) => {
  const [IscollectionMenuOpen, SetIscollectionMenuOpen] = useState(false);

  const collectionsMenuHandler = () => {
    SetIscollectionMenuOpen(!IscollectionMenuOpen);
  };
  return (
    <Layout>
      <div className="md:max-w-7xl md:mx-auto md:py-20 py-8 flex md:justify-between md:items-start justify-center items-center">
        {/*Side panel-laptop view */}
        <div className="hidden md:flex flex-col w-1/4 py-10 px-5 bg-white text-stone-600">
          <div className="w-full border-b-2 border-stone-300 py-1 text-xl">
            BROWSE
          </div>
          <div className="mt-5 text-stone-500">
            {browseLinks.map((item) => (
              <Link to={item.url} key={item.name}>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* Products */}
        <div className="w-3/4 md:w-full md:px-8 p-0">
          <div className="px-4 py-2 flex flex-col md:flex-row items-center justify-between text-stone-600 border-b-2 border-stone-300">
            <p className="text-3xl">INVENTORY</p>
            <div>
              <form>
                <div className="flex items-center">
                  <label htmlFor="sortby-input" className="text-lg">
                    Sort by:
                  </label>
                  <select
                    id="sortby-input"
                    name="size"
                    className="text-base border-2 ml-2 border-black rounded"
                  >
                    <option value="all">ALL</option>
                    <option value="featured">FEATURED</option>
                    <option value="low-to-high">PRICE: LOW TO HIGH</option>
                    <option value="high-to-low">PRICE: HIGH TO LOW </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          {/* mobile-view */}
          <div className="md:hidden w-full mt-5 flex items-center justify-center">
            <Button onClick={collectionsMenuHandler}>Collection Menu</Button>
          </div>
          {IscollectionMenuOpen && (
            <div className="bg-white mt-5 py-5 px-4 rounded">
              <div className="w-full border-b-2 border-stone-300 py-1 text-xl text-center">
                BROWSE
              </div>
              <div className="text-center">
                {browseLinks.map((item) => (
                  <Link to={item.url} key={item.name}>
                    <div onClick={collectionsMenuHandler}>{item.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
