"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CanHo1PN() {
  const [isOpen, setIsOpen] = useState(1);
  return (
    <>
      <div className=" container pt-[120px] max-lg:pt-[70px] max-md:pt-[60px] ">
        <div className="py-[100px]  ">
          <div className="relative w-full">
            <Image
              src="/assets/images/apartment/1pn/phong-ngu-1.jpg"
              width={700}
              height={700}
              quality={100}
              alt=""
            />
            <div className="line-straight max-w-[1px] top-0 left-[780px]"></div>
            <div className="" onClick={() => setIsOpen(1)}>
              <div className="pointer top-[20px] left-[20px]"></div>
              {isOpen === 1 && (
                <>
                  <div className="line-1  top-[28px] left-[42px]"></div>
                  <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                    <h1 className=" text-center text-[25px] font-semibold">
                      Bộ điều khiển hồng ngoại
                    </h1>
                    <p className="px-6 text-justify">
                      Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                      khiển thông minh của FPT Smart Home. Thiết bị sử dụng sóng
                      hồng ngoại để điều khiển các thiết bị như điều hoà, TV,
                      quạt… thay thế cho các loại remote truyền thống.
                    </p>
                    <Image
                      src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                      width={250}
                      height={200}
                      quality={100}
                      alt=""
                      className="mt-[-30px]"
                    />
                    <h3 className="text-[22px] font-semibold mt-[-40px]">
                      Giá: 690.000 VNĐ
                    </h3>
                  </div>
                </>
              )}
            </div>

            <div onClick={() => setIsOpen(2)}>
              <div className="pointer top-[225px] left-[155px]"></div>
              {isOpen === 2 && (
                <>
                  <div className="line-2  top-[234px] left-[163px]"></div>
                  <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                    <h1 className=" text-center text-[25px] font-semibold">
                      Công tắc cảm ứng 1 nút Chữ Nhật
                    </h1>
                    <p className="px-6 text-justify">
                      Công tắc cảm ứng (Touch switch) là loại công tắc chỉ cần
                      chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt các
                      thiết bị điện trong gia đình
                    </p>
                    <Image
                      src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                      width={250}
                      height={200}
                      quality={100}
                      alt=""
                      className=""
                    />
                    <h3 className="text-[22px] font-semibold ">
                      Giá: 1.990.000 VNĐ
                    </h3>
                  </div>
                </>
              )}
            </div>
            <div onClick={() => setIsOpen(3)}>
              <div className="pointer top-[215px] left-[335px]"></div>
              {isOpen === 3 && (
                <>
                  <div className="line-3  top-[225px] left-[355px]"></div>
                  <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                    <h1 className=" text-center text-[25px] font-semibold">
                      Công tắc cảm ứng 2 nút Chữ Nhật
                    </h1>
                    <p className="px-6 text-justify">
                      Công tắc cảm ứng (Touch switch) là loại công tắc chỉ cần
                      chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt các
                      thiết bị điện trong gia đình
                    </p>
                    <Image
                      src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                      width={250}
                      height={200}
                      quality={100}
                      alt=""
                      className=""
                    />
                    <h3 className="text-[22px] font-semibold ">
                      Giá: 2.290.000 VNĐ
                    </h3>
                  </div>
                </>
              )}
            </div>
            <div onClick={() => setIsOpen(4)}>
              <div className="pointer top-[50px] left-[425px]"></div>
              {isOpen === 4 && (
                <>
                  <div className="line-4  top-[61px] left-[444px]"></div>
                  <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                    <h1 className=" text-center text-[25px] font-semibold">
                      Cảm Biến Chuyển Động
                    </h1>
                    <p className="px-6 text-justify">
                      Cảm biến chuyển động (máy phát hiện chuyển động) đây là
                      thiết bị điện thông minh với khả năng phát hiện các chuyển
                      động vật lý, từ đó bật hoặc tắt chức năng của các thiết bị
                      liên quan trong hệ thống.
                    </p>
                    <Image
                      src="/assets/images/product/1687941235-ava.png"
                      width={250}
                      height={200}
                      quality={100}
                      alt=""
                      className=""
                    />
                    <h3 className="text-[22px] font-semibold ">
                      Giá: 940.000 VNĐ
                    </h3>
                  </div>
                </>
              )}
            </div>
            <div onClick={() => setIsOpen(5)}>
              <div className="pointer top-[215px] left-[563px]"></div>
              {isOpen === 5 && (
                <>
                  <div className="line-5  top-[224px] left-[584px]"></div>
                  <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                    <h1 className=" text-center text-[25px] font-semibold">
                      Cảm Biến Cửa
                    </h1>
                    <p className="px-6 text-justify">
                      Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng biệt,
                      được sử dụng để lắp đặt chủ yếu tại các khu vực cửa phòng,
                      cửa ra vào,...
                    </p>
                    <Image
                      src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                      width={250}
                      height={200}
                      quality={100}
                      alt=""
                      className=""
                    />
                    <h3 className="text-[22px] font-semibold ">
                      Giá: 890.000 VNĐ
                    </h3>
                  </div>
                </>
              )}
            </div>
            <div onClick={() => setIsOpen(6)}>
              <div className="pointer top-[275px] left-[650px]"></div>
              {isOpen === 6 && (
                <>
                  <div className="line-6  top-[285px] left-[670px]"></div>
                  <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                    <h1 className=" text-center text-[25px] font-semibold">
                      FPT Play Box S
                    </h1>
                    <p className="px-6 text-justify">
                      Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ trụ
                      điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà thân yêu
                      của bạn
                    </p>
                    <Image
                      src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                      width={250}
                      height={200}
                      quality={100}
                      alt=""
                      className=""
                    />
                    <h3 className="text-[22px] font-semibold ">
                      Giá: 2.400.000 VNĐ
                    </h3>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="pb-[100px] flex flex-col items-center justify-center gap-10">
          <h1 className="text-center text-[35px] font-semibold mb-12">
            Toàn cảnh Căn Hộ 1 Phòng Ngủ
          </h1>
          <Image
            src="/assets/images/apartment/1pn/phong-ngu-2.jpg"
            width={1000}
            height={1000}
            quality={100}
            alt=""
            className=""
          />
          <Image
            src="/assets/images/apartment/1pn/phong-ngu-4.jpg"
            width={1000}
            height={1000}
            quality={100}
            alt=""
            className=""
          />
          <Image
            src="/assets/images/apartment/1pn/phong-ngu-5.jpg"
            width={1000}
            height={1000}
            quality={100}
            alt=""
            className=""
          />
          <Image
            src="/assets/images/apartment/1pn/phong-ngu-6.jpg"
            width={1000}
            height={1000}
            quality={100}
            alt=""
            className=""
          />
        </div>
      </div>
    </>
  );
}
