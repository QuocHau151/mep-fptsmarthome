import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Connect() {
  return (
    <div className="fixed z-50 bottom-10 left-10 ">
      <Tooltip
        placement="right-start"
        content="Báo giá"
        className="w-[120px] h-[45px] bg-red-500 text-white text-[16px]"
      >
        <Link
          href="/bao-gia"
          className="bg-red-500 w-12 h-12 flex items-center justify-center rounded-full"
        >
          <RiCustomerService2Line color={"white"} size={"25px"} />
        </Link>
      </Tooltip>
    </div>
  );
}
