"use client";
import React, { useState } from "react";
import { SiZalo } from "react-icons/si";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formZaLoSchema } from "@/schemas";
import { FaPhoneAlt } from "react-icons/fa";
import { createConnectZaLo } from "@/actions/connect-zalo";

export default function SocialConnect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formZaLoSchema>>({
    resolver: zodResolver(formZaLoSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formZaLoSchema>) => {
    setIsSubmitting(true);
    try {
      await createConnectZaLo(values);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
    window.open(`https://zalo.me/0886828386`, "_blank");
  };
  return (
    <div className="fixed z-50 bottom-10 right-6 cursor-pointer flex flex-col gap-6 max-md:bottom-3 max-md:right-3 max-md:gap-3">
      <a
        href="tel:0886828386"
        className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full animate-bounce"
      >
        <FaPhoneAlt color={"white"} size={"22px"} />
      </a>
      <a
        href="https://zalo.me/0886828386"
        target="blank"
        className="bg-blue-500 flex items-center justify-center w-12 h-12 rounded-full animate-bounce"
      >
        <SiZalo color={"white"} size={"25px"} />
      </a>
    </div>
  );
}
