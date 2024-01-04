"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React from "react";
import RegisterForm from "@/components/auth/register-form";
import Social from "@/components/auth/social";

export default function Register() {
  return (
    <div>
      <div className="bg-[url('/assets/images/Untitled-1.jpg')] h-[100vh]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-95 rounded-[30px] flex flex-col gap-6 items-center  p-[50px]">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800">
              Xin Chào
            </h1>
            <p className="text-[18px] text-slate-600">
              Đăng ký tài khoản của bạn
            </p>
          </div>
          <RegisterForm />

          <div className="w-full flex flex-col text-center text-sm font-medium text-slate-500 leading-none">
            <hr className="w-full" />
            <p className="-mt-[8px]  ">Hoặc đăng nhập bằng</p>
          </div>
          <Social />
          <p className=" flex gap-2">
            Nếu bạn dã có tài khoản!
            <Link href="/login" className="text-orange-600">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
