"use client";
import React, { useState } from "react";
import Heading from "@/components/comman/Heading";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  appointmentsData,
  filtersData,
  statusSummaryData,
} from "@/components/helper/Helper";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import AddNewVisitReport from "@/components/comman/AddNewVisitReport";
import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  PinIcon,
  ViewIcon,
  ViewReportIcon,
} from "@/components/helper/Icon";
import StatusBadge from "@/components/comman/StatusBadge3";
import Saidbar from "../partner/registered/Saidbar";

function Appointment() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [activeRow, setActiveRow] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleSelect = (e, id) => {
    setActiveItem(id);
  };

  const tabs = ["All", "Today", "Upcoming", "New", "Past"];

  return (
    <div>
      <div className="border-b-1 border-[#DCE0E5]">
        <div className="p-6">
          <Heading
            className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
            title={"Appointment"}
          />
        </div>
      </div>

      <div className="px-5 flex flex-col lg:gap-5 md:gap-4 gap-3 lg:pt-5 pt-4">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-col gap-3 text-sm text-[#030712]">
            <span className="font-medium">
              Total Appointments: <span className="font-semibold">50</span>
            </span>

            <div className="flex flex-wrap  gap-3">
              {statusSummaryData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span
                    className="w-2 h-full rounded-full border"
                    style={{
                      backgroundColor: item.color, // circle fill
                      borderColor: item.border, // circle border
                    }}
                  ></span>
                  <span className="text-sm text-[#030712] whitespace-nowrap">
                    {item.label}: {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full sm:w-[250px]">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />

            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 text-sm border-[#E4E7EB] focus-visible:ring-[#A855F7]"
            />
          </div>
        </div>
        {/* Filter Buttons */}
        <div className="flex lg:gap-5 md:gap-4 gap-3 xl:flex-row flex-col">
          <div className="flex gap-2 sm:flex-nowrap flex-wrap mt-2 bg-[#E4E7EB] rounded-md p-1 mr-auto">
            {tabs.map((tab) => (
              <Button
                key={tab}
                size="sm"
                variant={activeTab === tab ? "default" : "outline"}
                className={`text-xs rounded-md hover:bg-transparen shadow-none cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#FFFFFF] text-black"
                    : "bg-transparent  border-none"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          {/* Filter Selects */}
          <div className="flex flex-wrap w-full mt-3 items-center gap-3">
            {/* First two selects */}
            <div className="flex gap-3 flex-wrap">
              {filtersData.slice(0, 3).map((filter, i) => (
                <Select key={i}>
                  <SelectTrigger className="w-[150px] sm:w-[180px] h-9 text-sm border-[#E4E7EB]">
                    <SelectValue placeholder={filter.label} />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.options.map((opt, j) => (
                      <SelectItem key={j} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>

            {/* Spacer to push last select to end */}
            <div className="flex-1" />

            {/* Last select */}
            {filtersData[2] && (
              <Select>
                <SelectTrigger className="w-[150px] sm:w-[180px] h-9 text-sm border-[#E4E7EB]">
                  <SelectValue placeholder={filtersData[2].label} />
                </SelectTrigger>
                <SelectContent>
                  {filtersData[2].options.map((opt, j) => (
                    <SelectItem key={j} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar border-2 border-[#DCE0E5] rounded-[5px] h-full">
          <Table className="min-w-[1200px]">
            <TableHeader>
              <TableRow className="bg-[#F9FAFB] text-[#808188] font-semibold text-xs lg:text-sm">
                <TableHead className="py-2 px-3 text-left"></TableHead>

                <TableHead className="py-2 px-3 text-left">
                  Appointment ID
                </TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Customer Name
                </TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Date & Time
                </TableHead>
                <TableHead className="py-2 px-3 text-left">Status</TableHead>
                <TableHead className="py-2 px-3 text-left">Amount</TableHead>
                <TableHead className="py-2 px-3 text-left">Staff</TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Service/Packages
                </TableHead>
                <TableHead className="py-2 px-3 text-left">Venue</TableHead>

                <TableHead className="py-2 px-3 text-left">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointmentsData.map((row, idx) => (
                <TableRow
                  key={`${row.id}-${idx}`}
                  onClick={() => setActiveRow(idx)}
                  className={`border-b border-[#8081889a] border-l-transparent border-l-[3px] ${
                    activeRow === idx
                      ? "bg-[#EBD9FF] !border-l-[#b751fb]"
                      : "bg-white hover:bg-[#EBD9FF] hover:border-l-[#b751fb]"
                  }`}
                >
                  <TableCell className="py-2 px-3">
                    {row.icon}
                    <Saidbar />
                  </TableCell>

                  <TableCell className="py-2 px-3">
                    {row.id}
                    <Saidbar />
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={row.customer.avatar}
                        alt={row.customer.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {row.customer.name}
                        </span>
                        <span className="text-xs text-[#808188]">
                          {row.customer.phone}
                        </span>
                      </div>
                    </div>
                    <Saidbar />
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    <div className="flex flex-col gap-1">
                      <span> {row.date}</span>
                      <span> {row.time}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    <StatusBadge status={row.status} />
                    <StatusBadge />
                  </TableCell>
                  <TableCell className="py-2 px-3">{row.amount}</TableCell>
                  <TableCell className="py-2 px-3">{row.staff}</TableCell>

                  <TableCell className="py-2 px-3 flex gap-1">
                    <span className="bg-[#F3F4F6] border border-[#EBECF0] px-2 rounded-2xl">
                      {row.service}
                    </span>

                    {row.package && (
                      <span className="bg-[#F3F4F6] border border-[#EBECF0] px-2 rounded-2xl">
                        {row.package}
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="py-2 px-3">
                    <div className="flex gap-1 it">
                      <PinIcon />
                      {row.venue}
                    </div>
                  </TableCell>
                  <TableCell className="py-2 px-3 flex justify-center">
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
                          <AddNewVisitReport />
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
