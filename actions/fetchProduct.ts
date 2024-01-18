"use server";

import { db } from "@/lib/db";

export const fetchProduct = async () => {
  try {
    const products = await db.product.findMany();
    return products;
  } catch (error) {
    return "failed to fetch product";
  }
};
