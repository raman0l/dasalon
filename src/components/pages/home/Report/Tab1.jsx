"use client";
import { useRouter } from "next/navigation";
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
import { ReportRegisteredData } from "@/components/helper/Helper";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import AddNewVisitReport from "@/components/comman/AddNewVisitReport";
import StatusBadge from "@/components/comman/StatusBadge2";
import AddNewVisit from "@/components/comman/AddNewVisit";
import AddFollowUp from "@/components/comman/AddFollowUp";
import AssignPartner from "@/components/comman/AssignPartner";
import Registered from "../insights/tab1/Registered";

function Tab1() {
  const [statusFilter, setStatusFilter] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const router = useRouter();
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

    if (id === 1) router.push("/partner");
    if (id === 2) router.push("/report");
    if (id === 6) setOpenAssign(true);
  };

  return (
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
              className="w-full lg:px-4 md:px-3 px-2 py-[6px] border border-[#D9DDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B751FB] placeholder:text-sm"
            />
          </div>
          <div className="relative inline-block">
            <div
              onClick={() => setShowCalendar((prev) => !prev)}
              className="flex items-center gap-2 border border-[#A8A9AE] rounded-md lg:px-4 md:px-3 px-2 py-2 cursor-pointer"
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

      <div className="overflow-x-auto !custom-scrollbar border-2 border-[#DCE0E5] rounded-[5px]">
        <Table className="min-w-[1200px]">
          <TableHeader>
            <TableRow className="bg-[#F9FAFB] text-[#808188] font-semibold text-xs lg:text-sm">
              <TableHead className="py-2 px-3 text-left">Ids</TableHead>
              <TableHead className="py-2 px-3 text-left">Salon Name</TableHead>
              <TableHead className="py-2 px-3 text-left">Date & Time</TableHead>
              <TableHead className="py-2 px-3 text-left">Issue</TableHead>
              <TableHead className="py-2 px-3 text-left">
                Catalog & Staff
              </TableHead>
              <TableHead className="py-2 px-3 text-left">offer</TableHead>
              <TableHead className="py-2 px-3 text-left">Promote </TableHead>
              <TableHead className="py-2 px-3 text-left">Client</TableHead>
              <TableHead className="py-2 px-3 text-left">Set Up</TableHead>
              <TableHead className="py-2 px-3 text-left">Status</TableHead>
              <TableHead className="py-2 px-3 text-left">Remarks</TableHead>
              <TableHead className="py-2 px-3 text-left">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {ReportRegisteredData.map((row, idx) => (
              <TableRow
                key={`${row.id}-${idx}`}
                onClick={() => setActiveRow(idx)}
                className={`border-b border-[#8081889a] border-l-transparent border-l-[3px] ${
                  activeRow === idx
                    ? "bg-[#EBD9FF] !border-l-[#b751fb]"
                    : "bg-white hover:bg-[#EBD9FF] hover:border-l-[#b751fb]"
                }`}
              >
                <TableCell className="inline-flex items-center gap-2 mb-1 cursor-pointer">
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
                <TableCell className="py-2 px-3">{row.staff}</TableCell>
                <TableCell className="py-2 px-3">{row.offer}</TableCell>
                <TableCell className="py-2 px-3">{row.promote}</TableCell>
                <TableCell className="py-2 px-3">{row.client}</TableCell>
                <TableCell className="py-2 px-3">{row.setup}</TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Tab1;
