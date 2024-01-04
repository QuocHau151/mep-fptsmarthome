import Link from "next/link";
import React from "react";

export default function Support() {
  return (
    <div className="absolute top-12  z-10 bg-slate-300 rounded-lg ">
      <div className="flex flex-col  items-start justify-center px-4 py-6 text-[16px] gap-2 font-medium">
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/lien-he/lien-he-truc-tiep"
        >
          Liên hệ trực tiếp
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/lien-he/doi-tac"
        >
          Đối tác
        </Link>

        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/lien-he/brandshop"
        >
          BrandShop
        </Link>
      </div>
    </div>
  );
}
