"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Pragraph from "@/components/comman/Pragraph";
import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  CallIcon,
  LoctionIcon,
  ViewIcon,
  ViewReportIcon,
} from "@/components/helper/Icon";
import { MoreVerticalIcon } from "lucide-react";
import {
  nameData,
  namesData,
  nametcData,
  textsData,
} from "@/components/helper/Helper";
import Heading from "@/components/comman/Heading";

const getDisplayName = (value, data) => {
  if (!value) return "";
  const found = data.find((item) => item.toLowerCase() === value);
  return found || "";
};

function AssignPartner() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // ✅ Separate states for each select
  const [tc, setTc] = useState("");
  const [rm, setRm] = useState("");
  const [fe, setFe] = useState("");

  const handleSelect = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="!p-0 w-[400px] left-0 top-0 absolute bg-transparent hover:bg-transparent text-[#B751FB] text-sm font-semibold hover:border-none border-none"
          ></Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="border-b border-[#E4E7EB] lg:p-6 md:p-4 p-3">
            <SheetTitle className="flex gap-2 justify-between items-center">
              <span className="font-semibold text-[#030712]">
                Assign Partner
              </span>
            </SheetTitle>
          </SheetHeader>

          <div className="overflow-auto pb-10">
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
                  <DropdownMenu className="p-0">
                    <DropdownMenuTrigger asChild>
                      <Button className="flex items-center gap-2 cursor-pointer !p-0 !bg-transparent !shadow-none text-[#808188]">
                        <MoreVerticalIcon />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-50 bg-white border border-[#808188] p-0 mr-10">
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 1)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 1
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:!bg-[#eaccfe]"
                        }`}
                      >
                        <div className="flex items-center gap-2 ">
                          <ViewIcon />
                          View as partner
                        </div>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 2)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 2
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <ViewReportIcon />
                        View Report
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 3)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 3
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AddVisitIcon />
                        Add Visit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 4)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 4
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AddFollowUpIcon />
                        Add Follow Up
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 5)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 5
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AddVisitIcon />
                        Add Visit Report
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 6)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 6
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AssignPartnerIcon />
                        Assign Partner
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div>
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
            </div>
            <div className="border-t border-[#E4E7EB] flex flex-col px-4">
              <Heading
                className="lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] lg:py-5 py-4"
                title="Assign Partner"
              />

              {/* Territory Coordinator */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm">
                  Territory Coordinator (TC)
                </span>
                <Select value={tc} onValueChange={setTc}>
                  <SelectTrigger className="w-full border p-2 rounded mt-1">
                    <SelectValue placeholder="John Smith" />
                    <span>{getDisplayName(tc, nameData)}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {nametcData.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Relationship Manager */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm">
                  Relationship Manager (RM)
                </span>
                <Select value={rm} onValueChange={setRm}>
                  <SelectTrigger className="w-full border p-2 rounded mt-1">
                    <SelectValue placeholder="Priya Sharma" />
                    <span>{getDisplayName(rm, nameData)}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {nameData.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Field Executive */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm">
                  Field Executive (FE)
                </span>
                <Select value={fe} onValueChange={setFe}>
                  <SelectTrigger className="w-full border p-2 rounded mt-1">
                    <SelectValue placeholder="Anita Desai" />
                    <span>{getDisplayName(fe, nameData)}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {namesData.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <SheetFooter className="!flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold text-[#030712]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold !bg-[#B751FB] text-white"
            >
              Submit
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default AssignPartner;
