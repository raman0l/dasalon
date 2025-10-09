"use client";
import React, { useState } from "react";
import Heading from "@/components/comman/Heading";
import Pragraph from "@/components/comman/Pragraph";
import {
  menuItemsData,
  namesData,
  textsData,
  timesData,
} from "@/components/helper/Helper";
import { CalendarIcon, CallIcon, LoctionIcon } from "@/components/helper/Icon";
import { Button } from "@/components/ui/button";
import MyCheckbox from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ClockIcon, MoreVerticalIcon } from "lucide-react";
import Image from "next/image";

function NewVisit() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [status, setStatus] = useState("");

  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  });
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className={
              "!P-0 bg-transparent absolute w-full hover:bg-transparent cursor-pointer "
            }
          ></Button>
        </SheetTrigger>
        <SheetContent className="bg-white gap-0">
          <SheetHeader
            className={
              "border-b-1 border-[#E4E7EB] lg:p-6 md:p-4 p-3 gap-0 flex flex-col"
            }
          >
            <SheetTitle className={"flex gap-2 justify-between items-center"}>
              <Pragraph
                className="font-semibold leading-[160%] tracking-[-0.145px] !text-[#030712]"
                title={"Growth Task"}
              />
            </SheetTitle>
          </SheetHeader>

          <div className="md:w-[400px] w-[320px] overflow-auto pb-15">
            <div>
              <div className="flex gap-2 lg:px-6 md:px-4 px-3 pt-5">
                <Image
                  className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] object-cover rounded-md"
                  src={"/assets/png/salon-2.png"}
                  alt="salon"
                  width={32}
                  height={32}
                />
                <div className="flex gap-2 justify-between w-full">
                  <div className="flex flex-col gap-[2px]">
                    <Pragraph
                      className="!text-[#030712] font-semibold leading-[166%] tracking-[-0.24px]"
                      title={"Glamour Glow Studio"}
                    />
                    <div className="flex gap-1 items-center">
                      <LoctionIcon />
                      <Pragraph
                        className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]"
                        title={"123 Sparkle Ave, Glam City"}
                      />
                    </div>
                    <div className="flex gap-1 items-center">
                      <CallIcon />
                      <Pragraph
                        className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]"
                        title={"55523-32324"}
                      />
                    </div>
                  </div>
                  <DropdownMenu className={"p-0"}>
                    <DropdownMenuTrigger asChild>
                      <Button className="flex items-center gap-2 cursor-pointer !p-0 !bg-transparent !shadow-none text-[#808188]">
                        <MoreVerticalIcon />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-50 bg-white border-1 border-[#808188] p-0 mr-10">
                      {menuItemsData.map((item) => {
                        return (
                          <DropdownMenuItem
                            key={item.id}
                            className="flex items-center gap-2 hover:!bg-[#eaccfe] duration-300 ease-in-out"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              {/* Texts Data */}
              <div className="flex gap-2 py-[17px_15px]">
                {textsData.map((item, index) => (
                  <Pragraph
                    key={index}
                    className={`${item.color} ${
                      index === 1
                        ? "border-x !border-[#808188] !text-xs lg:px-6 md:px-4 px-3"
                        : "!text-xs font-semibold leading-[166%] tracking-[-0.24px] lg:px-6 md:px-4 px-3"
                    }`}
                    title={item.label}
                  />
                ))}
              </div>
            </div>
            <div className="border-t border-[#E4E7EB] flex flex-col gap-50">
              <div className="lg:px-5 md:px-4 px-3">
                <Heading
                  className={
                    "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] lg:py-5 py-4"
                  }
                  title={"Schedule New Visit"}
                />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Pragraph
                      className={
                        "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                      }
                      title={"Assign to FE"}
                    />
                    <Select>
                      <SelectTrigger className="w-full border border-[#E4E4E7] p-2 rounded">
                        <SelectValue
                          className={
                            "placeholder:text-xs placeholder:text-[#18181B] !w-full flex justify-start"
                          }
                          placeholder="John smith"
                        />
                      </SelectTrigger>

                      <SelectContent className="bg-white rounded shadow-md p-0">
                        <SelectItem
                          className="hover:!bg-[#F1DCFF] rounded px-2 py-1 w-full"
                          value="Sanya Desai"
                        >
                          Sanya Desai
                        </SelectItem>
                        <SelectItem
                          className="hover:!bg-[#F1DCFF] rounded px-2 py-1 w-full"
                          value="Priya Nair"
                        >
                          Priya Nair
                        </SelectItem>
                        <SelectItem
                          className="hover:!bg-[#F1DCFF] rounded px-2 py-1 w-full"
                          value="Meera Sharma"
                        >
                          Meera Sharma
                        </SelectItem>
                        <SelectItem
                          className="hover:!bg-[#F1DCFF] rounded px-2 py-1 w-full"
                          value="Ishita Bose"
                        >
                          Ishita Bose
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-[10px] p-2">
                    <MyCheckbox
                      label="Join visit with RM"
                      className={"w-5 h-5"}
                    />
                  </div>

                  <DropdownMenu
                    open={openDropdown === "date"}
                    onOpenChange={(isOpen) =>
                      setOpenDropdown(isOpen ? "date" : null)
                    }
                  >
                    <DropdownMenuTrigger asChild>
                      <Button className="flex justify-between items-center w-full border border-[#E4E4E7] rounded-md px-3 py-2 text-sm font-medium bg-white hover:bg-gray-50 text-[#18181B]">
                        {selectedDate || "Pick a date"}
                        <CalendarIcon className="w-5 h-5 text-gray-600" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-52 bg-white border border-gray-300 rounded shadow-md p-1">
                      {dates.map((date) => (
                        <DropdownMenuItem
                          key={date}
                          className="text-sm px-3 py-2 hover:bg-[#F1DCFF] cursor-pointer rounded text-[#18181B]"
                          onClick={() => setSelectedDate(date)}
                        >
                          {date}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu
                    open={openDropdown === "time"}
                    onOpenChange={(isOpen) =>
                      setOpenDropdown(isOpen ? "time" : null)
                    }
                  >
                    <DropdownMenuTrigger asChild>
                      <Button className="flex justify-between items-center w-full border border-[#E4E4E7] rounded-md px-3 py-1.5 text-sm font-medium bg-white hover:bg-gray-50 text-[#18181B]">
                        {selectedTime || "Pick a Time slot"}
                        <ClockIcon className="w-4 h-4 text-gray-600" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-40 bg-white border border-gray-300 rounded shadow-md p-1">
                      {timesData.map((t) => (
                        <DropdownMenuItem
                          key={t}
                          className="text-sm px-2 py-1 hover:bg-[#F1DCFF] cursor-pointer rounded"
                          onClick={() => setSelectedTime(t)}
                        >
                          {t}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className={
                        "lg:text-sm text-xsfont-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                      }
                    >
                      Remarks
                    </label>
                    <textarea
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      placeholder="Enter any remarks or additional notes"
                      className={
                        "placeholder:text-sm placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-gray-400 rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter className="!flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
            >
              Submit
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default NewVisit;
