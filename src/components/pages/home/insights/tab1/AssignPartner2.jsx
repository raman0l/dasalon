"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
import AddNewVisit from "@/components/comman/AddNewVisit";
import AddFollowUp from "@/components/comman/AddFollowUp";
import AddNewVisitReport from "@/components/comman/AddNewVisitReport";
import AssignPartner from "@/components/comman/AssignPartner";

const getDisplayName = (value, data) => {
  if (!value) return "";
  const found = data.find((item) => item.toLowerCase() === value);
  return found || "";
};

function AssignPartner2() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [tc, setTc] = useState("");
  const [rm, setRm] = useState("");
  const [fe, setFe] = useState("");
  const router = useRouter();

  const handleSelect = (e, id) => {
    e.preventDefault();
    setActiveItem(id);

    if (id === 1) router.push("/partner");
    if (id === 2) router.push("/report");
    if (id === 6) setOpenAssign(true);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* ✅ Proper clickable trigger */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="!p-0 w-full absolute bg-transparent hover:bg-transparent text-[#B751FB] text-sm font-semibold hover:border-none border-none"
        ></Button>
      </SheetTrigger>

      <SheetContent className="max-w-md">
        <SheetHeader className="border-b border-[#E4E7EB] lg:p-6 md:p-4 p-3">
          <SheetTitle className="flex gap-2 justify-between items-center">
            <span className="font-semibold text-[#030712]">Critical Task</span>
          </SheetTitle>
        </SheetHeader>

        {/* ---------- Main Content ---------- */}
        <div className="overflow-auto pb-10">
          {/* ---------- Salon Info Section ---------- */}
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
                    className="!text-xs !text-[#030712] font-normal"
                    title={"123 Sparkle Ave, Glam City"}
                  />
                </div>
                <div className="flex gap-1 items-center">
                  <CallIcon />
                  <Pragraph
                    className="!text-xs !text-[#030712] font-normal"
                    title={"55523-32324"}
                  />
                </div>
              </div>

              {/* ---------- Dropdown Menu ---------- */}
              <DropdownMenu className="p-0">
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2 cursor-pointer !p-0 !bg-transparent !shadow-none text-[#808188]">
                    <MoreVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-50 bg-white border border-[#808188] p-0 mr-10">
                  <DropdownMenuItem
                    onSelect={(e) => handleSelect(e, 1)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold ${
                      activeItem === 1
                        ? "bg-[#eaccfe]"
                        : "bg-white hover:bg-[#eaccfe]"
                    }`}
                  >
                    <ViewIcon />
                    View as Partner
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onSelect={(e) => handleSelect(e, 2)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold ${
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
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold ${
                      activeItem === 3
                        ? "bg-[#eaccfe]"
                        : "bg-white hover:bg-[#eaccfe]"
                    }`}
                  >
                    <AddVisitIcon />
                    Add Visit
                    <AddNewVisit />
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onSelect={(e) => handleSelect(e, 4)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold relative ${
                      activeItem === 4
                        ? "bg-[#eaccfe]"
                        : "bg-white hover:bg-[#eaccfe]"
                    }`}
                  >
                    <AddFollowUpIcon />
                    Add Follow Up
                    <AddFollowUp />
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onSelect={(e) => handleSelect(e, 5)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold ${
                      activeItem === 5
                        ? "bg-[#eaccfe]"
                        : "bg-white hover:bg-[#eaccfe]"
                    }`}
                  >
                    <AddVisitIcon />
                    Add Visit Report
                    <AddNewVisitReport />
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onSelect={(e) => handleSelect(e, 6)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold relative ${
                      activeItem === 6
                        ? "bg-[#eaccfe]"
                        : "bg-white hover:bg-[#eaccfe]"
                    }`}
                  >
                    <AssignPartnerIcon />
                    Assign Partner
                    <AssignPartner />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* ---------- Info Row ---------- */}
          <div className="flex gap-2 py-4 border-b border-[#E4E7EB]">
            {textsData.map((item, index) => (
              <Pragraph
                key={index}
                className={`${item.color} ${
                  index === 1
                    ? "border-x border-[#808188] !text-xs lg:px-6 md:px-4 px-3"
                    : "!text-xs font-semibold leading-[166%] tracking-[-0.24px] lg:px-6 md:px-4 px-3"
                }`}
                title={item.label}
              />
            ))}
          </div>

          {/* ---------- Assign Partner Section ---------- */}
          <div className="border-t border-[#E4E7EB] flex flex-col px-4">
            <Heading
              className="lg:!text-base !text-sm font-semibold text-[#030712] lg:py-5 py-4"
              title="Assign Partner"
            />

            {/* TC */}
            <div className="flex flex-col gap-2 mb-3">
              <span className="font-semibold text-sm">
                Territory Coordinator (TC)
              </span>
              <Select value={tc} onValueChange={setTc}>
                <SelectTrigger className="w-full border p-2 rounded mt-1">
                  <SelectValue placeholder="Select TC" />
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

            {/* RM */}
            <div className="flex flex-col gap-2 mb-3">
              <span className="font-semibold text-sm">
                Relationship Manager (RM)
              </span>
              <Select value={rm} onValueChange={setRm}>
                <SelectTrigger className="w-full border p-2 rounded mt-1">
                  <SelectValue placeholder="Select RM" />
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

            {/* FE */}
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm">
                Field Executive (FE)
              </span>
              <Select value={fe} onValueChange={setFe}>
                <SelectTrigger className="w-full border p-2 rounded mt-1">
                  <SelectValue placeholder="Select FE" />
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

        {/* ---------- Footer ---------- */}
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
  );
}
export default AssignPartner2;
