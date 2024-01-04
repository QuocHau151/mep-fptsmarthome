"use client";
import { auth } from "@/auth";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCurrentUser } from "@/hook/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/logout";
import Product from "./san-pham";
import Solution from "./giai-phap";
import Support from "./ho-tro";

const navs = [
  { id: 1, link: "/", name: "Giới thiệu" },
  { id: 2, link: "/san-pham", name: "Sản phẩm", active: <Product /> },
  { id: 3, link: "/giai-phap", name: "Giải pháp", active: <Solution /> },
  { id: 4, link: "/can-ho-mau", name: "Căn hộ mẫu" },
  { id: 5, link: "/ho-tro", name: "Hỗ trợ", active: <Support /> },
];
export default function Bottom_Nav() {
  const user = useCurrentUser();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-white relative">
      <div className="container flex items-center justify-between  w-full h-[56px] font-medium">
        <div className="flex gap-2">
          <Image
            src="/assets/icon/list-category.png"
            width={17}
            height={13}
            alt=""
          />
          <p className=" text-[15px]">Category</p>
          <Image
            src="/assets/icon/arrow-down.png"
            width={24}
            height={24}
            alt=""
          />
        </div>
        <div className="flex  ">
          {navs.map((item) => (
            <>
              <div
                className="group flex flex-col hover:bg-orange-500  rounded-md"
                key={item.id}
              >
                <Link
                  className="text-[15px]  py-[10px] px-[14px]  "
                  href={item.link}
                >
                  {item.name}
                </Link>
                <div className="invisible  group-hover:visible  ">
                  {item.active}
                </div>
              </div>
            </>
          ))}
        </div>
        {user ? (
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center outline-0 gap-4">
                  <Avatar className="w-[30px] h-[30px]">
                    <AvatarImage src={user.image || "/assets/icon/user.png"} />
                  </Avatar>
                  <LoginButton>
                    <span className="text-xl text-black bg-white cursor-pointer hover:bg-gray-100">
                      {user.name}
                    </span>
                  </LoginButton>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="float-right">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel
                  onClick={handleLogout}
                  className="cursor-pointer bg-red-300 rounded-md"
                >
                  Logout
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center">
            <Image
              className="object-contain"
              src="/assets/icon/user.png"
              width={24}
              height={24}
              alt=""
            />
            <LoginButton>
              <Button className="text-p bg-white hover:bg-orange-500  ">
                Đăng Nhập
              </Button>
            </LoginButton>
          </div>
        )}
      </div>
    </div>
  );
}
