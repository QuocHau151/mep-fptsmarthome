"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

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

  const [selectedOptions, setSelectedOptions] = useState({
    id: "PPLBS001",
  });

  const handleChange = (event: any) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.value,
    });
  };

  const option = products.find((item) => item.id === selectedOptions.id);

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };
  console.log(products);
  return (
    <div className="">
      <div className="text-center flex flex-col py-[100px] bg-slate-100">
        <div className="container">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Đèn thông minh tại FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px]">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              <Image
                src={option?.image ?? ""}
                width={1000}
                height={500}
                alt=""
              />
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center pt-[50px] ">
                <h1 className="text-[27px] font-semibold">
                  {option?.name ?? ""}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 ">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id} </h4>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold ">{option?.price} VNĐ</p>
                <p className="-mt-4 text-[12px]">(Chưa bao gồm VAT)</p>
              </div>
              <div className="py-4">
                <p className="text-[18px] text-slate-600 font-medium mb-4 px-6">
                  Thời gian bảo hành sản phẩm là 24 tháng tính từ ngày mua hàng.
                </p>
                <div className="flex items-center justify-center gap-2 w-full">
                  <Button
                    onClick={() => option && handleAddToCart(option)}
                    className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white"
                  >
                    <Link href="/checkout"> Mua ngay</Link>
                  </Button>
                  <Button
                    onClick={() => option && handleAddToCart(option)}
                    className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px] ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            FPT Play Box S
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/google-assistance-device.png"
              width={300}
              height={300}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>CPU</p>
                <p>Amlogic 905X3</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>GPU</p>
                <p>Mali G31 MP2</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>Wireless</p>
                <p>AP6398S</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>BLUETOOTH</p>
                <p>5.0</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2">
                <p>RAM</p>
                <p>02 GB</p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2">
                <p>ROM</p>
                <p>16 GB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
