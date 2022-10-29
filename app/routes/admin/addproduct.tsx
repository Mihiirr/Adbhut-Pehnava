import React from "react";
import { Form } from "@remix-run/react";
import Button from "~/components/Button";

type Props = {};

const AddProducts: React.FC<Props> = (props) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <p className="text-3xl text-stone-600">ADD PRODUCT</p>
      <Form
        method="post"
        className="py-4 max-w-7xl mx-auto h-auto flex flex-col"
        encType="multipart/form-data"
      >
        <div className="flex flex-col h-auto py-1 justify-between mb-6">
          <label
            htmlFor="name-input"
            className="text-sm md:text-xl text-stone-500"
          >
            Name
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            className="h-8 md:h-10 border-2 border-stone-400 px-4 rounded"
            autoFocus
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="category-input"
            className="text-sm md:text-xl text-stone-500"
          >
            Choose a Category:
          </label>
          <select
            id="category-input"
            name="category"
            className="ml-4 h-8 md:h-10 w-24 border-2 border-stone-400 rounded"
          >
            <option value="dress">Dress</option>
            <option value="jewellery">Jewellery</option>
          </select>
        </div>

        <div className="flex flex-col h-auto py-1 justify-between mb-6">
          <label
            htmlFor="price-input"
            className="text-sm md:text-xl text-stone-500"
          >
            Price
          </label>
          <input
            id="price-input"
            name="price"
            type="number"
            className="h-8 md:h-10 w-full border-2 border-stone-400 px-4 rounded"
          />
        </div>
        <div className="flex flex-col h-auto py-1 justify-between mb-6">
          <label
            htmlFor="instock-input"
            className="text-sm md:text-xl text-stone-500"
          >
            Instock
          </label>
          <input
            id="instock-input"
            name="instock"
            type="number"
            className="h-8 md:h-10 w-full border-2 border-stone-400 px-4 rounded"
            placeholder="0"
            defaultValue={0}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center h-auto w-2/6 mb-4">
            <label
              htmlFor="isnew-input"
              className="text-sm md:text-lg mr-3 text-stone-500"
            >
              IsNew
            </label>
            <input
              id="isnew-input"
              name="isnew"
              type="checkbox"
              className="md:h-6 md:w-6"
            />
          </div>
          <div className="flex items-center h-auto w-2/6 mb-4">
            <label
              htmlFor="isfeatured-input"
              className="text-sm md:text-lg mr-3 text-stone-500"
            >
              IsFeature
            </label>
            <input
              id="isfeatured-input"
              name="isfeatured"
              type="checkbox"
              className="md:h-6 md:w-6"
            />
          </div>
        </div>

        <div className="flex flex-col h-auto w-5/6 py-1 justify-between mb-6">
          <label
            htmlFor="image-input"
            className="text-sm md:text-xl text-stone-500"
          >
            Image
          </label>
          <input
            id="image-input"
            name="image"
            type="file"
            accept="image/png, image/jpg, image/webp"
            className="h-10 w-full px-4 mt-2"
          />
        </div>
        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProducts;
