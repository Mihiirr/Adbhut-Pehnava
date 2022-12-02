import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const passwordHash = await bcrypt.hash("User@123", 10);
  await Promise.all(
    getAllUsers().map((user) => {
      return db.user.create({
        data: {
          username: user.username,
          role: user.role,
          password: passwordHash,
        },
      });
    })
  );
  await Promise.all(
    getAllProducts().map((product) => {
      return db.product.create({
        data: {
          name: product.name,
          category: product.category,
          image: product.image,
          price: product.price,
          inStock: product.inStock,
          isNew: product.isNew,
          isFeatured: product.isFeatured,
        },
      });
    })
  );
}

seed();

enum userRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export function getAllUsers() {
  return [
    {
      username: "Tanvi",
      role: userRole.USER,
    },
    {
      username: "Mihir",
      role: userRole.ADMIN,
    },
    {
      username: "Kishan",
      role: userRole.USER,
    },
  ];
}

export function getAllProducts() {
  return [
    {
      name: "Kurti",
      category: "dress",
      image: "/dress1.jpg",
      price: 799,
      inStock: 10,
      isNew: false,
      isFeatured: true,
    },
    {
      name: "Plajo",
      category: "dress",
      image: "/dress2.jpg",
      price: 700,
      inStock: 19,
      isNew: true,
      isFeatured: true,
    },
    {
      name: "Surti",
      category: "dress",
      image: "/dress3.jpg",
      price: 999,
      inStock: 7,
      isNew: false,
      isFeatured: true,
    },
    {
      name: "Patyala",
      category: "dress",
      image: "/dress4.jpg",
      price: 1299,
      inStock: 5,
      isNew: true,
      isFeatured: true,
    },
    {
      name: "Ring",
      category: "jewellery",
      image: "/JWJSET1.webp",
      price: 1800,
      inStock: 10,
      isNew: false,
      isFeatured: true,
    },
    {
      name: "Jewels",
      category: "jewellery",
      image: "/JWJSET2.webp",
      price: 900,
      inStock: 19,
      isNew: true,
      isFeatured: true,
    },
    {
      name: "Necklash",
      category: "jewellery",
      image: "/JWJSET3.webp",
      price: 700,
      inStock: 7,
      isNew: false,
      isFeatured: true,
    },
    {
      name: "Ring Set",
      category: "jewellery",
      image: "/JWJSET4.webp",
      price: 1299,
      inStock: 5,
      isNew: true,
      isFeatured: true,
    },
  ];
}
