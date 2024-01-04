"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

export default function SecuritySolution() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/solution/an-ninh/1668582892-Group-622.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div className="text-center flex flex-col py-[100px]">
        <h4 className="text-h5 text-gray-400 font-semibold">
          Giải Pháp Điều Khiển
        </h4>
        <h2 className=" text-[48px] text-slate-800 font-semibold">
          Những tính năng nổi bật
        </h2>
      </div>
      <div className="container flex items-start justify-center gap-10 ">
        <div className="flex flex-col text-center items-center  basis-1/2">
          <Image
            className="h-[457px] "
            src="/assets/images/solution/an-ninh/1668582950-Group-653.png"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px] bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10">
              Camera SE phát hiện người và gửi cảnh báo
            </h5>
            <p>
              Phát hiện người đột nhập, hỗ trợ phân biệt chuyển động của người
              và vật để gửi đi cảnh báo chính xác tới điện thoại... giúp kịp
              thời phát hiện xâm nhập trái phép
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center basis-1/2">
          <Image
            className=""
            src="/assets/images/solution/an-ninh/1668582961-Group-652.png"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px]  bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10">
              Khoá cửa thông minh
            </h5>
            <p className="">
              Mở cửa từ xa, nhanh và tiện lợi dù bạn ở bất cứ đâu. Quản lý và
              kiểm tra việc ra vào hiệu quả.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px]">
        <h4 className="text-h5 text-gray-400 font-semibold">
          Sản phẩm Smart Home
        </h4>
        <h2 className=" text-[48px] text-slate-800 font-semibold">
          Những thiết bị nổi bật dành riêng cho bạn
        </h2>
      </div>
      <Swiper
        style={{}}
        spaceBetween={30}
        slidesPerView={6}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex items-center justify-center gap-10 mb-[100px] flex-nowrap"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4  pt-4 pb-6  h-[320px] rounded-3xl ">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/an-ninh/1668670888-Boxx.png"
                width={900}
                height={900}
                alt=""
              />
            </div>
            <h5 className="text-h6 font-semibold">FPT Play Box S</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/an-ninh/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Cảm Biến Cửa</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/an-ninh/1668507239-Cam-Bien-Chuyen-Dong-Zig-Bee.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Cảm Biến Chuyển Động</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4  pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/an-ninh/1684225838-cam-SE-x-XM.1.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Camera SE FPT</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4  pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/an-ninh/1668569058-3.YDM7116A_Black_DHZY013.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Khoá Cửa Vân Tay Yale</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4  pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/an-ninh/1668569184-7.-YDM3109-SILVER-DHZY0110.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Khoá Cửa Thẻ Từ Yale</h5>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="bg-[url('/assets/images/solution/an-ninh/1668582900-Group-658.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div className="container">
        <div className="text-center flex flex-col py-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold">
            Sản phẩm Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold">
            Những tính năng dành riêng cho bạn
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center ">
            <div className="w-[589px] h-[589px] overflow-hidden  relative rounded-[40px]">
              <Image
                className="absolute object-cover w-full h-full"
                src="/assets/images/solution/an-ninh/1670833435-Group-654.png"
                width={589}
                height={589}
                alt=""
              />
            </div>
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[170px] rounded-r-[30px] gap-4 ">
              <h5 className="text-h6 font-semibold max-w-[420px">
                Cảm biến cửa giúp kiểm soát an ninh tại cửa ra vào
              </h5>
              <p className="text-gray-400 max-w-[420px]">
                Cài đặt để phát hiện chuyển động cửa trong những khung giờ nhất
                định, giúp truyền tín hiệu, đưa ra cảnh báo giúp người dùng chủ
                động trong việc bảo vệ an toàn tài sản.
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-center">
            <div className="flex items-left flex-col bg-gray-100  px-20 py-[200px] rounded-l-[30px] gap-4  text-left ">
              <h5 className="text-h6 font-semibold">Nút bấm khẩn cấp</h5>
              <p className="text-gray-400 max-w-[400px]">
                Khi gặp sự cố không muốn bạn có thể sử dụng để được hỗ trợ sớm
                nhất
              </p>
            </div>
            <Image
              src="/assets/images/solution/an-ninh/1668582986-Group-668.png"
              width={589}
              height={589}
              alt=""
            />
          </div>
          <div className="flex items-center  mb-10">
            <Image
              src="/assets/images/solution/an-ninh/1668582997-Group-671.png"
              width={589}
              height={589}
              alt=""
            />
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[200px] rounded-r-[30px] gap-4 max-w-[600px]">
              <h5 className="text-h6 font-semibold">ĐCamera IQ ngoài trời</h5>
              <p className="text-gray-400">
                Giúp quan sát và quản lý bên ngoài ngôi nhà một cách tổng thể
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 pb-[100px]">
        <div className="container">
          <div className="text-center flex flex-col items-center py-[100px] justify-center">
            <h4 className="text-h5 text-gray-400 font-semibold">
              Giải Pháp Nhà Thông Minh
            </h4>
            <h2 className=" text-[48px] text-slate-800 font-semibold max-w-[700px] text-center">
              Những Giải Pháp Thông Minh Cho Căn Hộ Của Bạn
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/1693974974-Asset-3.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp Điều Khiển
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                Xem Thêm
              </Button>
            </div>
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/1693974986-Asset-4.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp Chiếu Sáng
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                Xem Thêm
              </Button>
            </div>
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/1668575336-Group-678.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp Truyền Hình
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                Xem Thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
