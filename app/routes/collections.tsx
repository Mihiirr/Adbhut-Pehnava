import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Button from "~/components/Button";
import DownArrowIcon from "~/components/Icons/DownArrowIcon";
import Layout from "~/components/Layout";
import { collectionsMenu } from "~/menus";
import { getAllCategories } from "~/services/notion.server";

export const meta: MetaFunction = () => {
  const description = `Welcome to Fashion World!`;
  return {
    charset: "utf-8",
    title: "Collections - Adbhut Pehnava",
    viewport: "width=device-width,initial-scale=1",
    keywords: "Fashion,World,adbhutpehnava,Shopping",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "mihir",
    "twitter:site": "adbhutpehnava",
    "twitter:title": "Adbhut Pehnava",
    "twitter:description": description,
  };
};

type LoaderData = {}[];

export const loader: LoaderFunction = async () => {
  const categoryLists = await getAllCategories();
  return categoryLists;
};

const Collection = () => {
  const categoryLists = useLoaderData();
  console.log(categoryLists);
  const [IscollectionMenuOpen, SetIscollectionMenuOpen] = useState(false);

  const collectionsMenuHandler = () => {
    SetIscollectionMenuOpen(!IscollectionMenuOpen);
  };
  return (
    <Layout brownTitle="Free shipping for orders over ₹2000">
      <div className="md:max-w-7xl md:mx-auto md:py-20 py-8 flex md:justify-between md:items-start justify-center items-center">
        {/*Side panel-laptop view */}
        <div className="hidden md:flex flex-col w-1/4 py-10 px-5 bg-white text-stone-600">
          <div className="w-full border-b-2 border-stone-300 py-1 text-xl">
            BROWSE
          </div>
          <div className="mt-5 text-stone-500">
            <Link to="all-products">
              <p>ALL PRODUCTS</p>
            </Link>
            <Link to="new-arrivals">
              <p>NEW ARRIVALS</p>
            </Link>
            {categoryLists.map((item: any) => (
              <Link to={item} key={item}>
                <p>{item.toUpperCase()}</p>
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
                    className="text-base border-2 ml-2 rounded"
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
            <Button onClick={collectionsMenuHandler}>
              Collection Menu{" "}
              <DownArrowIcon
                className="ml-2 text-end"
                height="12"
                width="12"
                fill="#57534E"
              />
            </Button>
          </div>
          {IscollectionMenuOpen && (
            <div className="bg-white mt-5 py-5 px-4 rounded">
              <div className="w-full border-b-2 border-stone-300 py-1 text-xl text-center">
                BROWSE
              </div>
              <div className="text-center">
                {collectionsMenu.map((item) => (
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
