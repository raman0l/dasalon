"use client";

import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  FilterIcon,
  ViewIcon,
  ViewReportIcon,
} from "@/components/helper/Icon";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  prospectiveData,
  ReportRegisteredData,
} from "@/components/helper/Helper";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import AddNewVisitReport from "@/components/comman/AddNewVisitReport";
import StatusBadge from "@/components/comman/StatusBadge2";
import Registered from "@/components/comman/Registered2";

function Prospective() {
  const [statusFilter, setStatusFilter] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [activeRow, setActiveRow] = useState(null);

  const filteredData = ReportRegisteredData.filter((row) => {
    const matchesStatus = statusFilter ? row.status === statusFilter : true;
    const matchesSearch = (row.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const [activeItem, setActiveItem] = useState(null);

  const handleSelect = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };

  return (
    <>
      <div className="w-full lg:px-6 md:px-5 px-4">
        {/* Filter Section */}
        <div className="flex gap-2 justify-between lg:py-6 py-4 max-[538px]:flex-col">
          <Select
            value={statusFilter}
            onValueChange={(val) => setStatusFilter(val)}
          >
            <SelectTrigger className="lg:w-[200px] md:w-[150px] w-[120px]   lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={undefined}> All</SelectItem>
                <SelectItem value="Active">Campleted</SelectItem>
                <SelectItem value="Expired">Expired</SelectItem>
                <SelectItem value="Due">Planned</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex lg:gap-5 md:gap-3 gap-2 items-center flex-wrap">
            <div className="relative lg:w-[290px] md:w-[230px] w-[160px]">
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D9DDE3]"
                size={18}
              />
              <input
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
                    selected={date}
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
        </div>

        <div className="overflow-x-auto custom-scrollbar border-2 border-[#DCE0E5] rounded-[5px]">
          <Table className="min-w-[1200px]">
            <TableHeader>
              <TableRow className="bg-[#F9FAFB] text-[#808188] font-semibold text-xs lg:text-sm">
                <TableHead className="py-2 px-3 text-left">Ids</TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Salon Name
                </TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Date & Time
                </TableHead>
                <TableHead className="py-2 px-3 text-left">seat</TableHead>
                <TableHead className="py-2 px-3 text-left">manage</TableHead>
                <TableHead className="py-2 px-3 text-left">grow</TableHead>
                <TableHead className="py-2 px-3 text-left">Promote </TableHead>
                <TableHead className="py-2 px-3 text-left">overall</TableHead>
                <TableHead className="py-2 px-3 text-left">software</TableHead>
                <TableHead className="py-2 px-3 text-left">status</TableHead>
                <TableHead className="py-2 px-3 text-left">Remarks</TableHead>
                <TableHead className="py-2 px-3 text-left">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {prospectiveData.map((row, idx) => (
                <TableRow
                  key={`${row.id}-${idx}`}
                  onClick={() => setActiveRow(idx)}
                  className={`border-b border-[#8081889a] border-l-transparent border-l-[3px] ${
                    activeRow === idx
                      ? "bg-[#EBD9FF] !border-l-[#b751fb]"
                      : "bg-white hover:bg-[#EBD9FF] hover:border-l-[#b751fb]"
                  }`}
                >
                  <TableCell className="inline-flex items-center gap-2 py-2 px-3 cursor-pointer">
                    {row.ids}
                    <Registered />
                  </TableCell>
                  <TableCell className="py-2 px-3">{row.salonname}</TableCell>
                  <TableCell className="py-2 px-3">
                    <div className="flex flex-col">
                      {row.date}
                      <span className="text-xs font-medium text-[#808188]">
                        9am - 10am
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 flex gap-1">
                    {row.seat}
                  </TableCell>

                  <TableCell className="py-2 px-3">{row.manage}</TableCell>
                  <TableCell className="py-2 px-3">{row.grow}</TableCell>
                  <TableCell className="py-2 px-3">{row.promote}</TableCell>
                  <TableCell className="py-2 px-3">{row.overall}</TableCell>
                  <TableCell className="py-2 px-3">{row.software}</TableCell>
                  <TableCell className="py-2 px-3">
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell className="py-2 px-3">{row.remarks}</TableCell>
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
    </>
  );
}

export default Prospective;
