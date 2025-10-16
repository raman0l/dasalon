"use client";

import Pragraph from "@/components/comman/Pragraph";
import {
  contactsData,
  fermtcData,
  insightsData,
  issues1Data,
  issuesData,
  ManageData,
  menuItemsData,
  reportsData,
  textsData,
  timesData,
} from "@/components/helper/Helper";
import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  CalendarIcon,
  CalenderIcon,
  CallIcon,
  GrowIcon,
  GrowthIcon,
  LoctionIcon,
  ManageIcon,
  MenIcon,
  PromotoIcon,
  ScoreIcon,
  ViewIcon,
  ViewReportIcon,
  WifiIssuesIcon,
} from "@/components/helper/Icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import React, { useState, useEffect } from "react";
import VisitReport from "../tab1/VisitReport";
import Heading from "@/components/comman/Heading";

import NewVisit from "../tab1/NewVisit";
import FollowUp from "../tab1/FollowUp";
import AddNewVisitReport from "./AddNewVisitReport";

export default function Registered() {
  const getDisplayName = (value, data) =>
    data.find((item) => item.toLowerCase() === value) || "";

  const [activeTab, setActiveTab] = useState("manage");

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  });

  const [step, setCurrentStep] = useState(null);
  const [date, setDate] = useState(null);
  const [followUpDate, setFollowUpDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAddDate = () => {
    setDate(new Date().toLocaleDateString());
  };

  const handleAddFollowUpDate = () => {
    setFollowUpDate(new Date().toLocaleDateString());
  };

  const [activeItem, setActiveItem] = useState(null);
  const handleSelect = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };

  return (
    <>
      {" "}
      <Sheet
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen) {
            setCurrentStep(0);
          }
        }}
      >
        <SheetTrigger asChild>
          <Button
            className={
              "!P-0 bg-transparent absolute w-[190px] hover:bg-transparent cursor-pointer z-10"
            }
          ></Button>
        </SheetTrigger>

        <SheetContent className=" bg-white gap-0 h-screen">
          <SheetHeader
            className={"border-b-1 border-[#E4E7EB] lg:p-6 md:p-4 p-3 gap-0"}
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
          <div className="md:w-[383px] w-[320px] overflow-auto pb-15 custom-scrollbar">
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
                </div>
              </div>

              <div className="flex gap-2 py-[17px_15px] px-3">
                {ManageData.map((item, index) => (
                  <Pragraph
                    key={index}
                    className={`${item.color} ${
                      index > 0 ? "border-l !border-[#808188]" : ""
                    } !text-xs font-semibold leading-[166%] tracking-[-0.24px] px-3`}
                    title={item.label}
                  />
                ))}
              </div>
            </div>

            <div>
              {/* Next Visit + Follow Up */}

              <div className="flex gap-10 pb-[22px] border-b-1 border-[#E4E7EB] lg:px-6 md:px-4 px-3">
                <div
                  className="border rounded py-[3px] px-[6px] border-[#E4E7EB] flex items-center gap-2 cursor-pointer hover:bg-[#e4e7eba5] duration-300 ease-in-out relative"
                  onClick={() => setCurrentStep(0)}
                >
                  <Pragraph
                    className="!text-xs font-semibold !text-[#030712]  leading-[166%] tracking-[-0.24px]"
                    title={"Next Visit:"}
                  />
                  {date ? (
                    <span className="!text-xs">{date}</span>
                  ) : (
                    <div onClick={handleAddDate} className="cursor-pointer">
                      <CalendarIcon size={16} />
                    </div>
                  )}
                  <NewVisit />
                </div>
                <div
                  onClick={() => setCurrentStep(1)}
                  className="border rounded py-[3px] px-[6px] border-[#E4E7EB] flex items-center gap-2 cursor-pointer hover:bg-[#e4e7eba5] duration-300 ease-in-out relative"
                >
                  <FollowUp />
                  <Pragraph
                    className="!text-xs font-semibold !text-[#030712] leading-[166%] tracking-[-0.24px]"
                    title="Follow Up:"
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
                  className="lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px]"
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
                <div className="border-b border-[#8081883a]">
                  <div className="flex items-center justify-around w-full lg:px-6 md:px-5 px-4">
                    {/* Manage */}
                    <button
                      onClick={() => setActiveTab("manage")}
                      className={`flex items-center gap-1 justify-center py-2 w-1/3
        ${
          activeTab === "manage"
            ? "border-b-2 border-[#B751FB] text-[#B751FB]"
            : "border-b-2 border-transparent text-[#808188]"
        }
        lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]`}
                    >
                      <ManageIcon /> Manage
                    </button>

                    {/* Grow */}
                    <button
                      onClick={() => setActiveTab("growth")}
                      className={`flex items-center gap-1 justify-center py-2 w-1/3
        ${
          activeTab === "growth"
            ? "border-b-2 border-[#B751FB] text-[#B751FB]"
            : "border-b-2 border-transparent text-[#808188]"
        }
        lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]`}
                    >
                      <GrowIcon /> Grow
                    </button>

                    {/* Promote */}
                    <button
                      onClick={() => setActiveTab("promote")}
                      className={`flex items-center gap-1 justify-center py-2 w-1/3
        ${
          activeTab === "promote"
            ? "border-b-2 border-[#B751FB] text-[#B751FB]"
            : "border-b-2 border-transparent text-[#808188]"
        }
        lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]`}
                    >
                      <PromotoIcon /> Promote
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-[5px] py-[14px_20px] lg:px-6 md:px-5 px-4 border-b-1 border-[#E4E7EB]">
                  {issues1Data?.[activeTab]?.map((issue, idx) => (
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
              </div>
            </div>
          </div>
          <SheetFooter className="flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setCurrentStep(3)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer relative"
            >
              Add Visit Report
              <AddNewVisitReport />
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
