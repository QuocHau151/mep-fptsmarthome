"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

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
import { formPartnerSchema } from "@/schemas";
import { createPartner } from "@/actions/partner";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formPartnerSchema>>({
    resolver: zodResolver(formPartnerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      note: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formPartnerSchema>) => {
    setIsSubmitting(true);
    try {
      await createPartner(values);
      handleSubmit();
      setTimeout(() => setIsSubmitting(false), 60000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };
  const handleSubmit = () => {
    toast({
      title: "Bạn đã gửi tin nhắn thành công",
      description: "Chúng tôi sẽ phản hồi bạn sớm nhất có thể",
    });
  };
  const handleFail = () => {
    toast({
      title: "Bạn cần 60s để gửi lại tin nhắn",
      description: "Vui lòng thử lại sau",
    });
  };
  return (
    <>
      <Helmet>
        <title>Đối tác</title>
        <meta
          name="description"
          content="Hỗ trợ đăng ký đối tác FPT Smart Home"
        />
      </Helmet>
      <div>
        <div className="bg-[url('/assets/images/support/partner-banner.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[150px]"></div>
      </div>
      <div className="container max-lg:px-20 max-md:px-10">
        <div className=" text-center py-10">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            CHÍNH SÁCH ƯU ĐÃI
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Nhận ngay các quyền lợi ”Khủng“ khi đồng hành kinh doanh cùng chúng
            tôi
          </h2>
        </div>
        <div className="flex items-center justify-center gap-14 py-10 max-lg:flex-col max-md:py-[0px] ">
          <div className="basis-1/2 bg-slate-100 rounded-3xl w-full h-[500px] px-8 pt-6">
            <h2 className="text-[35px] font-semibold text-center border-b-[1px] border-black pb-6 max-md:text-[25px]">
              Chính sách Đại lý
            </h2>
            <div className="text-[23px] py-10 flex flex-col gap-4 max-lg:text-center max-lg:px-10 max-md:px-0 max-md:text-[15px]">
              <p>
                Hưởng ngay mức chiết khấu cao, kèm chế độ thưởng theo tháng, quý
                hấp dẫn.
              </p>
              <p>
                Hỗ trợ hình ảnh, bảng hiệu cũng như khu trưng bày, trải nghiệm
                sản phẩm.
              </p>
              <p>
                Được hỗ trợ đào tạo và cung cấp tài liệu về kỹ thuật, sản phẩm.
              </p>
              <p>
                Chính sách hỗ trợ chăm sóc khách hàng 24/7. Bảo hành toàn quốc.
              </p>
            </div>
          </div>
          <div className="basis-1/2 bg-slate-100 rounded-3xl w-full h-[500px] px-8 pt-6 max-md:mb-10">
            <h2 className="text-[35px] font-semibold text-center border-b-[1px] border-black pb-6 max-md:text-[25px]">
              Chính sách Cộng Tác Viên
            </h2>
            <div className="text-[23px] py-10 flex flex-col gap-4 max-lg:text-center max-lg:px-10 max-md:px-0 max-md:text-[15px]">
              <p>Kinh doanh không cần vốn.</p>
              <p>Hưởng hoa hồng hấp dẫn dành cho CTV.</p>
              <p>Chính sách thưởng thêm linh hoạt theo tháng/quý.</p>
              <p>Được đào tạo về sản phẩm thường xuyên.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-[url('/assets/images/support/background-image.jpg')] w-full h-min bg-cover bg-no-repeat bg-center rounded-[30px] mb-10">
              <div className="flex flex-col items-center justify-center py-14">
                <h1 className="text-[40px] font-semibold mb-2 max-md:text-[25px]">
                  Cơ Hội Tới - Lên Đời Ngay
                </h1>
                <h5 className="text-[23px] font-regular max-md:text-[15px]">
                  Nhà Thông Minh đến từ Tập đoàn FPT
                </h5>
                <div className=" px-[200px] py-10 max-md:py-6 max-md:px-4 ">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6 w-[600px] flex flex-col max-md:w-full"
                    >
                      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-2 max-md:gap-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="rounded-xl max-md:text-[13px] max-md:h-[50px]  "
                                  placeholder="Tên đại lý"
                                  {...field}
                                />
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
                                <Input
                                  className="rounded-xl max-md:text-[13px] max-md:h-[50px]"
                                  placeholder="Số điện thoại"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid ">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="rounded-xl max-md:text-[13px] max-md:h-[50px]"
                                  placeholder="Địa chỉ"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid ">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="rounded-xl max-md:text-[13px] max-md:h-[50px]"
                                  placeholder="Email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid ">
                        <FormField
                          control={form.control}
                          name="note"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  className="h-[200px] rounded-xl max-md:text-[13px]  "
                                  placeholder="Ghi chú"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {isSubmitting ? (
                        <Button
                          type="reset"
                          className="w-[150px] py-6 mx-auto bg-orange-200"
                          onClick={handleFail}
                        >
                          Đăng ký
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="w-[150px] py-6 mx-auto "
                        >
                          Đăng ký
                        </Button>
                      )}
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
