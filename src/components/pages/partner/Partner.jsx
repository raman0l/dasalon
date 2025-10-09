"use client";
import React, { useState } from "react";
import Heading from "@/components/comman/Heading";

import {
  FilterIcon,
  ProspectiveIcon,
  RegisteredIcon,
} from "@/components/helper/Icon";
import AddNewPartnerSheet from "./AddNewPartner";
import Pragraph from "@/components/comman/Pragraph";
import { MoreHorizontal, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  menuItemstab2Data,
  RegisteredPartnerData,
} from "@/components/helper/Helper";
import Registered from "../insights/tab1/Registered";

function Partner() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [statusFilter, setStatusFilter] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [activeRow, setActiveRow] = useState(null);

  const tabData = RegisteredPartnerData.filter((row) => {
    const matchesStatus = statusFilter
      ? row.subscription === statusFilter
      : true;
    const matchesSearch = row.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Partner"}
            />
          </div>
        </div>
        <div>
          <div className="border-b-1 border-[#DCE0E5]">
            {/* Tabs */}
            <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] min-[420px]:items-center max-[420px]:flex-col">
              <div className="flex gap-7">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 border-b-3 ${
                    activeTab === "tab1"
                      ? "border-[#B751FB] text-[#B751FB] font-semibold border-b-3"
                      : "border-transparent text-[#808188] border-b"
                  }`}
                >
                  {activeTab === "tab1" ? (
                    <RegisteredIcon filled />
                  ) : (
                    <RegisteredIcon />
                  )}{" "}
                  Registered
                </button>

                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 border-b-3 ${
                    activeTab === "tab2"
                      ? "border-[#B751FB] text-[#B751FB] font-semibold border-b-3"
                      : "border-transparent text-[#808188] border-b-3"
                  }`}
                >
                  {activeTab === "tab2" ? (
                    <ProspectiveIcon filled />
                  ) : (
                    <ProspectiveIcon />
                  )}{" "}
                  Prospective
                </button>
              </div>

              <div className="flex items-center gap-4 max-[420px]:justify-end max-[420px]:pb-2">
                {activeTab === "tab1" && (
                  <div className="flex items-center gap-4 max-[420px]:justify-end max-[420px]:pb-2">
                    <div className="flex items-center gap-2 !text-sm">
                      <span className="w-4 h-4 rounded-full bg-[#f00]"></span>
                      <Pragraph
                        className={
                          "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                        }
                        title={"Critical"}
                      />
                    </div>
                    <div className="flex items-center gap-2 !text-sm">
                      <span className="w-4 h-4 rounded-full bg-[#F5640A]"></span>
                      <Pragraph
                        className={
                          "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                        }
                        title={"Growth"}
                      />
                    </div>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className="bg-[#B751FB] hover:bg-[#B751FB] cursor-pointer hoover:shadow !text-sm font-semibold leading-[142%] tracking-[-0.28px] py-1 flex items-center gap-1 rounded p-2 text-white">
                    <span className="text-xl text-white">+ </span>Add Partner
                    <AddNewPartnerSheet />
                  </div>
                )}
              </div>
            </div>
          </div>
          {activeTab === "tab1" && (
            <div className="w-full lg:px-6 md:px-5 px-4">
              {/* Filter Section */}
              <div className="flex gap-2 justify-between lg:py-6 py-4 max-[538px]:flex-col">
                <div className="relative lg:w-[290px] md:w-[230px] w-[160px]">
                  <Search
                    className="absolute right-3 top-[18px] -translate-y-1/2 text-[#D9DDE3]"
                    size={18}
                  />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px] border border-[#D9DDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B751FB] placeholder:text-sm"
                  />
                </div>
                <div className="relative inline-block">
                  <div
                    onClick={() => setShowCalendar((prev) => !prev)}
                    className="flex items-center gap-2 border border-[#A8A9AE] rounded-md lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px] cursor-pointer"
                  >
                    <FilterIcon className="h-4 w-4 text-[#A8A9AE]" />
                    <span className="text-sm text-[#A8A9AE]">
                      {date ? date.toDateString() : "Filter by date"}
                    </span>
                  </div>

                  {showCalendar && (
                    <div className="absolute mt-2 right-0 z-50 bg-white border rounded-md shadow-lg p-2">
                      <Calendar
                        mode="single"
                        selected={date1}
                        onSelect={(day) => {
                          setDate(day);
                          setShowCalendar(false);
                        }}
                        captionLayout="dropdown"
                        modifiers={{ today: new Date() }}
                        modifiersClassNames={{
                          today: "bg-gray-200 text-gray-800 rounded-md",
                        }}
                        classNames={{
                          day_today: "text-gray-700 font-semibold",
                          day: "hover:bg-gray-100 rounded-md",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto custom-scrollbar border-2 border-[#DCE0E5] rounded-[5px]">
                <Table className="min-w-[1200px]">
                  <TableHeader>
                    <TableRow className="bg-[#F9FAFB] text-[#808188] font-semibold text-xs lg:text-sm">
                      <TableHead className="py-2 px-3 text-left">
                        Salon Name
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        City / Area
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        Health
                      </TableHead>

                      <TableHead className="py-2 px-3 text-left">
                        Appt.
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        Sales
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        Tc Name
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        RM Name
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        FE Name
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        Last Visit
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        Next Visit
                      </TableHead>
                      <TableHead className="py-2 px-3 text-left">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {tabData.length > 0 ? (
                      RegisteredPartnerData.map((row, idx) => (
                        <TableRow
                          key={`${row.id}-${idx}`}
                          onClick={() => setActiveRow(idx)}
                          className={`border-b border-[#8081889a] border-l-transparent border-l-[3px] ${
                            activeRow === idx
                              ? "bg-[#EBD9FF] !border-l-[#b751fb]"
                              : "bg-white hover:bg-[#EBD9FF] hover:border-l-[#b751fb]"
                          }`}
                        >
                          <TableCell className="inline-flex items-center gap-2 py-2 px-3 cursor-pointer w-[190px]">
                            <Image
                              src={row.img}
                              alt="salon"
                              width={24}
                              height={24}
                              className="h-6 w-6 rounded-full"
                            />
                            <span>{row.name}</span>
                            <Registered />
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.address}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.health}
                          </TableCell>
                          <TableCell className="py-2 px-3 flex gap-1">
                            {row.issue.map((item, i) => (
                              <span
                                key={i}
                                className={`border py-[1px] px-[7px] rounded-full ${
                                  i === 0
                                    ? "border-[#FF0000] bg-[rgba(255,136,136,0.34)]"
                                    : "border-[#F5640A] bg-[#F3CED6]"
                                }`}
                              >
                                {item.val}
                              </span>
                            ))}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.sales}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.tcname}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.rmname}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.fename}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.lastVisit}
                          </TableCell>
                          <TableCell className="py-2 px-3">
                            {row.nextVisit}
                          </TableCell>

                          <TableCell className="py-2 px-3 flex justify-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="p-0 !bg-transparent !shadow-none text-black focus:outline-none focus:ring-0 active:outline-none"
                                >
                                  <MoreHorizontal />
                                </Button>
                              </DropdownMenuTrigger>

                              <DropdownMenuContent className="w-40 bg-white border border-[#808188] !p-0 mr-10">
                                {menuItemstab2Data.map((item) => (
                                  <DropdownMenuItem
                                    onClick={() =>
                                      navigator.clipboard.writeText(row.id)
                                    }
                                    key={item.id}
                                    className="flex items-center gap-2 hover:!bg-[#F1DCFF] duration-300 cursor-pointer"
                                  >
                                    {item.icon}
                                    <span>{item.label}</span>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={15} className="text-center py-6">
                          No data available
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Partner;
