"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStore } from "@/store/useStore";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Tên Khách hàng không được để trống",
  }),
  phone: z.string().min(2, {
    message: "Số điện thoại không được để trống",
  }),
  email: z.string().min(2, {
    message: "Email không được để trống",
  }),
  address: z.string().min(2, {
    message: "Địa chỉ không được để trống",
  }),
});

export default function Checkout() {
  const [price, setPrice] = useState(0);
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const total = useStore((state) =>
    state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      address: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setPrice(total);
  };
  return (
    <div className="flex items-start justify-center gap-8 p-10 bg-slate-400">
      <div className="basis-2/3 h-min bg-white rounded-2xl">
        <div className="flex items-center justify-between px-8 text-[18px]  gap-6 py-6 border-b-[1px] border-black">
          <input type="checkbox" />
          <p className="flex-auto">Tất cả sản phẩm</p>
          <p className="px-8">Đơn giá </p>
          <p className="px-2">Số lượng</p>
          <p className="px-8">Số tiền</p>
          <CiTrash className="w-[25px] h-[25px]" />
        </div>
        {cart.map((product) => (
          <>
            <div className="flex items-center justify-between px-8 text-[18px]  gap-6 py-10">
              <input type="checkbox" />
              <div className="flex items-center justify-start flex-auto gap-6">
                <Image
                  src={product.image || ""}
                  width={50}
                  height={50}
                  alt=""
                ></Image>
                <div>
                  <p>{product.name}</p>
                  <p>Mã sản phẩm: {product.id}</p>
                </div>
              </div>
              <p className="px-8">{product.price} </p>
              <div className="flex items-start justify-between gap-2">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="w-6 h-6 border-black border-[1px] "
                >
                  -
                </button>
                {product.quantity}
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="w-6 h-6 border-black border-[1px]"
                >
                  +
                </button>
              </div>
              <p className="px-8">{product.price * product.quantity}</p>
              <CiTrash
                onClick={() => removeFromCart(product.id)}
                className="w-[25px] h-[25px]"
              />
            </div>
          </>
        ))}
      </div>
      <div className="basis-1/3 bg-white p-6 rounded-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Tên Khách hàng" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Số điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Địa chỉ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <div className="flex items-center justify-between py-6 border-b-[1px]">
                <p>Tạm tính </p>
                <p className=" text-[18px] font-semibold">{total} VNĐ</p>
              </div>
              <div className="flex items-center justify-between py-4">
                <p>Tổng</p>
                <div className=" flex flex-col items-end">
                  <p className="text-[25px] text-orange-600 font-semibold">
                    {total} VNĐ
                  </p>
                  <span>(Chưa bao gồm VAT)</span>
                </div>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Đặt hàng
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
