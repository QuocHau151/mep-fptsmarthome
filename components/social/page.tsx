import Link from "next/link";
import React from "react";
import { SiZalo } from "react-icons/si";

export default function SocialConnect() {
  return (
    <div className="fixed z-50 bottom-10 right-10 ">
      <Link
        href="/bao-gia"
        className="bg-red-500 w-12 h-12 flex items-center justify-center rounded-full"
      >
        <SiZalo color={"white"} size={"25px"} />
      </Link>
    </div>
  );
}
