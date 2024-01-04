import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className=" bg-black w-full h-[112px] ">
      <div className="container flex items-center h-full  ">
        <Link href="/" className="mr-[170px]">
          <Image src="/logofptsh.png" width={125} height={51} alt="" />
        </Link>
        <div className="flex  items-center space-x-2 mr-[40px]">
          <div className=" relative">
            <Input
              className="w-[580px] h-[42px] z-0 text-slate-600 text-sm placeholder:italic placeholder:text-slate-400 placeholder:text-[14px]"
              type="search"
              placeholder="Tìm kiếm sản phẩm Smart Home..."
            />
            <button className="absolute z-10 bg-slate-100 w-[196px] h-[42px] right-0 top-0 rounded-r-[5px] ">
              <div className="flex items-center justify-between px-4">
                <p className="text-slate-600 text-[14px]">Category</p>
                <Image
                  src="/assets/icon/arrow-down.png"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </button>
          </div>

          <Button
            className=" bg-orange-600 text-btn_medium text-white w-[97px] h-[42px]"
            type="submit"
          >
            Search
          </Button>
        </div>
        <div className="flex gap-8">
          <Image
            src="/assets/icon/favorite.png"
            width={24}
            height={24}
            alt=""
          />
          <Image src="/assets/icon/cart.png" width={24} height={24} alt="" />
        </div>
      </div>
    </div>
  );
}
