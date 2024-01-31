"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Page() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/product/thumnail/1668566988-page-phu-kien.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
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
              src="/assets/images/product/1669265109-O-Cam-Thong-Minh2.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Ổ Cắm Thông Minh</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/phu-kien/o-cam-thong-minh">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1704861598-USB-3.0.1.jpg"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">USB Zigbee</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/phu-kien/usb-zigbee">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Bộ Điều Khiển Hồng Ngoại
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/phu-kien/bo-dieu-khien-hong-ngoai">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1692089191-O-cam-AM-Tuong3.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Ổ Cắm Mặt Kính Âm Tường
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/phu-kien/o-cam-mat-kinh-am-tuong">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1691059200-O-Cam-Wifi2.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Ổ Cắm Thông Minh Wifi</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/phu-kien/o-cam-thong-minh-wifi">Xem thêm</Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6">
          <p className="text-[20px]">
            Điều khiển tắt mở trực tiếp qua điện thoại. Hẹn giờ tắt mở. Chất
            liệu chống cháy.
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
