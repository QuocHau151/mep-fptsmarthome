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

export default function SolutionControl() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/solution/dieu-khien/1668581934-Group-611.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <div className="text-center flex flex-col py-[100px]">
        <h4 className="text-h5 text-gray-400 font-semibold">
          Giải Pháp Điều Khiển
        </h4>
        <h2 className=" text-[48px] text-slate-800 font-semibold">
          Những tính năng nổi bật
        </h2>
      </div>
      <div className="container flex items-center justify-center gap-10 ">
        <div className="flex flex-col text-center items-center justify-center basis-1/2">
          <Image
            className=""
            src="/assets/images/solution/dieu-khien/1668581964-Group-655.png"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px] bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10">
              Đèn ngủ sẽ tự động tắt và Rèm sẽ được mở ra
            </h5>
            <p>
              Thoả sức thiết lập ngữ cảnh hay lập lịch đóng mở Rèm vào những giờ
              nhất định trong ngày
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center basis-1/2">
          <Image
            className=""
            src="/assets/images/solution/dieu-khien/1668582632-Group-654.png"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px]  bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10">
              Sử dụng cảm biến để tạo lập các kịch bản tự động
            </h5>
            <p className="">
              Khi mở cửa, đèn sẽ được bật và rèm sẽ được tự động mở ra.
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
                src="/assets/images/solution/dieu-khien/1668670888-Boxx.png"
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
                src="/assets/images/solution/dieu-khien/1668509039-Dong-Co-Rem.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Động Cơ Rèm Thông Minh</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1668509305-PTS-Bo-Dieu-Khien-Rem-Thong-Minh1.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">
              Bộ Điều Khiển Rèm Cửa Thông Minh
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4  pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1668509333-Ray-Rem-Dien-Thong-Minh.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Ray Rèm Điện Thông Minh</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4  pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1691121198-CT-chinh-sang-2.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Ổ Cắm Thông Minh</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4  pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1689753249-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Bộ Điều Khiển Hồng Ngoại</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1692089611-Nut-Bam-ngu-canh-2.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">
              Nút Bấm Ngữ Cảnh Không Dây
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1693885842-CTCU-ATHENA-TRANG3.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Công Tắc Cảm Ứng Athena</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pb-6 pt-4  h-[320px] rounded-3xl">
            <div className="  h-[200px] overflow-hidden mb-10">
              <Image
                className=" object-contain "
                src="/assets/images/solution/dieu-khien/1668564619-SW2.1-R_FPT_champage_champage_1_V01_220222_TK_Nhantnt.312.png"
                width={900}
                height={900}
                alt=""
              />
            </div>

            <h5 className="text-h6 font-semibold">Công Tắc Cảm Ứng Hera</h5>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="bg-[url('/assets/images/solution/dieu-khien/1668581942-Group-659.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center"></div>
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
              src="/assets/images/solution/dieu-khien/1693974146-mo-rem-edit.jpg"
              width={589}
              height={589}
              alt=""
            />
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[200px] rounded-r-[30px] gap-4">
              <h5 className="text-h6 font-semibold">
                Điều khiển Rèm thông minh bằng giọng nói
              </h5>
              <p className="text-gray-400">
                Dễ dàng điều khiển Rèm từ xa thông qua điện thoại hay giọng nói
                Tiếng Việt
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-center">
            <div className="flex items-left flex-col bg-gray-100  px-20 py-[200px] rounded-l-[30px] gap-4  text-left ">
              <h5 className="text-h6 font-semibold">
                Điều khiển thiết bị Điện và Gia Dụng tại nhà
              </h5>
              <p className="text-gray-400">
                Trang bị ổ cẳm thông minh giúp tắt bật/ hẹn giờ các thiết bị
                hoạt động mọi lúc
              </p>
            </div>
            <Image
              src="/assets/images/solution/dieu-khien/1668582028-Group-667.png"
              width={589}
              height={589}
              alt=""
            />
          </div>
          <div className="flex items-center ">
            <Image
              src="/assets/images/solution/dieu-khien/1668582078-Group-672.png"
              width={589}
              height={589}
              alt=""
            />
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[200px] rounded-r-[30px] gap-4 max-w-[600px]">
              <h5 className="text-h6 font-semibold">
                Tự động kiểm soát độ ẩm, nhiệt độ phòng
              </h5>
              <p className="text-gray-400">
                Hệ thống sẽ nhận diện trạng thái điều hoà thích hợp và tự động
                cân bằng giúp bạn
              </p>
            </div>
          </div>
          <div className="flex items-center flex-row-reverse">
            <Image
              src="/assets/images/solution/dieu-khien/1668582067-Group-675.png"
              width={600}
              height={589}
              alt=""
            />
            <div className="flex items-left flex-col bg-gray-100  px-20 py-[200px] rounded-l-[30px] gap-4 text-right max-w-[600px]">
              <h5 className="text-h6 font-semibold">Chế độ tưới cây tự động</h5>
              <p className="text-gray-400">
                Tiết kiệm thời gian hơn khi chúng ta có thể lên lịch tưới cây tự
                động hằng ngày
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
                src="/assets/images/solution/dieu-khien/1693974986-Asset-4.png"
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
                src="/assets/images/solution/dieu-khien/1668575279-Group-677.png"
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
                src="/assets/images/solution/dieu-khien/1668575336-Group-678.png"
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
