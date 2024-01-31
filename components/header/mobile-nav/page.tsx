"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { RefObject } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStore } from "@/store/useStore";
interface Product {
  id: number;
  name: string;
  link: string;
}
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { Label } from "@radix-ui/react-label";
import { useCurrentUser } from "@/hook/use-current-user";
import { logout } from "@/actions/logout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LoginButton } from "@/components/auth/login-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const products: Product[] = [
  {
    id: 1,
    name: "Đèn LED Downlight",
    link: "/den-thong-minh/den-led-downlight",
  },
  { id: 2, name: "Đèn LED Bulb", link: "/den-thong-minh/den-led-bulb" },
  { id: 3, name: "Đèn LED Panel", link: "/den-thong-minh/den-led-panel" },
  { id: 4, name: "Đèn LED Dây", link: "/den-thong-minh/den-led-day" },
  {
    id: 5,
    name: "Đèn LED Tracklight",
    link: "/den-thong-minh/den-led-tracklight",
  },
  { id: 6, name: "Cảm biến cửa", link: "/cam-bien/cam-bien-cua" },
  {
    id: 7,
    name: "Cảm biến chuyển dộng",
    link: "/cam-bien/cam-bien-chuyen-dong",
  },
  {
    id: 8,
    name: "Cảm biến chuyển dộng âm trần",
    link: "/cam-bien/cam-bien-chuyen-dong-am-tran",
  },
  { id: 9, name: "Cảm biến khói", link: "/cam-bien/cam-bien-khoi" },
  {
    id: 10,
    name: "Công Tắc Cảm Ứng Athena",
    link: "/cong-tac-thong-minh/cong-tac-cam-ung-athena",
  },
  {
    id: 11,
    name: "Công Tắc Cảm Ứng Hera",
    link: "/cong-tac-thong-minh/cong-tac-cam-ung-hera",
  },
  {
    id: 12,
    name: "Nút Bấm Ngữ Cảnh Không Dây",
    link: "/cong-tac-thong-minh/nut-bam-ngu-canh-khong-day",
  },
  {
    id: 13,
    name: "Động Cơ Rèm Thông Minh",
    link: "/bo-rem-cua-thong-minh/dong-co-rem-thong-minh",
  },
  {
    id: 14,
    name: "Bộ Điều Khiển Rèm Cửa",
    link: "/bo-rem-cua-thong-minh/bo-dieu-khien-rem-cua",
  },
  { id: 15, name: "Ray Rèm Điện", link: "/bo-rem-cua-thong-minh/ray-rem-dien" },
  {
    id: 16,
    name: "Công Tắc Điều Khiển Rèm Cửa",
    link: "/bo-rem-cua-thong-minh/cong-tac-dieu-khien-rem-cua",
  },
  {
    id: 17,
    name: "Ổ Cắm Thông Minh",
    link: "/phu-kien-thong-minh/o-cam-thong-minh",
  },
  {
    id: 18,
    name: "Bộ Điều Khiển Hồng Ngoại",
    link: "/phu-kien-thong-minh/bo-dieu-khien-hong-ngoai",
  },
  {
    id: 19,
    name: "Ổ Cắm Mặt Kính Âm Tường",
    link: "/phu-kien-thong-minh/o-cam-mat-kinh-am-tuong",
  },
  { id: 20, name: "USB ZigBee", link: "/phu-kien-thong-minh/usb-zigbee" },
  {
    id: 21,
    name: "Khoá Cửa Vân Tay Yale",
    link: "/khoa-cua-thong-minh/khoa-cua-van-tay-yale",
  },
  {
    id: 22,
    name: "Khoá Cửa Thẻ Từ Yale",
    link: "/khoa-cua-thong-minh/khoa-cua-the-tu-yale",
  },
  {
    id: 23,
    name: "Camera SE FPT",
    link: "/thiet-bi-an-ninh-thong-minh/camera-se-fpt",
  },
];
function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
): void {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
export default function MobileNav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => setSuggestionsVisible(false));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSuggestions(filteredProducts);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Do something with searchTerm
  };
  const user = useCurrentUser();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-black w-full h-min flex items-center justify-between px-10 py-4">
      <Link href="/" className="mr-[]">
        <Image src="/assets/logofptsh.png" width={205} height={100} alt="" />
      </Link>
      <div className="flex items-center justify-center text-white gap-4">
        <div className="">
          <CiSearch size={24} />
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative bg-black outline-none p-0">
                <Image
                  src="/assets/icon/cart.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="absolute top-0 -right-[10px] bg-orange-500 w-[15px] h-[15px] text-[10px] text-white rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-[20px]  text-center w-full h-min mt-4  rounded-xl  p-2 border-b-[1px] border-black bg-slate-100">
                  Cart
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div>
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-col ">
                      <div className="flex items-center justify-between p-2 border-b-[1px] w-full">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.image}
                            width={40}
                            height={40}
                            alt=""
                          />
                          <div>
                            <h5 className="text-[14px] font-semibold ">
                              {item.name}
                            </h5>
                            <p className="text-[12px]">
                              {item.type} {item.button} {item.color}
                              {item.connect}
                              {item.power} {item.type_key}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-orange-500 font-semibold">
                            {item.price}
                          </p>
                          <div className="flex items-center gap-2 text-[12px]">
                            <button
                              className="border-[1px] border-black px-[4px] hover:bg-orange-500"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button
                              className="border-[1px] border-black px-[4px]  hover:bg-orange-500"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="text-[12px] hover:text-orange-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <SheetFooter className="flex items-center mt-6">
                <SheetClose asChild>
                  {/* checkout */}
                  <Button type="submit">
                    <Link href="/checkout">Checkout</Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-black">
                <CiMenuFries size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 pt-[30px] ">
                <Link
                  className="text-left text-black font-medium text-[16px] "
                  href="/"
                >
                  Giới thiệu
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black font-medium text-[16px] py-0">
                        Sản phẩm
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-gray-200 w-full h-[200px]"></div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black font-medium text-[16px] py-">
                        Giải pháp
                      </div>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
                <Link
                  className="text-left text-black font-medium text-[16px]"
                  href="/can-ho-mau"
                >
                  Căn hộ mẫu
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black font-medium text-[16px]">
                        Hỗ trợ
                      </div>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
                {user ? (
                  <div className="relative flex  items-center group">
                    <div className="flex items-center outline-0 gap-4 ">
                      <Avatar className="w-[35px] h-[35px] flex items-center">
                        <AvatarImage
                          className=""
                          src={user.image || "/assets/icon/user.png"}
                        />
                      </Avatar>
                      <LoginButton>
                        <span className="text-[15px] font-medium text-black bg-white cursor-pointer hover:bg-gray-100">
                          {user.name}
                        </span>
                      </LoginButton>
                    </div>
                    <div className="absolute w-min h-min bg-white rounded-lg top-[30px] right-0 z-50 px-4 py-4 flex items-start flex-col justify-center gap-3 invisible group-hover:visible">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="hover:bg-orange-500"
                            variant="outline"
                          >
                            Edit Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="name"
                                value={user.name || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="email" className="text-right">
                                Email
                              </Label>
                              <Input
                                id="username"
                                value={user.email || ""}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="phone" className="text-right">
                                Phone
                              </Label>
                              <Input
                                id="name"
                                value=""
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="address" className="text-right">
                                Address
                              </Label>
                              <Input
                                id="name"
                                value=""
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Button className="w-full bg-white text-black border-[1px] border-slate-200 hover:bg-orange-500">
                        <Link href="/checkout">Checkout</Link>
                      </Button>
                      <Button
                        onClick={handleLogout}
                        className="w-full bg-white text-black border-[1px] border-slate-200 hover:bg-orange-500"
                      >
                        Log Out
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center  ">
                    <Image
                      className="object-contain"
                      src="/assets/icon/user.png"
                      width={24}
                      height={24}
                      alt=""
                    />
                    <LoginButton>
                      <Button className="text-p bg-white hover:bg-orange-500">
                        Đăng Nhập
                      </Button>
                    </LoginButton>
                  </div>
                )}
              </div>
              {/* <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
