import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black">
      <div className=" container w-full h-min text-gray-200 flex items-start justify-center py-[70px]  gap-20 max-lg:px-10 max-lg:flex-col max-lg:text-[13px] max-md:flex-col max-md:px-10 max-md:gap-10">
        <div className="flex flex-col justify-center  max-md:min-w-[10px] items-center my-auto mx-auto font-light gap-10  max-lg:gap-2">
          <Link href="/">
            <h4 className="text-[50px] font-bold text-center">MEPSHARING</h4>
          </Link>
        </div>
        <div className="flex items-start justify-around gap-10 max-lg:flex-wrap max-lg:mx-auto  max-md:flex-nowrap max-md:border-b-[1px] max-md:border-white max-md:pb-10 max-md:gap-5 ">
          <div className=" flex flex-col  gap-[35px] font-light mr-10  max-lg:mr-0  min-w-[150px] max-md:flex-col max-md:items-center max-md:hidden ">
            <h6 className="font-regular ">Contact</h6>
            <div className="flex flex-col  gap-[35px] font-light  ">
              <div className="flex items-center gap-6 ">
                <Image
                  src="/assets/icon/footer/address.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="max-w-[200px]">
                  4th floor, LA3 Astoria building - 383 Nguyen Duy Trinh, Binh
                  Trung Tay Ward, City. Thu Duc, City. Ho Chi Minh, Vietnam
                </p>
              </div>
              <div className="flex items-center gap-6 font-light">
                <Image
                  src="/assets/icon/footer/support.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <p>0886 82 83 86 - Hỗ trợ trực tiếp ( Anh Tuấn )</p>
              </div>

              <div className="flex items-start gap-6 font-light">
                <Image
                  src="/assets/icon/footer/mail.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="">contact@mepsharing.com</p>
              </div>
              <Image
                className="max-md:w-[150px]"
                src="/assets/icon/footer/logoSaleNoti 1.png"
                width={268}
                height={101}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 font-light   min-w-[150px]  max-md:w-full max-md:justify-center max-md:min-w-[130px]">
            <h6 className="font-regular">Product</h6>
            <ul className=" flex flex-col gap-4 ">
              <li>Bộ điều khiển trung tâm</li>
              <li>Đèn thông minh</li>
              <li>Cảm biến</li>
              <li>Công tắc thông minh</li>
              <li>Bộ rèn của</li>
              <li>Phụ kiện</li>
              <li>Khoá của thông minh</li>
              <li>Thiết bị an ninh thông minh</li>{" "}
            </ul>
          </div>
          <div className="flex flex-col gap-8 font-light  min-w-[150px] max-md:min-w-[130px]">
            <h6 className="font-regular">Customer Support</h6>
            <ul className=" flex flex-col gap-4">
              <li>Hotline: </li>
              <li>FAQ</li>
              <li>Đăng kí đại lý</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách quyền riêng tư</li>
              <li>Điều khoản sử dụng</li>
              <li className="max-w-[150px]">
                Chính sách sử dụng dữ liệu cá nhân
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center w-full  flex-col items-center gap-3 hidden max-md:flex">
          <h1>MEPSHARING</h1>
          <h2>
            Địa chỉ: 4th floor, LA3 Astoria building - 383 Nguyen Duy Trinh,
            Binh Trung Tay Ward, City. Thu Duc, City. Ho Chi Minh, Vietnam
          </h2>
          <h2> 0886 82 83 86 ( Anh Tuấn ) - Hỗ trợ trực tiếp </h2>
          <h2> Email: contact@mepsharing.com </h2>
          <Image
            className="max-md:w-[150px]"
            src="/assets/icon/footer/logoSaleNoti 1.png"
            width={268}
            height={101}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
