"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

import { reset } from "@/actions/reset";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div>
      <div className="bg-[url('/assets/images/Untitled-1.jpg')] h-[100vh]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-95 rounded-[30px] flex flex-col gap-6 items-center  p-[50px]">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800 mb-2">
              Quên Mật Khẩu
            </h1>
            <p className="text-[18px] text-slate-600 mb-4">
              Vui lòng điền email để lấy lại <br /> mật khẩu
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full"
            >
              <div className="space-y-4 mb-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="john.doe@example.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error as string} />
              <FormSuccess message={success as string} />
              <Button
                disabled={isPending}
                type="submit"
                className=" flex items-center justify-center w-full h-[50px] bg-orange-500 text-white rounded-[10px] text-[18px] font-semibold"
              >
                Send reset email
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
