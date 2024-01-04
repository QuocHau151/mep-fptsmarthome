import Image from "next/image";
import React from "react";

export default function Support() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/support/support-banner.jpg')] w-full h-[648px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div>
        <div className="text-center flex flex-col py-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            CUSTOMER SERVICE
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Customer Service Is About Empathy
          </h2>
        </div>
        <div className=" flex flex-col items-center">
          <div className="flex items-center justify-center gap-[150px] pt-10">
            <div className="max-w-[420px]">
              <h3 className="text-h5 font-bold mb-4">Liên Hệ</h3>
              <p>Gửi tin nhắn | Gửi Email | Tìm đại lý gần nhất</p>
            </div>
            <Image
              className="rounded-[30px] mb-4"
              src="/assets/images/support/support-image-1.jpg"
              width={646}
              height={345}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-[200px] pt-10">
            <Image
              className="rounded-[30px] mb-4"
              src="/assets/images/support/support-image-2.jpg"
              width={646}
              height={345}
              alt=""
            />
            <div className="max-w-[420px]">
              <h3 className="text-h5 font-bold mb-4">Đối tác</h3>
              <p>Đăng ký đại lý | Đăng ký cộng Tác Viên</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
