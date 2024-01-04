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

export default function LightSolution() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/solution/chieu-sang/1668581675-Group-218.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
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
            src="/assets/images/solution/chieu-sang/1668581725-Group-657.png"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px] bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10">
              Tự động bật đèn khi mở cửa
            </h5>
            <p>
              Đèn sẽ tự động sáng khi mở cửa hoặc khi có chuyển động khi kết hợp
              cùng cảm biến thông minh
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center basis-1/2">
          <Image
            className=""
            src="/assets/images/solution/chieu-sang/1691489122-Asset-4.jpg"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px]  bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10">
              Bật/ tắt đèn bằng giọng nói Tiếng Việt
            </h5>
            <p className="">
              Người dùng có thể ra lệnh điều khiển trực tiếp bằng giọng nói
              tiếng Việt
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
                src="/assets/images/solution/chieu-sang/1668508191-Led.png"
                width={900}
                height={900}
                alt=""
              />
            </div>
            <h5 className="text-h6 font-semibold">
              Đèn LED Downlight Thông Minh
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1668509155-PTS-LED-Bulb-1.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Đèn LED Bulb Thông Minh</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1668509205-PTS-LED-Panel-tron.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Đèn LED Panel Thông Minh</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4  pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1668509439-PTS-LightStrip-2.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Đèn LED Dây Thông Minh</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4  pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1668509500-PTS-LED-tracklight-trang-.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">
              Đèn LED Tracklight Thông Minh
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4  pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1668670888-Boxx.png"
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
                src="/assets/images/solution/chieu-sang/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Cảm Biến Cửa</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl ">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1668507239-Cam-Bien-Chuyen-Dong-Zig-Bee.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Cảm Biến Chuyển Động</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pb-6 pt-4  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/chieu-sang/1693885854-CTCU-Athena-Vuong9.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Công Tắc Cảm Ứng Athera</h5>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="bg-[url('/assets/images/solution/chieu-sang/1668581702-Group-660.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
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
            <Image
              src="/assets/images/solution/chieu-sang/1668581843-Group-666.png"
              width={589}
              height={589}
              alt=""
            />
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[200px] rounded-r-[30px] gap-4">
              <h5 className="text-h6 font-semibold">Hẹn giờ linh hoạt</h5>
              <p className="text-gray-400">
                Tính năng lập lịch giúp tắt bật các thiết bị theo thời gian đặt
                sẵn
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-center">
            <div className="flex items-left flex-col bg-gray-100  px-20 py-[200px] rounded-l-[30px] gap-4  text-left ">
              <h5 className="text-h6 font-semibold">
                Tắt/ bật đèn linh hoạt theo nhóm hoặc riêng lẻ
              </h5>
              <p className="text-gray-400 max-w-[400px]">
                Người dùng có thể dễ dàng điều khiển tắt bật đồng thời nhiều đèn
                ở phòng khách thông qua giọng nói. Giúp tiết kiệm điện năng và
                tiện lợi hơn khi điều khiển không cần phụ thuộc hạ tầng điện.
              </p>
            </div>
            <Image
              src="/assets/images/solution/chieu-sang/1668581854-Group-673.png"
              width={589}
              height={589}
              alt=""
            />
          </div>
          <div className="flex items-center  mb-10">
            <Image
              src="/assets/images/solution/chieu-sang/1668581871-Group-674.png"
              width={589}
              height={589}
              alt=""
            />
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[200px] rounded-r-[30px] gap-4 max-w-[600px]">
              <h5 className="text-h6 font-semibold">
                Điều chỉnh cường độ ánh sáng và màu sắc theo thời
              </h5>
              <p className="text-gray-400">
                Hệ thống sẽ nhận diện trạng thái điều hoà thích hợp và tự động
                cân bằng giúp bạn
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
                src="/assets/images/solution/chieu-sang/1693974974-Asset-3.png"
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
                src="/assets/images/solution/chieu-sang/1668575279-Group-677.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp An Ninh
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                Xem Thêm
              </Button>
            </div>
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/chieu-sang/1668575336-Group-678.png"
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
