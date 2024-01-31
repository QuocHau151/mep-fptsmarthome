"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Page() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/product/thumnail/1668575002-rem.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div className="container">
        <div className="text-center flex flex-col py-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Các thiết bị Công tắc thông minh
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-6">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265076-Dong-Co-Rem.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Động Cơ Rèm Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/bo-rem-cua/dong-co-rem-thong-minh">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265286-PTS-Bo-Dieu-Khien-Rem-Thong-Minh1.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Bộ Điều Khiển Rèm Cửa Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/bo-rem-cua/bo-dieu-khien-rem-cua-thong-minh">
                Xem thêm
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265302-Ray-Rem-Dien-Thong-Minh.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Ray Rèm Điện Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/bo-rem-cua/ray-rem-dien-thong-minh">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265347-Cong-Tac-Dieu-Khien-Rem-Cua-Thong-Minh.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Công Tắc Điều Khiển Rèm Cửa Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/bo-rem-cua/cong-tac-dieu-khien-cua-thong-minh">
                Xem thêm
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6">
          <p className="text-[20px]">
            Điều khiển đóng hoặc mở rèm tự động tại nhà chỉ bằng giọng nói,
            ngoài ra có thể cài đặt khung giờ tuỳ thích qua ứng dụng điện
          </p>
          <p className="text-[20px] px-12">Điều khiển bật tắt bằng giọng nói</p>
          <p className="text-[20px] px-12">
            Kết nối được thông qua Bluetooth hoặc ZigBee
          </p>
          <p className="text-[20px] px-12">
            Số lượng nút từ 1 đến 6 nút tuỳ theo nhu cầu sử dụng
          </p>
          <div className="p-10 flex items-center justify-center gap-6 border-b-[1px] w-full border-black">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/assets/images/product/icon/1676456837-Group-1073.png"
                width={70}
                height={70}
                alt=""
              />
              <p className="text-[18px]">Điều khiển giọng nói</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/assets/images/product/icon/1676456645-Group-1072.png"
                width={70}
                height={70}
                alt=""
              />
              <p className="text-[18px]">Điều khiển giọng nói</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/assets/images/product/icon/1676456652-Group-1071.png"
                width={70}
                height={70}
                alt=""
              />
              <p className="text-[18px]">Kết nối Zigbee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
