import Link from "next/link";
import React from "react";

export default function Solution() {
  return (
    <div className="absolute top-12  z-10 bg-slate-300 rounded-lg ">
      <div className="flex flex-col  items-start justify-center px-4 py-6 text-[16px] gap-2 font-medium">
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/giai-phap/giai-phap-dieu-khien"
        >
          Giải pháp điều khiển
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/giai-phap/giai-phap-chieu-sang"
        >
          Giải pháp chiếu sáng
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/giai-phap/giai-phap-an-ninh"
        >
          Giải pháp an ninh
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/giai-phap/giai-phap-truyen-hinh"
        >
          Giải pháp truyền hình
        </Link>
      </div>
    </div>
  );
}
