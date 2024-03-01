import Link from "next/link";
import React from "react";
import { SiZalo } from "react-icons/si";
import { Tooltip, Button } from "@nextui-org/react";
export default function SocialConnect() {
  return (
    <div className="fixed z-50 bottom-10 right-10 ">
      <Tooltip
        placement="left-start"
        content="0901.237.451"
        className="w-[120px] h-[45px] bg-blue-500 text-white text-[16px]"
      >
        <Link
          href="/bao-gia"
          className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full animate-bounce"
        >
          <SiZalo color={"white"} size={"25px"} />
        </Link>
      </Tooltip>
    </div>
  );
}
