"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchProduct } from "@/actions/fetchProduct";

export default function Page() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const fetchData = async () => {
    try {
      const res = await fetchProduct();
      setProducts(res as unknown as ProductData[]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-black w-full h-min p-10">
      <div className="bg-gray-900 h-min w-full rounded-2xl p-6">
        <div className="text-white font-semibold mb-6 flex items-center justify-between">
          <div>All Products</div>
          <Button>
            <Link href="/admin/product/add-product">Add Product</Link>
          </Button>
        </div>
        <Table className="">
          <TableCaption>A list of Products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="">Image</TableHead>
              <TableHead className="">Type</TableHead>
              <TableHead className="">Color</TableHead>
              <TableHead className="">Button</TableHead>
              <TableHead className="">Power</TableHead>
              <TableHead className="">State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="">{product.image}</TableCell>
                <TableCell className="">{product.type}</TableCell>
                <TableCell className="">{product.color}</TableCell>
                <TableCell className="">{product.button}</TableCell>
                <TableCell className="">{product.power}</TableCell>
                <TableCell className=" flex items-center gap-2">
                  <Button className=" bg-green-600 h-[20px] w-[50px] text-[12px]">
                    View
                  </Button>
                  <Button className="bg-red-600 h-[20px] w-[50px] text-[12px]">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={9}>Total</TableCell>
              <TableCell className="text-right ">10</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
