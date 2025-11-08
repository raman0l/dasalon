"use client";

import React, { useState, useRef, useEffect } from "react";
import Pragraph from "@/components/comman/Pragraph";
import {
  ClientEngagementdata,
  data,
  fromsummitData,
  Metricdata,
  offerdata,
  PromoteUsagedata,
  Setupdata,
  textsData,
} from "@/components/helper/Helper";
import {
  CalendarIcon,
  CallIcon,
  GrayCalenderIcon,
  LoctionIcon,
  OverallScroreIcon,
} from "@/components/helper/Icon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import Image from "next/image";
import Heading from "@/components/comman/Heading";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StarIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

function DatePicker({ placeholder }) {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className="flex justify-between items-center border border-[#E4E4E7] rounded lg:px-3 px-2 md:py-2 py-1 cursor-pointer hover:bg-[#e4e7eb2a]"
        onClick={() => setOpen(!open)}
      >
        <span>{date ? date.toLocaleDateString() : placeholder}</span>
        <CalendarIcon className="lg:w-5 w-4 lg:h-5 h-4 text-[#030712]" />
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white border-1 border-[#E4E4E7] rounded shadow p-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

function VisitReport() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const totalSteps = 6;

  const handleSubmit = () => {
    console.log("Submit final report");
    // yahan final submit logic lagao
  };
  const [activeTab, setActiveTab] = useState(0); // 0-based index

  const nextStep = () => {
    if (activeTab < totalSteps - 1) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const [value1, setValue1] = useState([1]); // default 5
  const [value2, setValue2] = useState([1]);
  const [value3, setValue3] = useState([1]);
  const [value4, setValue4] = useState([1]);
  const [value5, setValue5] = useState([1]);
  const total = value1[0] + value2[0] + value3[0] + value4[0] + value5[0];

  const parseValue = (val) => {
    if (!val) return 0;
    return parseInt(val.toString().replace(/[^0-9]/g, ""), 10);
  };
  return (
    <>
      <AlertDialog className="!p-0">
        <AlertDialogTrigger asChild>
          <Button
            className={
              "!P-0 bg-transparent absolute w-[190px] hover:bg-transparent cursor-pointer"
            }
          ></Button>
        </AlertDialogTrigger>
        <AlertDialogContent className={"!p-0 min-[1070px]:!max-w-[1038px]"}>
          <AlertDialogHeader className={""}>
            <div className="flex items-center justify-between gap-2 lg:py-5 md:py-4 py-2 lg:px-4 px-3  border-b border-[#8081888a]">
              <AlertDialogTitle>Visit Report</AlertDialogTitle>
            </div>

            <div
              id="radix-_r_4_"
              data-slot="alert-dialog-description"
              className="text-muted-foreground text-sm p-0 flex md:flex-row flex-col  max-[768px]:overflow-y-auto h-screen max-h-[70vh] scrollbar-w-5 custom-scrollbar"
            >
              <div className="lg:min-w-[300px] min-w-[260px] bg-[#F9FAFB] md:overflow-y-auto h-screen max-h-[70vh] scrollbar-h-2 scrollbar-none md:pb-5 pb-2">
                <div className="flex gap-2 lg:px-6 md:px-4 px-3 lg:pt-5 md:pt-4 pt-3">
                  <Image
                    className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] object-cover rounded-md"
                    src={"/assets/png/salon-2.png"}
                    alt="salon"
                    width={32}
                    height={32}
                  />
                  <div className="flex gap-2 justify-between w-full">
                    <div className="flex flex-col gap-[2px]">
                      <span className="lg:text-base text-sm !text-[#030712] font-semibold leading-[166%] tracking-[-0.24px]">
                        Glamour Glow Studio
                      </span>
                      <div className="flex gap-1 items-center">
                        <LoctionIcon />
                        <span className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]">
                          123 Sparkle Ave, Glam City
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <CallIcon />

                        <span className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]">
                          55523-32324
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Texts Data */}
                <div className="flex gap-2 lg:py-[17px_15px] py-3">
                  {textsData.map((item, index) => (
                    <Pragraph
                      key={index}
                      className={`${item.color} ${
                        index === 1
                          ? "border-x !border-[#808188] !text-xs lg:px-4 md:px-3 px-2"
                          : "!text-xs font-semibold leading-[166%] tracking-[-0.24px] lg:px-4 md:px-3 px-2"
                      }`}
                      title={item.label}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex flex-col">
                    {fromsummitData.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`
              flex gap-2 items-center lg:py-4 md:py-3 py-2 lg:px-5 md:px-4 px-3 duration-300 ease-in-out
              ${
                activeTab === index
                  ? "bg-[#F1DCFF] text-[#030712]"
                  : "hover:bg-[#F1DCFF] text-[#030712]"
              }
            `}
                      >
                        <div>{item.icon}</div>
                        <span className="text-sm font-medium text-center">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:py-3 py-2 lg:px-4 md:px-3 px-2 w-full md:overflow-y-auto h-screen max-h-[70vh] scrollbar-h-2 custom-scrollbar scrollbar-none">
                <div className="flex flex-col gap-2 mb-[22px]">
                  <Heading
                    className={
                      "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] text-start"
                    }
                    title={fromsummitData[activeTab].label}
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                      <GrayCalenderIcon className="w-5 h-5 text-gray-500" />
                      <div className="flex items-center gap-1">
                        <Pragraph
                          className="!text-xs font-normal leading-[166%] tracking-[-0.24px] !text-[#030712]"
                          title={"Visit Date:"}
                        />
                        <Pragraph
                          className="!text-xs font-normal leading-[166%] tracking-[-0.24px] !text-[rgba(3,7,18,0.70)]"
                          title={formattedDate} // <-- today's date
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <OverallScroreIcon className="w-5 h-5 text-gray-500" />
                      <div className="flex items-center gap-1">
                        <Pragraph
                          className="!text-xs font-normal leading-[166%] tracking-[-0.24px] !text-[#030712]"
                          title={"Overall Score:"}
                        />
                        <p className="!text-xs font-normal leading-[166%] tracking-[-0.24px] !text-[rgba(3,7,18,0.70)]">
                          {total} / 50
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {activeTab === 0 && (
                  <div>
                    <div className="border-[#E4E7EB] rounded-lg shadow-sm h-auto">
                      <table className="w-full">
                        <thead className="border-b border-[#E4E7EB] bg-[#F9FAFB]">
                          <tr className="lg:text-sm md:text-xs text-[10px] font-bold leading-[142%] tracking-[-0.28px] text-[#808188]">
                            <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-start">
                              Category
                            </th>
                            <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-start">
                              Score
                            </th>
                            <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-start">
                              Remarks
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, i) => (
                            <tr
                              key={i}
                              className="border-b border-[#E4E7EB] lg:text-sm md:text-xs text-[10px] font-normal leading-[142%] tracking-[-0.28px] text-[#030712]"
                            >
                              <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-start">
                                {row.category}
                              </td>
                              <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start">
                                {row.score}
                              </td>
                              <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start">
                                {row.remarks}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex xl:gap-10 lg:gap-5 md:gap-3 gap-2 justify-between lg:mt-7 md:mt-5 mt-3 lg:pb-10 md:pb-7 pb-5 md:flex-row flex-col">
                      <div className="flex flex-col md:gap-2 gap-1 md:w-[50%]">
                        <Pragraph
                          className={
                            "lg:!text-sm !text-xs font-semibold leading-[142%] traking-[-0.28px] !text-[#030712] text-start"
                          }
                          title={"Next Follow up date"}
                        />
                        <DatePicker
                          placeholder="Pick a date"
                          className={
                            "placeholder:text-sm font-semibold leading-[142%] traking-[-0.28px] placeholder:!text-[#030712]"
                          }
                        />
                      </div>
                      <div className="flex flex-col md:gap-2 gap-1 md:w-[50%]">
                        <Pragraph
                          className={
                            "lg:!text-sm !text-xs font-semibold leading-[142%] traking-[-0.28px] !text-[#030712] text-start"
                          }
                          title={"Next Follow up date"}
                        />
                        <DatePicker
                          placeholder="Pick a date"
                          className={
                            "placeholder:text-sm font-semibold leading-[142%] traking-[-0.28px] placeholder:!text-[#030712"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="flex flex-col lg:gap-6 md:gap-5 gap-4">
                    <div className=" border-[#E4E7EB] rounded-lg shadow-sm h-auto">
                      <table className="w-full">
                        <thead className="border-b border-[#E4E7EB] bg-[#F9FAFB]">
                          <tr className="lg:text-sm md:text-xs text-[10px] font-bold leading-[142%] tracking-[-0.28px] text-[#808188]">
                            <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-left">
                              Metric
                            </th>
                            <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-left text-nowrap">
                              Last visit
                            </th>
                            <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-left text-nowrap">
                              Current visit
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Metricdata.map((row, i) => {
                            // Extract numbers from strings
                            const lastNum = parseInt(row.last);
                            const currentNum = parseInt(row.Current);

                            const isCurrentLower = currentNum < lastNum;
                            const isCurrentHigher = currentNum > lastNum;

                            return (
                              <tr
                                key={i}
                                className="border-b border-[#E4E7EB] lg:text-sm md:text-xs text-[10px] font-normal leading-[142%] tracking-[-0.28px] text-[#030712]"
                              >
                                <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-left">
                                  {row.Metric}
                                </td>
                                <td className="lg:px-6 md:px-3 px- lg:py-2 py-[6px] text-left">
                                  {row.last}
                                </td>
                                <td
                                  className={`lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-left ${
                                    isCurrentLower
                                      ? "text-red-600"
                                      : isCurrentHigher
                                      ? "text-green-600"
                                      : ""
                                  }`}
                                >
                                  {row.Current}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                      <Heading
                        className={
                          "lg:!text-xl md:!text-base !text-sm font-semibold leading-[100%] tracking-[-0.4px] !text-[#030712] text-left"
                        }
                        title={"Rate salon on catalog & staff performance"}
                      />
                      <div className="flex items-center lg:gap-10 md:gap-7 gap-5 justify-between">
                        <Slider
                          value={value1}
                          onValueChange={setValue1}
                          min={1} // min 1
                          max={10} // max 10
                          step={1} // step 1
                          className="lg:!h-4 md:!h-3 !h-1 w-full"
                        />

                        <p className="font-medium text-[#B751FB] lg:text-lg md:text-base text-sm">
                          {String(value1[0]).padStart(2, "0")}/10
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:gap-2 gap-1 w-full lg:mb-10 md:mb-7 mb-5">
                      <label
                        className={
                          "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-left"
                        }
                      >
                        Remarks
                      </label>
                      <textarea
                        placeholder="Enter remarks for Catalog & Staff performance....."
                        className={
                          "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                        }
                      />
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4 ">
                      <div className=" border-[#E4E7EB] rounded-lg shadow-sm h-auto">
                        <table className="w-full">
                          <thead className="border-b border-[#E4E7EB] bg-[#F9FAFB]">
                            <tr className="lg:text-sm md:text-xs text-[10px] font-bold leading-[142%] tracking-[-0.28px] text-[#808188]">
                              <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start">
                                Metric
                              </th>
                              <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start text-nowrap">
                                Last visit
                              </th>
                              <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start text-nowrap">
                                Current visit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {offerdata.map((row, i) => {
                              // Extract numbers from strings
                              const lastNum = parseInt(row.last);
                              const currentNum = parseInt(row.Current);

                              const isCurrentLower = currentNum < lastNum;
                              const isCurrentHigher = currentNum > lastNum;

                              return (
                                <tr
                                  key={i}
                                  className="border-b border-[#E4E7EB] lg:text-sm md:text-xs text-[10px] font-normal leading-[142%] tracking-[-0.28px] text-[#030712]"
                                >
                                  <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start">
                                    {row.Metric}
                                  </td>
                                  <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start">
                                    {row.last}
                                  </td>
                                  <td
                                    className={`pr-6 py-2 w-[30%] text-start ${
                                      isCurrentLower
                                        ? "text-red-600"
                                        : isCurrentHigher
                                        ? "text-green-600"
                                        : ""
                                    }`}
                                  >
                                    {row.Current}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                        <Heading
                          className={
                            "xl:!text-xl lg:!text-lg md:!text-base !text-sm font-semibold leading-[100%] tracking-[-0.4px] !text-[#030712] text-start"
                          }
                          title={"Rate salon on catalog & staff performance"}
                        />
                        <div className="flex items-center gap-10 justify-between">
                          <Slider
                            value={value2}
                            onValueChange={setValue2}
                            min={1} // min 1
                            max={10} // max 10
                            step={1} // step 1
                            className="h-4 w-full"
                          />

                          <p className="font-medium text-[#B751FB] lg:text-lg md:text-base text-sm">
                            {String(value2[0]).padStart(2, "0")}/10
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-2 gap-1 w-full mb-10">
                        <label
                          className={
                            "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-start"
                          }
                        >
                          Remarks
                        </label>
                        <textarea
                          placeholder="Enter remarks for Catalog & Staff performance....."
                          className={
                            "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div>
                    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4">
                      <div className=" border-[#E4E7EB] rounded-lg shadow-sm h-auto">
                        <table className="w-full">
                          <thead className="border-b border-[#E4E7EB] bg-[#F9FAFB]">
                            <tr className="lg:text-sm md:text-xs text-[10px] font-bold leading-[142%] tracking-[-0.28px] text-[#808188]">
                              <th className="lg:px-6 md:px-3 pl-2 lg:py-2 py-[6px] text-start">
                                Metric
                              </th>
                              <th className="lg:px-6 md:px-3 px-1 lg:py-2 py-[6px] text-start">
                                Last visit
                              </th>
                              <th className="lg:px-6 md:px-3 pr-2  lg:py-2 py-[6px] text-start">
                                Current visit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {PromoteUsagedata.map((row, i) => {
                              // Extract numbers from strings
                              const lastNum = parseInt(row.last);
                              const currentNum = parseInt(row.Current);

                              const isCurrentLower = currentNum < lastNum;
                              const isCurrentHigher = currentNum > lastNum;

                              return (
                                <tr
                                  key={i}
                                  className="border-b border-[#E4E7EB] lg:text-sm md:text-xs text-[10px] font-normal leading-[142%] tracking-[-0.28px] text-[#030712]"
                                >
                                  <td className="lg:px-6 md:px-3 pl-2 lg:py-2 py-[6px] text-start">
                                    {row.Metric}
                                  </td>
                                  <td className="lg:px-6 md:px-3 px-1 lg:py-2 py-[6px] text-start">
                                    {row.last}
                                  </td>
                                  <td
                                    className={`lg:px-6 md:px-3 pr-2 lg:py-2 py-[6px] text-start ${
                                      isCurrentLower
                                        ? "text-red-600"
                                        : isCurrentHigher
                                        ? "text-green-600"
                                        : ""
                                    }`}
                                  >
                                    {row.Current}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                        <Heading
                          className={
                            "xl:!text-xl lg:!text-lg md:!text-base !text-sm font-semibold leading-[100%] tracking-[-0.4px] !text-[#030712] text-start"
                          }
                          title={"Rate salon on catalog & staff performance"}
                        />
                        <div className="flex items-center lg:gap-10 md:gap-7 gap-5 justify-between">
                          <Slider
                            value={value3}
                            onValueChange={setValue3}
                            min={1} // min 1
                            max={10} // max 10
                            step={1} // step 1
                            className="h-4 w-full"
                          />

                          <p className="font-medium text-[#B751FB] lg:text-lg md:text-base text-sm">
                            {String(value3[0]).padStart(2, "0")}/10
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col lg:gap-2 gap-1 w-full mb-10">
                        <label
                          className={
                            "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-start"
                          }
                        >
                          Remarks
                        </label>
                        <textarea
                          placeholder="Enter remarks for Catalog & Staff performance....."
                          className={
                            "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 4 && (
                  <div>
                    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4">
                      <div className=" border-[#E4E7EB] rounded-lg shadow-sm h-auto">
                        <table className="w-full">
                          <thead className="border-b border-[#E4E7EB] bg-[#F9FAFB]">
                            <tr className="lg:text-sm md:text-xs text-[10px] font-bold leading-[142%] tracking-[-0.28px] text-[#808188]">
                              <th className="lg:px-6 md:px-3 pl-2 lg:py-2 py-[6px] text-start">
                                Metric
                              </th>
                              <th className="lg:px-6 md:px-3  lg:py-2 py-[6px] text-start">
                                Last visit
                              </th>
                              <th className="lg:px-6 md:px-3 pr-2 lg:py-2 py-[6px] text-start text-nowrap">
                                Current visit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {ClientEngagementdata.map((row, index) => {
                              const currentValue = parseValue(row.Current);
                              const lastValue = parseValue(row.last);

                              return (
                                <tr
                                  key={index}
                                  className="border-b border-[#E4E7EB] lg:text-sm md:text-xs text-[10px] font-normal leading-[142%] tracking-[-0.28px] text-[#030712]"
                                >
                                  <td className="lg:px-6 md:px-3 pl-2 lg:py-2 py-[6px] w-[40%] text-nowrap text-start">
                                    {row.Metric}
                                  </td>
                                  <td className="lg:px-6 md:px-3  lg:py-2 py-[6px] w-[20%] text-start">
                                    {row.last}
                                  </td>
                                  <td
                                    className={`lg:px-6 md:px-3 pr-2 lg:py-2 py-[6px] text-start w-[20%] ${
                                      currentValue < lastValue
                                        ? "text-red-600"
                                        : currentValue > lastValue
                                        ? "text-green-600"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {row.Current}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                        <Heading
                          className={
                            "xl:!text-xl lg:!text-lg md:!text-base !text-sm font-semibold leading-[100%] tracking-[-0.4px] !text-[#030712] text-start"
                          }
                          title={"Rate salon on catalog & staff performance"}
                        />
                        <div className="flex items-center lg:gap-10 md:gap-7 gap-5 justify-between">
                          <Slider
                            value={value4}
                            onValueChange={setValue4}
                            min={1} // min 1
                            max={10} // max 10
                            step={1} // step 1
                            className="h-4 w-full"
                          />

                          <p className="font-medium text-[#B751FB] lg:text-lg md:text-base text-sm">
                            {String(value4[0]).padStart(2, "0")}/10
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-2 gap-1 w-full mb-10">
                        <label
                          className={
                            "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-start"
                          }
                        >
                          Remarks
                        </label>
                        <textarea
                          placeholder="Enter remarks for Catalog & Staff performance....."
                          className={
                            "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 5 && (
                  <div>
                    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4">
                      <div>
                        {" "}
                        <div className=" border-[#E4E7EB] rounded-lg shadow-sm">
                          <table className="w-full">
                            <thead className="border-b border-[#E4E7EB] bg-[#F9FAFB]">
                              <tr className="lg:text-sm md:text-xs text-[10px] font-bold leading-[142%] tracking-[-0.28px] text-[#808188]">
                                <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-start">
                                  Metric
                                </th>
                                <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-start">
                                  Last visit
                                </th>
                                <th className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] text-nowrap text-start">
                                  Current visit
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Setupdata.map((row, i) => {
                                const lastNum = parseInt(row.last);
                                const currentNum = parseInt(row.Current);

                                const isCurrentLower = currentNum < lastNum;
                                const isCurrentHigher = currentNum > lastNum;

                                return (
                                  <tr
                                    key={i}
                                    className="border-b border-[#E4E7EB] md:text-lg:text-sm md:text-xs text-[10px] font-normal leading-[142%] tracking-[-0.28px] text-[#030712]"
                                  >
                                    <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] w-[40%] text-start">
                                      {row.Metric}
                                    </td>
                                    <td className="lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] w-[20%] text-start">
                                      {row.last}
                                    </td>
                                    <td
                                      className={`lg:px-6 md:px-3 px-2 lg:py-2 py-[6px] w-[20%] text-start ${
                                        isCurrentLower
                                          ? "text-red-600"
                                          : isCurrentHigher
                                          ? "text-green-600"
                                          : ""
                                      }`}
                                    >
                                      {row.Current}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                        <Heading
                          className={
                            "xl:!text-xl lg:!text-lg md:!text-base !text-sm font-semibold leading-[100%] tracking-[-0.4px] !text-[#030712] text-start"
                          }
                          title={"Rate salon on catalog & staff performance"}
                        />
                        <div className="flex items-center lg;gap-10 md:gap-7 gap-5 justify-between">
                          <Slider
                            value={value5}
                            onValueChange={setValue5}
                            min={1} // min 1
                            max={10} // max 10
                            step={1} // step 1
                            className="h-4 w-full"
                          />

                          <p className="font-medium text-[#B751FB] lg:text-lg md:text-base text-sm">
                            {String(value5[0]).padStart(2, "0")}/10
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-2 gap-1 w-full lg:mb-10 md:mb-7 mb-5">
                        <label
                          className={
                            "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-start"
                          }
                        >
                          Remarks
                        </label>
                        <textarea
                          placeholder="Enter remarks for Catalog & Staff performance....."
                          className={
                            "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 6 && (
                  <div>
                    <div className="flex flex-col lg:gap-6 md:gap-5 gap-4">
                      <div className="flex flex-col gap-2 w-full">
                        <label
                          className={
                            "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-start"
                          }
                        >
                          Remarks
                        </label>
                        <textarea
                          placeholder="Enter remarks for Catalog & Staff performance....."
                          className={
                            "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                          }
                        />
                      </div>
                      <div className="flex xl:gap-10 lg:gap-7 md:gap-5 gap-3 md:flex-row flex-col">
                        <div className="flex flex-col md:gap-2 gap-1 md:w-[50%]">
                          <Pragraph
                            className={
                              "lg:!text-sm !text-xs font-semibold leading-[142%] traking-[-0.28px] !text-[#030712] text-start"
                            }
                            title={"Next Follow up date"}
                          />
                          <DatePicker
                            placeholder="Pick a date"
                            className={
                              "placeholder:text-xs font-semibold leading-[142%] traking-[-0.28px] placeholder:!text-[#030712]"
                            }
                          />
                        </div>
                        <div className="flex flex-col md:gap-2 gap-1 md:w-[50%] lg:mb-10 md:mb-7 mb-5">
                          <Pragraph
                            className={
                              "lg:!text-sm !text-xs font-semibold leading-[142%] traking-[-0.28px] !text-[#030712] text-start"
                            }
                            title={"Next Follow up date"}
                          />
                          <DatePicker
                            placeholder="Pick a date"
                            className={
                              "placeholder:text-xs font-semibold leading-[142%] traking-[-0.28px] placeholder:!text-[#030712"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter
            className={
              "lg:py-5 md:py-4 py-3 lg:px-4 px-3  border-t border-[#8081888a]"
            }
          >
            <AlertDialogCancel
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
              onClick={prevStep}
              disabled={activeTab === 1}
            >
              Cancel
            </AlertDialogCancel>

            {activeTab === 0 ? (
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                  nextStep();
                }}
                className="lg:px-4 px-3 lg:!py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md bg-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
              >
                Submit Report
              </button>
            ) : activeTab < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="lg:!px-4 !px-3 lg:!py-[10px] md:!py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] text-white hover:!shadow-lg duration-300 ease-in-out cursor-pointer"
              >
                Next
              </button>
            ) : (
              <AlertDialogAction
                onClick={handleSubmit}
                className="lg:px-4 px-3 lg:!py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md bg-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
              >
                Submit Report
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default VisitReport;
