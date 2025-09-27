"use client";
import { useState, useEffect } from "react";
import React from "react";
import Pragraph from "./Pragraph";
import {
  conData,
  contactsData,
  issuesData,
  reportsData,
  textsData,
} from "@/components/helper/Helper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  CalendarIcon,
  CalenderIcon,
  CallIcon,
  GrowthIcon,
  LoctionIcon,
  MenIcon,
  PlusIcon,
  ScoreIcon,
  ViewIcon,
  ViewReportIcon,
  WifiIssuesIcon,
} from "../helper/Icon";
import { Calendar } from "../ui/calendar";
import { Heading } from "lucide-react";
function Saidbar({ rowData }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date1, setDate1] = useState();
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [date3, setDate2] = useState();
  const [showCalendar2, setShowCalendar2] = useState(false);
  const [activeTab, setActiveTab] = useState("critical");
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-100 bg-red-500 border-l border-gray-300 shadow-lg transform transition-transform duration-300 overflow-auto z-40 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex gap-2 justify-between items-center lg:py-6 py-4 lg:px-4 px-3 border-b-1  border-[#8081883a]">
            <Pragraph
              className={
                "!text-[7px] font-semibold leading-[160%] tracking-[-0.145px] !text-[rgba(3,7,18,0.80)] py-[2px] px-2 rounded-2xl bg-[#E3F7E9] border-[#31A553] border-1"
              }
              title={"Registered "}
            />

            <button
              className="mb-2 text-gray-500 rotate-45 text-2xl cursor-pointer hover:text-black duration-300 ease-in-out "
              onClick={() => setSidebarOpen(false)}
            >
              +
            </button>
          </div>
          <div className="px-5 py-[20px_30px] flex flex-col gap-4 border-b-1 border-[#8081883a]">
            <div className="flex justify-between">
              <div className="flex gap-[10px] items-center">
                {rowData?.img && (
                  <img
                    src={rowData.img}
                    alt={rowData.name}
                    className="lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] object-cover rounded-md mb-4"
                  />
                )}
                <div className="flex flex-col gap-[3px]">
                  <Pragraph
                    className={
                      "!text-[#030712] leading-[125%] tracking-[-0.32px] font-semibold"
                    }
                    title={rowData?.name}
                  />
                  <div className="flex gap-1 items-center">
                    <LoctionIcon />
                    <Pragraph
                      className={
                        "lg:text-sm !text-xs font-normal leading-[166%] tracking-[-0.24px] !text-[#030712]"
                      }
                      title={rowData?.address}
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <CallIcon />
                    <Pragraph
                      className={
                        "lg:text-sm !text-xs font-normal leading-[166%] tracking-[-0.24px] !text-[#030712]"
                      }
                      title={"55523-32324"}
                    />
                  </div>
                </div>
              </div>
              <div className="w-4 h-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="focus-visible:ring-0 focus-visible:outline-none p-0"
                    >
                      ⋮
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-48 p-0 rounded-lg shadow-lg bg-white border-1 border-[#8081883a] flex flex-col gap-[5px] pb-1">
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-purple-100 focus:text-purple-700 focus-visible:ring-0 focus-visible:outline-none lg:text-sm text-xs font-semibold  leading-[142%] tracking-[-0.28px]text-[#030712] px-3 py-[3px]">
                      <ViewIcon className="w-4 h-4 text-purple-500" />
                      View as partner
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-purple-100 focus:text-purple-700 focus-visible:ring-0 focus-visible:outline-none lg:text-sm text-xs font-semibold  leading-[142%] tracking-[-0.28px]text-[#030712] px-3 py-[3px]">
                      <ViewReportIcon className="w-4 h-4 text-purple-500" />
                      View Report
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-purple-100 focus:text-purple-700 focus-visible:ring-0 focus-visible:outline-none lg:text-sm text-xs font-semibold  leading-[142%] tracking-[-0.28px]text-[#030712] px-3 py-[3px]">
                      <AddVisitIcon className="w-4 h-4" />
                      Add Visit
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-purple-100 focus:text-purple-700 focus-visible:ring-0 focus-visible:outline-none lg:text-sm text-xs font-semibold  leading-[142%] tracking-[-0.28px]text-[#030712] px-3 py-[3px]">
                      <AddFollowUpIcon className="w-4 h-4 text-purple-500" />
                      Add Follow Up
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-purple-100 focus:text-purple-700 focus-visible:ring-0 focus-visible:outline-none lg:text-sm text-xs font-semibold  leading-[142%] tracking-[-0.28px]text-[#030712] px-3 py-[3px] hpver">
                      <PlusIcon className="w-4 h-4 text-purple-500" />
                      Add Visit Report
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer focus:bg-purple-100 focus:text-purple-700 focus-visible:ring-0 focus-visible:outline-none lg:text-sm text-xs font-semibold  leading-[142%] tracking-[-0.28px]text-[#030712] px-3 py-[3px]">
                      <AssignPartnerIcon className="w-4 h-4 text-purple-500" />
                      Assign Partner
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div>
              <div className="flex items-center text-lg font-semibold">
                {textsData.map((item, index) => (
                  <Pragraph
                    key={index}
                    className={`${item.color} ${
                      index === 1
                        ? "border-x-[1.5px] border-[#808188] px-4 !text-xs font-normal leading-[166%] tracking-[-0.24px]"
                        : "px-4 !text-xs"
                    }`}
                    title={item.label}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="border border-[#E4E7EB] rounded-[4px] py-[3px] px-[6px] flex items-center gap-2">
                <Pragraph
                  className="!text-xs font-semibold leading-[166%] tracking-[-0.24px] !text-[#030712]"
                  title={"Next Visit :"}
                />
                <div className="relative inline-block">
                  <div
                    onClick={() => setShowCalendar2((prev) => !prev)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {/* Show icon only if no date selected */}
                    {!date1 && <CalendarIcon />}
                    <span className="text-xs text-[#A8A9AE]">
                      {date1
                        ? `${date1.getDate()} ${date3
                            .toLocaleString("en-US", { month: "long" })
                            .substring(0, 4)}` // Only first 4 letters of month
                        : ""}
                    </span>
                  </div>

                  {showCalendar1 && (
                    <div className="absolute mt-2 right-0 z-50 bg-white border rounded-md shadow-lg p-2">
                      <Calendar
                        mode="single"
                        selected={date3}
                        defaultMonth={new Date(2025, 0)} // January 2025
                        onSelect={(day) => {
                          setDate1(day);
                          setShowCalendar2(false);
                        }}
                        captionLayout="dropdown"
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

                <style jsx>{`
                  .rdp-head {
                    display: none; /* Hide Mon, Tue, ... */
                  }
                  .rdp-caption {
                    display: none; /* Hide month/year caption */
                  }
                `}</style>
              </div>

              <div className="border border-[#E4E7EB] rounded-[4px] py-[3px] px-[6px] flex items-center gap-2">
                <Pragraph
                  className="!text-xs font-semibold leading-[166%] tracking-[-0.24px] !text-[#030712]"
                  title={"Add Follow Up : "}
                />
                <div className="relative inline-block">
                  <div
                    onClick={() => setShowCalendar3((prev) => !prev)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {/* Show icon only if no date selected */}
                    {!date3 && <CalendarIcon />}
                    <span className="text-xs text-[#A8A9AE]">
                      {date3
                        ? `${date3.getDate()} ${date3
                            .toLocaleString("en-US", { month: "long" })
                            .substring(0, 4)}` // Only first 4 letters of month
                        : ""}
                    </span>
                  </div>

                  {showCalendar2 && (
                    <div className="absolute mt-2 right-0 z-50 bg-white border rounded-md shadow-lg p-2">
                      <Calendar
                        mode="single"
                        selected={date2}
                        defaultMonth={new Date(2025, 0)} // January 2025
                        onSelect={(day) => {
                          setDate2(day);
                          setShowCalendar2(false);
                        }}
                        captionLayout="dropdown"
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

                {/* CSS to hide weekdays and caption */}
                <style jsx>{`
                  .rdp-head {
                    display: none; /* Hide Mon, Tue, ... */
                  }
                  .rdp-caption {
                    display: none; /* Hide month/year caption */
                  }
                `}</style>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 pt-5 pb-3 border-b-1 border-[#8081883a]">
            <Heading
              className={
                "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-ellipsis"
              }
              title={"Additional details"}
            />
            <div className="flex flex-col gap-3">
              {contactsData.map((contact, index) => (
                <div key={index} className="flex gap-1 justify-between">
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
                  <div className="flex gap-1 items-center">
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
          <div className="flex flex-col gap-3 px-5 pt-5 pb-3 border-b-1 border-[#8081883a]">
            <Heading
              className={
                "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-ellipsis"
              }
              title={"Additional details"}
            />
            <div className="flex flex-col gap-3">
              {conData(rowData).map((contact, index) => (
                <div key={index} className="flex justify-between items-center">
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
            <div className="flex gap-2 items-center py-[18px_10px] px-6">
              <WifiIssuesIcon />
              <Pragraph
                title={"Issues"}
                className={
                  "font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712]"
                }
              />
            </div>
            <div className="border-b-1 border-[#8081883a]">
              <div className="flex gap-2 items-cente px-6 justify-around  ">
                <button
                  onClick={() => setActiveTab("critical")}
                  className={`py-[6px_10px] flex items-center gap-1 ${
                    activeTab === "critical"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] border-white border-b-3"
                  }`}
                >
                  <CalenderIcon /> Critical Task
                </button>
                <button
                  onClick={() => setActiveTab("growth")}
                  className={`pb-[6px] flex items-center gap-1  ${
                    activeTab === "growth"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] p"
                  }`}
                >
                  <GrowthIcon /> Growth Task
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[5px] py-[14px_20px] px-6 border-b-1 border-[#E4E7EB]">
              {issuesData[activeTab].map((issue, idx) => (
                <div
                  key={idx}
                  className="flex justify-between bg-[#fff] border border-[#E4E7EB] px-3 py-[6px] rounded-md lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px]text-[#030712]"
                >
                  {issue.title}
                  <span className="text-[#808188]">{issue.days}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-40">
            <div className="px-6">
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
                    className="border border-[#E4E7EB] p-[15px] rounded-lg text-sm flex flex-col gap-[5px] cursor-pointer"
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
                      {report.score && <p>Overall Score: {report.score}</p>}
                      {report.reason && <p>Reason: {report.reason}</p>}
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

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-[#E4E7EB] px-6 py-3 ">
              <button className="px-4 py-[10px] lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border-1 border-[#E4E7EB] rounded-md hover:bg-[#B751FB] hover:border-[#B751FB] hover:text-white duration-300 ease-in-out cursor-pointer">
                Cancel
              </button>
              <button className="px-4 py-[10px] lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] hover:text-[#030712] border-1 hover:border-[#E4E7EB] rounded-md bg-[#B751FB] border-[#B751FB] text-white hover:bg-white duration-300 ease-in-out cursor-pointer">
                Add Visit Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Saidbar;
