import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const databaseId = "7d67d02a69cb46969c37d40cb56c0a76";

interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl?: string;
  price: number;
  inStocks: number;
  isFeatured: boolean;
  isNew: boolean;
}

// Get all products
export async function getProducts(): Promise<Product[]> {
  const response = await notion.databases.query({ database_id: databaseId });

  return response.results.map((page: any) => {
    // Safely extract properties
    const name = page.properties.Name?.title[0]?.plain_text ?? "";
    const category = page.properties.Category?.select?.name ?? "";

    // For number properties, check if they exist and are of type 'number'
    const price =
      page.properties.Price?.type === "number"
        ? page.properties.Price.number
        : 0;
    const inStocks =
      page.properties.InStocks?.type === "number"
        ? page.properties.InStocks.number
        : 0;

    // For checkbox properties, check if they exist and are of type 'checkbox'
    const isFeatured =
      page.properties.IsFeatured?.type === "checkbox"
        ? page.properties.IsFeatured.checkbox
        : false;
    const isNew =
      page.properties.IsNew?.type === "checkbox"
        ? page.properties.IsNew.checkbox
        : false;

    let imageUrl = "";
    if (page.properties.Image && page.properties.Image.files) {
      const firstImage = page.properties.Image.files[0];
      if (firstImage.type === "file") {
        imageUrl = firstImage.file.url;
      } else if (firstImage.type === "external") {
        imageUrl = firstImage.external.url;
      }
    }

    return {
      id: page.id,
      name,
      category,
      imageUrl,
      price,
      inStocks,
      isFeatured,
      isNew,
    };
  });
}

// Get a product by its ID.
export async function getProductById(pageId: string): Promise<Product | null> {
  try {
    const page = (await notion.pages.retrieve({ page_id: pageId })) as any;

    // Check if properties exist
    if (!page.properties) {
      return null;
    }

    const props = page.properties;

    // Extracting Name
    const name =
      props.Name && props.Name.title ? props.Name.title[0].text.content : "";
    const category = props.Category?.select?.name ?? "";
    const price = props.Price?.type === "number" ? props.Price.number : 0;
    const inStocks =
      props.InStocks?.type === "number" ? props.InStocks.number : 0;
    const isFeatured =
      props.IsFeatured?.type === "checkbox" ? props.IsFeatured.checkbox : false;
    const isNew =
      props.IsNew?.type === "checkbox" ? props.IsNew.checkbox : false;

    let imageUrl = "";
    if (
      props.Image &&
      props.Image.type === "files" &&
      props.Image.files.length > 0
    ) {
      const file = props.Image.files[0];
      if (file.type === "file") {
        imageUrl = file.file.url;
      } else if (file.type === "external") {
        imageUrl = file.external.url;
      }
    }

    return {
      id: page.id,
      name,
      category,
      imageUrl,
      price,
      inStocks,
      isFeatured,
      isNew,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Get all featured products.
export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "IsFeatured",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((page: any) => {
    // Assuming page is of the correct type with properties
    const props = page.properties;

    // Extract properties similar to previous examples
    const name = props.Name?.title[0]?.plain_text ?? "";
    const category = props.Category?.select?.name ?? "";
    const price = props.Price?.number ?? 0;
    const inStocks = props.InStock?.number ?? 0;
    const isFeatured = props.IsFeatured?.checkbox ?? false;
    const isNew = props.IsNew?.checkbox ?? false;
    let imageUrl = "";
    if (
      props.Image &&
      props.Image.type === "files" &&
      props.Image.files.length > 0
    ) {
      const file = props.Image.files[0];
      if (file.type === "file") {
        imageUrl = file.file.url;
      } else if (file.type === "external") {
        imageUrl = file.external.url;
      }
    }

    return {
      id: page.id,
      name,
      category,
      price,
      imageUrl,
      inStocks,
      isFeatured,
      isNew,
    };
  });
}

// Get all featured products.
export async function getNewProducts(): Promise<Product[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "IsNew",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((page: any) => {
    // Assuming page is of the correct type with properties
    const props = page.properties;

    // Extract properties similar to previous examples
    const name = props.Name?.title[0]?.plain_text ?? "";
    const category = props.Category?.select?.name ?? "";
    const price = props.Price?.number ?? 0;
    const inStocks = props.InStock?.number ?? 0;
    const isFeatured = props.IsFeatured?.checkbox ?? false;
    const isNew = props.IsNew?.checkbox ?? false;
    let imageUrl = "";
    if (
      props.Image &&
      props.Image.type === "files" &&
      props.Image.files.length > 0
    ) {
      const file = props.Image.files[0];
      if (file.type === "file") {
        imageUrl = file.file.url;
      } else if (file.type === "external") {
        imageUrl = file.external.url;
      }
    }

    return {
      id: page.id,
      name,
      category,
      price,
      imageUrl,
      inStocks,
      isFeatured,
      isNew,
    };
  });
}

// Get all category list.
export async function getAllCategories(): Promise<string[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const categories = new Set<string>();

  response.results.forEach((page: any) => {
    if (
      "properties" in page &&
      page.properties.Category &&
      page.properties.Category.select
    ) {
      categories.add(page.properties.Category.select.name);
    }
  });

  return Array.from(categories);
}

// Counts the total products
export async function countTotalProducts(): Promise<number> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results.length;
  } catch (error) {
    console.error("Error counting products:", error);
    return 0; // Return 0 or handle the error as appropriate
  }
}

export async function sumProductPrices(): Promise<number> {
  let totalSum = 0;
  let hasMore = true;
  let startCursor: string | undefined = undefined;

  try {
    while (hasMore) {
      const response = await notion.databases.query({
        database_id: databaseId,
        start_cursor: startCursor,
      });

      response.results.forEach((page: any) => {
        if (page.properties.Price && page.properties.Price.type === "number") {
          totalSum += page.properties.Price.number || 0;
        }
      });

      hasMore = response.has_more;
      startCursor = response.next_cursor || undefined;
    }

    return totalSum;
  } catch (error) {
    console.error("Error summing product prices:", error);
    return 0; // Return 0 or handle the error as appropriate
  }
}
