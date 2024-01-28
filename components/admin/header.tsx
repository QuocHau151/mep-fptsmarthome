"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCurrentUser } from "@/hook/use-current-user";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { PiXCircleThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Dropdown from "./ui/dropdown";
export default function Header() {
  const user = useCurrentUser();
  function createMarkup(messages: any) {
    return { __html: messages };
  }
  // const [messages, setMessages] = useState([
  //   {
  //     id: 1,
  //     image: "",
  //     title: "Congratulations!",
  //     message: "Your OS has been updated.",
  //     time: "1hr",
  //   },
  // ]);

  // const removeMessage = (value: number) => {
  //   setMessages(messages.filter((user) => user.id !== value));
  // };

  // const [notifications, setNotifications] = useState([
  //   {
  //     id: 1,
  //     profile: "",
  //     messages: "",
  //     time: "45 min ago",
  //   },
  // ]);

  // const removeNotification = (value: number) => {
  //   setNotifications(notifications.filter((user) => user.id !== value));
  // };
  const [search, setSearch] = useState(false);
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="w-full h-[60px] bg-gray-900 flex items-center justify-between px-10">
      <div className="flex items-center justify-start gap-10">
        <Link href="/">
          <Image src="/assets/logofptsh.png" width={200} height={100} alt="" />
        </Link>

        <div className="flex items-center   ">
          <ul className="flex items-center space-x-2  ">
            <li>
              <Link
                href="/apps/calendar"
                className="block text-white rounded-full  p-2 hover:bg-white-light/90 hover:bg-gray-700  bg-black "
              >
                <IoCalendarNumberOutline />
              </Link>
            </li>
            <li>
              <Link
                href="/apps/todolist"
                className="block text-white rounded-full  p-2 hover:bg-white-light/90 hover:bg-gray-700  bg-black"
              >
                <LuClipboardEdit />
              </Link>
            </li>
            <li>
              <Link
                href="/apps/chat"
                className="block text-white rounded-full  p-2 hover:bg-white-light/90 hover:bg-gray-700  bg-black"
              >
                <IoNotificationsCircleOutline />
              </Link>
            </li>
          </ul>
          <form className={""} onSubmit={() => setSearch(false)}>
            <div className=" ml-6 flex gap-4">
              <input
                type="text"
                className="bg-gray-800  outline-4 w-[300px] h-[40px] rounded-md px-4 text-white"
                placeholder="Search..."
              />
              <button type="button" className="  text-white">
                <IoSearchOutline className="mx-[-50px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className=" text-white ">
          <Dropdown
            offset={[0, 8]}
            placement={"bottom-end"}
            btnClassName="block p-2 rounded-full bg-black hover:bg-gray-700"
            button={<CiMail />}
          >
            <ul className="w-[300px] !py-0 text-xs text-dark dark:text-white-dark sm:w-[375px] bg-gray-700 rounded-2xl">
              <li className="mb-5" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full overflow-hidden rounded-t-md text-left pl-8 pt-4 text-white hover:!bg-transparent">
                  <h4 className="relative z-10 text-lg font-semibold">
                    Messages
                  </h4>
                </div>
              </li>
              {/* {messages.length > 0 ? (
                <>
                  <li onClick={(e) => e.stopPropagation()}>
                    {messages.map((message) => {
                      return (
                        <div
                          key={message.id}
                          className="flex items-center px-5 py-3"
                        >
                          <div
                            dangerouslySetInnerHTML={createMarkup(
                              message.image
                            )}
                          ></div>
                          <span className="px-3 dark:text-gray-500">
                            <div className="text-sm font-semibold dark:text-white-light/90">
                              {message.title}
                            </div>
                            <div>{message.message}</div>
                          </span>
                          <span className="whitespace-pre rounded bg-white-dark/20 px-1 font-semibold text-dark/60 ltr:ml-auto ltr:mr-2 rtl:ml-2 rtl:mr-auto dark:text-white-dark">
                            {message.time}
                          </span>
                          <button
                            type="button"
                            className="text-neutral-300 hover:text-danger"
                            onClick={() => removeMessage(message.id)}
                          >
                            <PiXCircleThin />
                          </button>
                        </div>
                      );
                    })}
                  </li>
                </>
              ) : (
                <li
                  className="flex items-center justify-center text-center p-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button type="button" className="">
                    <div className=" flex items-center justify-center gap-6 ">
                      <PiXCircleThin fill={true} className="h-10 w-10" />
                    </div>
                    No data available.
                  </button>
                </li>
              )} */}
            </ul>
          </Dropdown>
        </div>
        <div className=" text-white">
          <Dropdown
            offset={[0, 8]}
            placement={"bottom-end"}
            btnClassName="block p-2 rounded-full bg-black  hover:bg-gray-700 "
            button={
              <span>
                <CiBellOn />
              </span>
            }
          >
            <ul className="w-[400px] divide-y  bg-gray-700 rounded-2xl">
              <li onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between px-4 py-2 font-semibold">
                  <h4 className="text-lg">Notification</h4>
                  {/* {notifications.length ? (
                    <span className="">{notifications.length}New</span>
                  ) : (
                    ""
                  )} */}
                </div>
              </li>
              {/* {notifications.length > 0 ? (
                <>
                  {notifications.map((notification) => {
                    return (
                      <li
                        key={notification.id}
                        className=""
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="relative group flex items-center px-4 py-2 justify-between gap-4">
                          <div className="grid place-content-center rounded ">
                            <div className="relative h-12 w-12">
                              <img
                                className="h-12 w-12 rounded-full object-cover"
                                alt="profile"
                                src={`/assets/images/${notification.profile}`}
                              />
                              <span className="absolute bottom-0 right-[6px] block h-2 w-2 rounded-full bg-success"></span>
                            </div>
                          </div>
                          <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                            <div className="ltr:pr-3 rtl:pl-3">
                              <h6
                                dangerouslySetInnerHTML={{
                                  __html: notification.messages,
                                }}
                              ></h6>
                              <span className="block text-xs font-normal dark:text-gray-500">
                                {notification.time}
                              </span>
                            </div>
                            <button
                              type="button"
                              className="text-neutral-300 absolute right-2 top-[20px] hover:text-danger group-hover:opacity-100 mr-auto"
                              onClick={() =>
                                removeNotification(notification.id)
                              }
                            >
                              <PiXCircleThin />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li>
                    <div className="p-4">
                      <button className="btn btn-primary btn-small block w-full">
                        Read All Notifications
                      </button>
                    </div>
                  </li>
                </>
              ) : (
                <li onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent"
                  >
                    <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                      <LiaInfoCircleSolid
                        fill={true}
                        className="h-10 w-10 text-primary"
                      />
                    </div>
                    No data available.
                  </button>
                </li>
              )} */}
            </ul>
          </Dropdown>
        </div>
        <div className="">
          <Dropdown
            offset={[0, 8]}
            placement={"bottom-end"}
            btnClassName="block p-2 rounded-full bg-black "
            button={
              <Image
                className="h-[20px] w-[20px] rounded-full object-cover saturate-50 group-hover:saturate-100"
                src={user?.image || "/assets/icon/user.png"}
                alt="userProfile"
                width={40}
                height={40}
              />
            }
          >
            <ul className="w-[300px] font-semibold bg-gray-700 rounded-xl text-white px-4 mt-[-4px]">
              <li>
                <div className="flex items-center px-4 py-4 gap-6">
                  <Image
                    className="h-10 w-10 rounded-md object-cover"
                    src={user?.image || "/assets/icon/user.png"}
                    alt="userProfile"
                    width={40}
                    height={40}
                  />
                  <div className="truncate ">
                    <h4 className="text-base">{user?.name}</h4>
                    <button
                      type="button"
                      className="text-black/60 hover:text-primary "
                    >
                      {user?.email}
                    </button>
                  </div>
                </div>
              </li>
              <li className="py-4 hover:bg-gray-500">
                <Link
                  href="/users/profile"
                  className="flex items-center gap-2 text-white"
                >
                  <CiUser className="h-4.5 w-4.5 shrink-0 " />
                  Profile
                </Link>
              </li>
              <li className="py-4 hover:bg-gray-500">
                <Link
                  href="/apps/mailbox"
                  className="flex items-center gap-2 text-white"
                >
                  <CiMail className="h-4.5 w-4.5 shrink-0 " />
                  Inbox
                </Link>
              </li>
              <li className="py-4 hover:bg-gray-500">
                <Link
                  href="/auth/boxed-lockscreen"
                  className="flex items-center gap-2 text-white"
                >
                  <CiLock className="h-4.5 w-4.5 shrink-0 " />
                  Lock Screen
                </Link>
              </li>
              <li className=" border-t border-white-light hover:bg-gray-500">
                <Button
                  onClick={handleLogout}
                  className="!py-3 text-danger flex items-center gap-2"
                >
                  <CiLogout className="h-4.5 w-4.5 shrink-0 rotate-90 " />
                  Sign Out
                </Button>
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
