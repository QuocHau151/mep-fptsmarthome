import Link from "next/link";
import React from "react";
import { SiZalo } from "react-icons/si";
import { Tooltip, Button } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export default function SocialConnect() {
  return (
    <div className="fixed z-50 bottom-10 right-10 cursor-pointer">
      <Popover key="top-end" placement="top-end" color="primary">
        <PopoverTrigger>
          <div className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
            <SiZalo color={"white"} size={"25px"} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="border-[1px] border-blue-500 p-4 bg-white drop-shadow-lg">
          <div className="w-[250px] h-min text-center ">
            <div className="flex flex-col gap-4 text-small font-bold">
              <h2 className="text-[20px] font-semibold text-center text-blue-500">
                Liên hệ qua Zalo
              </h2>
              <h3 className="text-black text-[16px]">0901.237.451</h3>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
