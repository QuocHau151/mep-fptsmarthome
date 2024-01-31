"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Page() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/product/thumnail/1668574961-cam-bien.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div className="container">
        <div className="text-center flex flex-col py-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Các thiết bị Cảm biến
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-6">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669193715-1669171553-Cam-Bien-Cua.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Cảm Biến Cửa</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-cua">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265268-Cam-Bien-Chuyen-Dong1.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Cảm Biến Chuyển Động</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-chuyen-dong">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1697613777-Cam-bien-Khoi2.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">Cảm Biến Khói</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-khoi">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1687942243-ava.png"
              width={170}
              height={100}
              alt=""
            />
            <h3 className="text-center font-semibold">
              Cảm Biến Chuyển Động Âm Trần
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-chuyen-dong-am-tran">
                Xem thêm
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6">
          <p className="text-[20px]">
            Nhận dạng các chuyển động và bất thường xảy ra ngay tại nhà để tự
            điều chỉnh và kịp thời gửi thông báo tới bạn ·
          </p>
          <p className="text-[20px] px-12">
            Kết nối cảm biến cửa với thiết bị thông minh khác để khi cửa mở
            chúng sẽ tự hoạt động · Kết nối cảm biến chuyển động với đèn, để khi
            di chuyển đèn sẽ tự sáng hoặc tắt
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
