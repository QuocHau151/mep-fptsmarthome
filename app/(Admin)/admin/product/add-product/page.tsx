"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { addProduct } from "@/actions/add-product";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export default function AddProduct() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      category: "",
      price: "",
    },
  });
  const onSubmit = (values: z.infer<typeof ProductSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      addProduct(values).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Add Product</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bg-black w-full h-[calc(100vh-60px)] p-10">
        <div className="bg-gray-900 h-auto w-full rounded-2xl p-6">
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col items-stretch gap-4 mb-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Tên Sản Phẩm"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Category"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Giá sản phẩm"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </div>

                <FormError message={error || ""} />
                <FormSuccess message={success || ""} />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 bg-orange-600 "
                >
                  Tạo sản phẩm
                </Button>
              </form>
            </Form>
          </>
        </div>
      </div>
    </>
  );
}
