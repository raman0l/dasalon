"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "../helper/Icon";
import Image from "next/image";
import { navItemsData } from "../helper/Helper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Navbar() {
  const [active, setActive] = useState(1);

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F2F2F2] max-w-14 flex flex-col gap-10 justify-between h-screen scrollbar-none fixed overflow-auto z-20">
      <div>
        <div>
          <div className="hidden md:flex gap-6">
            <div className="flex flex-col">
              <div className="flex justify-center items-center duration-400 ease-in-out">
                <div className="p-3">
                  <Image
                    className="min-w-8 bg-white rounded-full mx-auto"
                    src={"/assets/png/girl-logo.png"}
                    alt="girl-logo"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <div className="border-[#DCE0E5] border-1 w-[70%] justify-center flex items-center mx-auto my-3"></div>
              <div className="flex justify-center items-center duration-400 ease-in-out">
                <div className="p-3">
                  <Image
                    className="min-w-8 bg-white rounded-full mx-auto"
                    src={"/assets/png/salon-1.png"}
                    alt="salon-1"
                    width={32}
                    height={32}
                  />
                </div>
              </div>

              <div className="border-[#DCE0E5] border-1 w-[70%] justify-center flex items-center mx-auto my-3"></div>
              <TooltipProvider>
                {navItemsData.map((item) => (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.path}
                        onClick={() => setActive(item.id)}
                        className={`relative flex items-center p-4 transition cursor-pointer border-l-3 ${
                          active === item.id
                            ? "border-l-3 border-[#B751FB] text-[#B751FB] bg-white"
                            : "text-[#9594A0] border-[#F2F2F2]"
                        }`}
                      >
                        {item.icon}
                      </Link>
                    </TooltipTrigger>

                    <TooltipContent
                      side="right"
                      className="bg-black text-white text-xs rounded-[5px]"
                    >
                      {item.name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>

              <span className="absolute left-[70px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded">
                Notification
              </span>
            </div>
          </div>

          <button
            className="md:!hidden p-1 border-1 border-[#E4E7EB] rounded-full bg-white mx-auto flex justify-center items-center mt-5"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </button>
        </div>

        {open && (
          <div className="md:hidden  flex gap-6 h-screen">
            <div className="flex flex-col">
              <div className="hover:border-[#B751FB] border-[#F2F2F2] border-l-3 hover:bg-white flex justify-center items-center duration-400 ease-in-out">
                <Link className="p-3" href="/">
                  <Image
                    className="min-w-8 bg-white rounded-full mx-auto"
                    src={"/assets/png/girl-logo.png"}
                    alt="girl-logo"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="border-[#DCE0E5] border-1 w-[70%] justify-center flex items-center mx-auto my-3"></div>
              <div className="hover:border-[#B751FB] border-[#F2F2F2] border-l-3 hover:bg-white flex justify-center items-center duration-400 ease-in-out">
                <Link className="p-3" href="/">
                  <Image
                    className="min-w-8 bg-white rounded-full mx-auto"
                    src={"/assets/png/salon-1.png"}
                    alt="salon-1"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>

              <div className="border-[#DCE0E5] border-1 w-[70%] justify-center flex items-center mx-auto my-3 cursor-pointer"></div>
              {navItemsData.map((item) => {
                return (
                  <Link
                    href={"/"}
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`p-4 transition cursor-pointer  ${
                      active === item.id
                        ? "border-l-3 border-[#B751FB] text-[#B751FB] bg-white"
                        : "text-[#9594A0] cursor-pointer"
                    }`}
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="rounded-full mx-auto max-w-8 pb-5">
        <Image
          className="rounded-full p-1 bg-white"
          src={"/assets/png/women.png"}
          alt="women"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
