"use client";

import React, { useState, useEffect } from "react";
import Heading from "@/components/comman/Heading";
import {
  contactsData,
  fermtcData,
  insightsData,
  issuesData,
  menuItemsData,
  nameData,
  namesData,
  reasonData,
  reportsData,
  stepsData,
  textsData,
} from "@/components/helper/Helper";
import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  CalenderIcon,
  CallIcon,
  CalendarIcon,
  FilterIcon,
  GrowthIcon,
  LoctionIcon,
  PlusIcon,
  ViewReportIcon,
  WifiIssuesIcon,
  ScoreIcon,
  MenIcon,
  EyeIcon,
  ViewIcon,
} from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";

import { SelectItem } from "@radix-ui/react-select";
import { ClockIcon, Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import StatusBadge from "@/components/comman/StatusBadge";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SelectIcon } from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";

import { CheckCheck } from "lucide-react";
import MyCheckbox from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { MoreVerticalIcon } from "lucide-react";

export function Insights() {
  const [activeTab, setActiveTab] = useState("critical");
  const [startDate, setStartDate] = useState(null);
  const [date, setDate] = useState(null); // ✅ only one declaration
  const [date1, setDate1] = useState();
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [date2, setDate2] = useState();
  const [showCalendar2, setShowCalendar2] = useState(false);
  const [date3, setDate3] = useState();
  const [showCalendar3, setShowCalendar3] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const data = [
    { id: 1, subscription: "active", name: "John Doe" },
    { id: 2, subscription: "due", name: "Jane Smith" },
  ];
  const handleFirstTdClick = (row) => {
    setRowData(row);
    setSidebarOpen(true);
  };

  const formatDate = (d) => {
    if (!d) return "";
    const options = { day: "numeric", month: "short" }; // "Jun", "Jul"
    return d.toLocaleDateString("en-US", options);
  };
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);
  const [visitDate, setVisitDate] = useState(null);

  const handleAddDate = () => {
    if (!visitDate) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      setVisitDate(formattedDate);
    }
  };
  const [followUpDate, setFollowUpDate] = useState(null);

  const handleAddFollowUpDate = () => {
    if (!followUpDate) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      setFollowUpDate(formattedDate);
    }
  };
  const [status, setStatus] = useState("");
  const [status1, setStatus1] = useState("");
  const [status2, setStatus2] = useState("");
  const [status3, setStatu3] = useState("");
  // Display proper case for selected value
  const getDisplayName = (value, data) =>
    data.find((item) => item.toLowerCase() === value) || "";

  const statusOptions = {
    All: (
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-gradient-to-r from-[#FFEFDB] via-[#EDEDED] to-[#E3F7E9] rounded-full"></span>
        All
      </span>
    ),
    Active: (
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-[#E3F7E9] rounded-full border border-[#31A553]"></span>
        Active
      </span>
    ),
    Expired: (
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-[#EDEDED] rounded-full border border-[#808188]"></span>
        Expired
      </span>
    ),
    Due: (
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-[#FFEFDB] rounded-full border border-[#F5640A]"></span>
        Due
      </span>
    ),
  };

  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // 👉 helper render function
  const renderStep = (step) => {
    if (step.type === "info") {
      return (
        <div className="space-y-2">
          {step.fields.map((field, i) => (
            <p key={i}>
              {field.label}: {field.value}
            </p>
          ))}
        </div>
      );
    }

    if (step.type === "question") {
      return (
        <div className="space-y-2">
          <p>{step.question}</p>
          <input placeholder={step.placeholder} className="border p-1 w-full" />
        </div>
      );
    }

    return null;
  };

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setOpen(false); // last step ke baad close
    }
  };

  const [option, setOption] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);
  const [remarks, setRemarks] = useState("");
  const isStep1Complete = status && remarks.trim() !== "";
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  const [selecteDate, setSelecteDate] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  // Create next 7 days
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
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Insights - Registered Partners"}
            />
          </div>
        </div>
        <div>
          <div className="border-b-1 border-[#DCE0E5]">
            {/* Tabs */}
            <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] min-[420px]:items-center max-[420px]:flex-col">
              <div className="flex gap-7">
                <button
                  onClick={() => setActiveTab("critical")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 ${
                    activeTab === "critical"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] border-white border-b-3"
                  }`}
                >
                  <CalenderIcon /> Critical Task
                </button>
                <button
                  onClick={() => setActiveTab("growth")}
                  className={`lg:py-[19px] md:py-4 py-3  flex items-center gap-1  ${
                    activeTab === "growth"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                  }`}
                >
                  <GrowthIcon /> Growth Task
                </button>
              </div>
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
            </div>
          </div>
          <div className="flex gap-2 justify-between lg:py-6 py-4 max-[538px]:flex-col lg:px-6 md:px-5 px-4">
            <Select
              className={"lg:w-[300px] md:w-[200px] w-[150px]"}
              value={status}
              onValueChange={setStatus}
            >
              <SelectTrigger className="lg:w-[300px] md:w-[200px] w-[150px] bg-white border-[#E4E7EB]">
                {status ? (
                  statusOptions[status]
                ) : (
                  <SelectValue
                    placeholder="Select Status"
                    className="placeholder:text-xs !text-[#030712] font-semibold leading-[142%] lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px] tracking-[-0.28px] cursor-pointer"
                  />
                )}
              </SelectTrigger>
              <SelectContent className="border-[#F4F4F5] border-2 bg-white">
                <SelectGroup>
                  <SelectItem
                    className={
                      "hover:bg-[#F1DCFF] data-[state=checked]:bg-[#F1DCFF] flex gap-3 items-center cursor-pointer md:px-3 px-2 py-1"
                    }
                    value="All"
                  >
                    <span className="w-4 h-4 bg-gradient-to-r from-[#FFEFDB] via-[#EDEDED] to-[#E3F7E9] rounded-full"></span>
                    All
                  </SelectItem>
                  <SelectItem
                    value="Active"
                    className={
                      "hover:bg-[#F1DCFF] data-[state=checked]:bg-[#F1DCFF] flex gap-3 items-center cursor-pointer md:px-3 px-2 py-1"
                    }
                  >
                    <span className="w-4 h-4 bg-[#E3F7E9] rounded-full border-1 border-[#31A553]"></span>
                    Active
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-[#F1DCFF] data-[state=checked]:bg-[#F1DCFF] flex gap-3 items-center cursor-pointer md:px-3 px-2 py-1"
                    value="Expired"
                  >
                    <span className="w-4 h-4 bg-[#EDEDED] rounded-full border-1 border-[#808188]"></span>
                    Expired
                  </SelectItem>

                  <SelectItem
                    className="hover:bg-[#F1DCFF] data-[state=checked]:bg-[#F1DCFF] flex gap-3 items-center cursor-pointer lg:px-3 md:px-2 px-1 py-1"
                    value="Due"
                  >
                    <span className="w-4 h-4 bg-[#FFEFDB] rounded-full border-1 border-[#F5640A]"></span>
                    Due
                  </SelectItem>
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
                  className="w-full lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px] border border-[#D9DDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B751FB]"
                />
              </div>
              <div className="relative inline-block">
                <div
                  onClick={() => setShowCalendar1((prev) => !prev)}
                  className="flex items-center gap-2 border border-[#A8A9AE] rounded-md lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px] cursor-pointer"
                >
                  <FilterIcon className="h-4 w-4 text-[#A8A9AE]" />
                  <span className="text-sm text-[#A8A9AE]">
                    {date1 ? date1.toDateString() : "Filter by date"}
                  </span>
                </div>

                {showCalendar1 && (
                  <div className="absolute  mt-2 right-0 z-50 bg-white border rounded-md shadow-lg p-2">
                    <Calendar
                      mode="single"
                      selected={date1}
                      onSelect={(day) => {
                        setDate1(day);
                        setShowCalendar1(false);
                      }}
                      captionLayout="dropdown"
                      modifiers={{
                        today: new Date(),
                      }}
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

          <div className="flex relative lg:px-6 md:px-5 px-4">
            <div className="overflow-x-scroll custom-scrollbar max-[1180px]:!max-w-[1180px] w-full  border-2 border-[#DCE0E5] rounded-[5px]">
              <table className="min-w-[1350px] border-none w-full">
                <thead className="w-full">
                  <tr className="lg:text-sm text-xs text-[#808188] font-semibold leading-[142%] tracking-[-0.28px] bg-[#F9FAFB] text-nowrap border-b-1 border-[#808188]">
                    <th className="py-[6px] px-3 text-left">Salon Name</th>
                    <th className="py-[6px] px-3 text-left">Address</th>
                    <th className="py-[6px] px-3 text-left">Health</th>
                    <th className="py-[6px] px-3 text-left">Issue</th>
                    <th className="py-[6px] px-3 text-left">Staff</th>
                    <th className="py-[6px] px-3 text-left">Onboarding</th>
                    <th className="py-[6px] px-3 text-left">Bank Acc.</th>
                    <th className="py-[6px] px-3 text-left">Monthly Target</th>
                    <th className="py-[6px] px-3 text-left">Subscription </th>
                    <th className="py-[6px] px-3 text-left">Last Visit</th>
                    <th className="py-[6px] px-3 text-left">Next Visit</th>
                    <th className="py-[6px] px-3 text-left">TC Name</th>
                    <th className="py-[6px] px-3 text-left">RM Name</th>
                    <th className="py-[6px] px-3 text-left">FE Name</th>
                    <th className="py-[6px] px-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] text-nowrap">
                  {insightsData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`gap-2 border-b border-[#808188]
              hover:bg-[#EBD9FF]
              ${activeRow === idx ? "bg-[#EBD9FF]" : "bg-white"}
            `}
                    >
                      <td
                        className="flex items-center gap-2 lg:py-4 lg:px-3 md:px-2 md:py-4 py-2 px-1 cursor-pointer w-[190px]"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src={row.img}
                          alt={row.title}
                          width={100}
                          height={100}
                          className="h-6 w-6 object-cover rounded-full"
                        />
                        {row.name}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2 cursor-pointer w-[202px]">
                        {row.address}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.health}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2 flex gap-3 justify-between">
                        {row.issue.map((item, idx) => (
                          <span
                            key={idx}
                            className={`border py-[1px] px-[7px] rounded-full mx-1
      ${idx === 0 ? "border-[#FF0000] bg-[rgba(255,136,136,0.34)]" : ""}
      ${idx === 1 ? "border-[#F5640A] bg-[#F3CED6]" : ""}
    `}
                          >
                            {item.val}
                          </span>
                        ))}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.staff}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.onboarding}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.bankacc}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.monthlytarget}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        <StatusBadge status={row.subscription} />
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.lastvisit}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.nextvisit}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.tcname}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.rmname}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2">
                        {row.fename}
                      </td>
                      <td className="lg:px-3 px-2 lg:py-4 md:py-3 py-2 flex text-center justify-center">
                        <DropdownMenu className={"p-0"}>
                          <DropdownMenuTrigger asChild>
                            <Button className="flex items-center gap-2 cursor-pointer !p-0 !bg-transparent !shadow-none text-black">
                              {row.action}
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent className="w-50 bg-white border-1 border-[#808188] p-0 mr-10">
                            {menuItemsData.map((item) => {
                              return (
                                <DropdownMenuItem
                                  key={item.id}
                                  className="flex items-center gap-2 hover:!bg-[#F1DCFF] duration-300 ease-in-out"
                                >
                                  {item.icon}
                                  <span>{item.label}</span>
                                </DropdownMenuItem>
                              );
                            })}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Sidebar */}

            <Sheet
              open={open}
              onOpenChange={(isOpen) => {
                setOpen(isOpen);
                if (isOpen) {
                  setCurrentStep(0);
                }
              }}
            >
              <SheetContent className="md:w-[400px] w-[320px] overflow-auto bg-white gap-0">
                <SheetHeader
                  className={
                    "border-b-1 border-[#E4E7EB] lg:p-6 md:p-4 p-3 gap-0"
                  }
                >
                  <SheetTitle
                    className={
                      "flex gap-2 justify-between items-center cursor-pointer"
                    }
                  >
                    <Pragraph
                      className="!text-[7px] font-semibold leading-[160%] tracking-[-0.145px] !text-[rgba(3,7,18,0.80)] py-[2px] px-2 rounded-2xl bg-[#E3F7E9] border-[#31A553] border-1"
                      title={"Registered"}
                    />
                  </SheetTitle>
                </SheetHeader>
                <div>
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
                  {/* ================= Step 0: Details ================= */}
                  {currentStep === 0 && (
                    <div>
                      {/* Next Visit + Follow Up */}

                      <div className="flex gap-15 pb-[22px] border-b-1 border-[#E4E7EB] lg:px-6 md:px-4 px-3">
                        <div
                          className="border rounded py-[3px] px-[6px] border-[#E4E7EB] flex items-center gap-2 cursor-pointer hover:bg-[#e4e7eba5] duration-300 ease-in-out"
                          onClick={() => setCurrentStep(1)}
                        >
                          <Pragraph
                            className="!text-xs font-semibold !text-[#030712]  leading-[166%] tracking-[-0.24px]"
                            title={"Next Visit:"}
                          />
                          {date ? (
                            <span className="!text-xs">{date}</span>
                          ) : (
                            <div
                              onClick={handleAddDate}
                              className="cursor-pointer"
                            >
                              <CalendarIcon size={16} />
                            </div>
                          )}
                        </div>
                        <div
                          className="border rounded py-[3px] px-[6px] border-[#E4E7EB] flex items-center gap-2 cursor-pointer hover:bg-[#e4e7eba5] duration-300 ease-in-out"
                          onClick={() => setCurrentStep(2)}
                        >
                          <Pragraph
                            className="!text-xs font-semibold !text-[#030712]  leading-[166%] tracking-[-0.24px]"
                            title={"Follow Up:"}
                          />
                          {followUpDate ? (
                            <span className="!text-xs">{followUpDate}</span>
                          ) : (
                            <div
                              onClick={handleAddFollowUpDate}
                              className="cursor-pointer"
                            >
                              <CalendarIcon size={16} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="lg:px-6 md:px-4 px-3 flex flex-col gap-3 py-[20px_11px] border-b border-[#E4E7EB]">
                        <Heading
                          className="lg:!text-sm  !text-xs font-semibold leading-[142%] tracking-[-0.28px]"
                          title={"Additional details"}
                        />
                        {contactsData.map((contact, index) => (
                          <div key={index} className="flex justify-between">
                            <div className="flex gap-1">
                              <Pragraph
                                className="lg:!text-sm  !text-xs !text-[#808188] font-semibold leading-[142%] tracking-[-0.28px]"
                                title={contact.role}
                              />
                              <Pragraph
                                className="lg:!text-sm  !text-xs !text-[#030712] font-semibold leading-[142%] tracking-[-0.28px]"
                                title={contact.name}
                              />
                            </div>
                            <div className="flex gap-[6px] items-center">
                              <CallIcon />
                              <Pragraph
                                className="lg:!text-sm  !text-xs !text-[#030712] font-semibold leading-[142%] tracking-[-0.28px]"
                                title={contact.number}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3 lg:px-6 md:px-4 px-3 lg:pt-5 pt-3 pb-3 border-b-1 border-[#8081883a]">
                        <Heading
                          className={
                            "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-ellipsis"
                          }
                          title={"Additional details"}
                        />
                        <div className="flex flex-col gap-3">
                          {fermtcData.map((contact, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center"
                            >
                              <div className="flex items-center gap-1">
                                <Pragraph
                                  className={
                                    "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#808188] text-ellipsis"
                                  }
                                  title={contact.role}
                                />
                                <Pragraph
                                  className={
                                    "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-ellipsis"
                                  }
                                  title={contact.name}
                                />
                              </div>

                              <div className="flex items-center gap-1">
                                <CallIcon />

                                <Pragraph
                                  className={
                                    "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-ellipsis"
                                  }
                                  title={contact.number}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex gap-2 items-center py-[18px_10px] lg:px-6 md:px-5 px-4 ">
                          <WifiIssuesIcon />
                          <Pragraph
                            title={"Issues"}
                            className={
                              "font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712]"
                            }
                          />
                        </div>
                        <div className="border-b-1 border-[#8081883a]">
                          <div className="flex gap-2 items-cente lg:px-6 md:px-5 px-4 justify-around w-full">
                            <button
                              onClick={() => setActiveTab("critical")}
                              className={`py-[6px_10px] flex items-center gap-1 justify-center ${
                                activeTab === "critical"
                                  ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] w-[50%]"
                                  : "text-[#808188] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] border-white border-b-3 w-[50%]"
                              }`}
                            >
                              <CalenderIcon /> Critical Task
                            </button>
                            <button
                              onClick={() => setActiveTab("growth")}
                              className={`pb-[6px] flex items-center gap-1 justify-center  ${
                                activeTab === "growth"
                                  ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] w-[50%]"
                                  : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] w-[50%]"
                              }`}
                            >
                              <GrowthIcon /> Growth Task
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[5px] py-[14px_20px] lg:px-6 md:px-5 px-4 border-b-1 border-[#E4E7EB]">
                          {issuesData[activeTab].map((issue, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between bg-[#fff] border border-[#E4E7EB] px-3 py-[6px] rounded-md lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px]text-[#030712]"
                            >
                              {issue.title}
                              <span className="text-[#808188]">
                                {issue.days}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Visit Reports */}
                      <div className="flex flex-col gap-30">
                        <div className="lg:px-6 md:px-4 px-3">
                          <div className="flex gap-1 justify-between items-center pb-[10px] pt-5">
                            <div className="flex md:gap-2 gap-1 items-center">
                              <ScoreIcon />
                              <Pragraph
                                className={
                                  "!text-[#030712] font-semibold leading-[125%] tracking-[-0.32px]"
                                }
                                title={"Visit Reports"}
                              />
                            </div>
                            <CalendarIcon />
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            {reportsData.map((report, idx) => (
                              <div
                                key={idx}
                                className="border border-[#E4E7EB] lg:p-[15px] md:p-3 p-2 rounded-lg text-sm flex flex-col gap-[5px]"
                              >
                                <div className="flex gap-2  justify-between items-center">
                                  <p className="font-semibold">
                                    {report.type} {report.date}
                                  </p>
                                  <div className="flex gap-2 items-center">
                                    <div className="bg-[#D9D9D9] rounded-full p-[2px]">
                                      <MenIcon />
                                    </div>
                                    <Pragraph
                                      className={
                                        "!text-[10px] font-normal leading-[200%] tracking-[-0.2px] !text-[rgba(3,7,18,0.60)]"
                                      }
                                      title={"by Ajay Singh (FE)"}
                                    />
                                  </div>
                                </div>
                                <div>
                                  {report.score && (
                                    <p>Overall Score: {report.score}</p>
                                  )}
                                  {report.reason && (
                                    <p>Reason: {report.reason}</p>
                                  )}
                                </div>
                                <div>
                                  <p className="lg:text-sm text-xs font-medium leading-[166%] tracking-[-0.24px] text-[#030712]">
                                    Remarks:{" "}
                                    <span className="font-normal text-[rgba(3,7,18,0.60)] lg:text-sm text-xs leading-[166%] tracking-[-0.24px]">
                                      {report.remarks}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex justify-end gap-3 border-t border-[#E4E7EB] lg:px-6 md:px-4 px-4 py-3 ">
                          <button
                            className="px-4 py-[10px] lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border-1 border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>

                          <DropdownMenu>
                            {/* Trigger Button */}
                            <DropdownMenuTrigger asChild>
                              <Button className="px-4 py-[10px] lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md bg-[#B751FB] border border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out">
                                Add Visit Report
                              </Button>
                            </DropdownMenuTrigger>

                            {/* Dropdown Content */}
                            <DropdownMenuContent className="w-40 mt-2 bg-white border border-gray-300 p-0">
                              <DropdownMenuItem
                                className="px-3 py-[10px] lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md hover:bg-[#B751FB]  hover:text-white hover:shadow-lg duration-300 ease-in-out"
                                onClick={() => setCurrentStep(1)}
                              >
                                + Visit report
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="px-3 py-[10px] lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md hover:bg-[#B751FB]  hover:text-white hover:shadow-lg duration-300 ease-in-out"
                                onClick={() => setCurrentStep(2)}
                              >
                                + Follow Up Report
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ================= Step 1: Add Visit Report ================= */}
                {currentStep === 1 && (
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
                          <Select value={status1} onValueChange={setStatus1}>
                            <SelectTrigger className="w-full border border-[#E4E4E7] p-2 rounded">
                              {/* This shows the selected name */}
                              <SelectValue
                                className={
                                  "placeholder:text-xs placeholder:text-[#18181B]"
                                }
                                placeholder="Select a name"
                              />
                              <span className="text-start w-full">
                                {" "}
                                {getDisplayName(status1, namesData)}
                              </span>
                            </SelectTrigger>

                            <SelectContent className="bg-white rounded shadow-md p-0">
                              {namesData.map((name) => (
                                <SelectItem
                                  key={name.toLowerCase()}
                                  value={name.toLowerCase()}
                                  className="hover:!bg-[#F1DCFF] rounded px-2 py-1 w-full"
                                >
                                  {name}
                                </SelectItem>
                              ))}
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
                            {times.map((t) => (
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
                    <div className="flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
                      <button
                        className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                        onClick={() => setCurrentStep(0)} // Go back to Step 0
                      >
                        Cancel
                      </button>
                      <button
                        className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md bg-[#B751FB] border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                        onClick={() => {
                          if (isStep1Complete) {
                            // Submit logic here
                            setCurrentStep(0);
                          }
                        }}
                        disabled={!isStep1Complete}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
                {/* ================= Step 1: Add Visit Report ================= */}
                {currentStep === 2 && (
                  <div className="border-t border-[#E4E7EB] flex flex-col gap-50">
                    <div className="lg:px-5 md:px-4 px-3">
                      <Heading
                        className={
                          "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] lg:py-5 py-4"
                        }
                        title={"Schedule Follow Up"}
                      />

                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <Pragraph
                            className={
                              "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                            }
                            title={"Assign to FE"}
                          />
                          <Select value={status2} onValueChange={setStatus2}>
                            <SelectTrigger className="!w-full flex justify-between items-center border border-[#E4E4E7] p-2 rounded">
                              <SelectValue
                                style={{
                                  width: "100%",
                                }}
                                className={
                                  "placeholder:text-xs placeholder:!text-[#18181B]"
                                }
                                placeholder="Select a name"
                              />
                              <span className="w-full text-start">
                                {getDisplayName(status2, nameData)}
                              </span>
                            </SelectTrigger>

                            <SelectContent className="bg-white rounded shadow-md text-black">
                              {nameData.map((name) => (
                                <SelectItem
                                  key={name.toLowerCase()}
                                  value={name.toLowerCase()}
                                  className="hover:bg-gray-200 rounded px-2 py-1 text-black"
                                >
                                  {name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="flex justify-between items-center full border border-[#E4E4E7] rounded-md px-3 py-2 text-sm font-medium text-black bg-white hover:bg-white">
                              {selectedDate || "Pick a date"}{" "}
                              <CalendarIcon className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent className="w-48 bg-white border border-gray-300 rounded shadow-md p-1">
                            {dates.map((date) => (
                              <DropdownMenuItem
                                key={date}
                                className="text-sm px-2 py-1 hover:bg-[#F1DCFF] cursor-pointer text-black"
                                onClick={() => setSelectedDate(date)}
                              >
                                {date}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="flex justify-between items-center w-full border border-[#E4E4E7] rounded-md px-3 py-2 lg|text-sm font-medium text-black bg-white hover:bg-white">
                              {selectedTime || "Pick a Time slot"}
                              <ClockIcon className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent className="w-40 bg-white border border-gray-300 rounded shadow-md p-1">
                            {times.map((t) => (
                              <DropdownMenuItem
                                key={t}
                                className="text-sm px-2 py-1 hover:bg-[#F1DCFF] cursor-pointer"
                                onClick={() => setSelectedTime(t)}
                              >
                                {t}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="flex flex-col gap-2">
                          <Pragraph
                            className={
                              "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                            }
                            title={"Follow up reason"}
                          />
                          <Select value={status3} onValueChange={setStatu3}>
                            <SelectTrigger className="w-full flex justify-between items-center border border-[#E4E4E7] p-2 rounded">
                              <SelectValue
                                className={
                                  "placeholder:text-xs placeholder:text-[#030712]"
                                }
                                placeholder="Follow up reason"
                              />

                              <span className="w-full text-start">
                                {getDisplayName(status3, reasonData)}
                              </span>
                            </SelectTrigger>

                            <SelectContent className="bg-white rounded shadow-md ">
                              {reasonData.map((name) => (
                                <SelectItem
                                  key={name.toLowerCase()}
                                  value={name.toLowerCase()}
                                  className="hover:bg-gray-200 rounded px-2 py-1 text-start"
                                >
                                  {name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

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
                    <div className="flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
                      <button
                        className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                        onClick={() => setCurrentStep(0)} // Go back to Step 0
                      >
                        Cancel
                      </button>
                      <button
                        className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md bg-[#B751FB] border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                        onClick={() => setCurrentStep(0)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insights;
