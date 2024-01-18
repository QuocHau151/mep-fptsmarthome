import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[516px] bg-black text-gray-200 flex items-start justify-between px-[100px] py-[70px] mx-auto gap-6">
      <div className="flex flex-col basis-1/4 items-center my-auto font-light gap-10">
        <Image src="/assets/logofptsh.png" width={500} height={200} alt="" />
        <h4 className="text-h6 text-center">Công ty Cổ phần Viễn thông FPT</h4>
      </div>
      <div className=" flex flex-col items-start gap-[35px] font-light basis-1/4 mr-[-50px]">
        <h6 className="font-regular">Contact</h6>
        <div className="flex items-center gap-6 ">
          <Image
            src="/assets/icon/footer/address.png"
            width={24}
            height={24}
            alt=""
          />
          <p>Lô 37-39A Đường 19, KCX Tân Thuận, Quận 7 TP.Hồ Chí Mình</p>
        </div>
        <div className="flex items-center gap-6 ">
          <Image
            src="/assets/icon/footer/support.png"
            width={24}
            height={24}
            alt=""
          />
          <p>0932133357 - Hỗ trợ trực tiếp</p>
        </div>
        <div className="flex items-center gap-6 font-light">
          <Image
            src="/assets/icon/footer/_phone.png"
            width={24}
            height={24}
            alt=""
          />
          <p>19006600</p>
        </div>
        <div className="flex items-center gap-6 font-light">
          <Image
            src="/assets/icon/footer/mail.png"
            width={24}
            height={24}
            alt=""
          />
          <p>fptsmarthome@fpt.com</p>
        </div>
        <Image
          src="/assets/icon/footer/logoSaleNoti 1.png"
          width={268}
          height={101}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-8 font-light basis-1/4 max-w-[210px]">
        <h6 className="font-regular">Product</h6>
        <ul className=" flex flex-col gap-4">
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
      <div className="flex flex-col gap-8 font-light basis-1/4 max-w-[210px]">
        <h6 className="font-regular">Customer Support</h6>
        <ul className=" flex flex-col gap-4">
          <li>Hotline: </li>
          <li>FAQ</li>
          <li>Đăng kí đại lý</li>
          <li>Chính sách bảo hành</li>
          <li>Chính sách quyền riêng tư</li>
          <li>Điều khoản sử dụng</li>
          <li>Chính sách sử dụng dữ liệu cá nhân</li>
        </ul>
      </div>
    </div>
  );
}
