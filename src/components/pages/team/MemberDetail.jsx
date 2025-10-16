"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Pragraph from "@/components/comman/Pragraph";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import {
  CallIcon,
  CurrentPerformanceIcon,
  DisableIcon,
  EditIcon,
  GenderIcon,
  GrowthIcon,
  MailIcon,
  PastPerformanceIcon,
  PhoneIcon,
  SalesIcon,
  SalonIcon,
  TopBottomIcon,
  ViewsIcon,
} from "@/components/helper/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  currentData,
  currentPerformance,
  pastPerformance,
} from "@/components/helper/Helper";
import AddTargetsDialog from "./AddTargets";

export default function MemberDetail() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className={
              "!P-0 bg-transparent absolute h-full w-full hover:bg-transparent cursor-pointer z-10 max-w-sm"
            }
          ></Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="lg:w-[400px] w-[350px] max-[400px]:w-full"
        >
          <SheetHeader className={"border-b border-[#E4E7EB]"}>
            <SheetTitle className={"flex items-center gap-4"}>
              <Pragraph className={"!text-[#030712]"} title={"Member detail"} />
              <DropdownMenu className="p-0">
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2 cursor-pointer !p-0 !bg-transparent !shadow-none text-[#808188]">
                    <MoreVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-10 bg-white border border-[#E4E7EB] p-0 mr-10">
                  <DropdownMenuItem
                    className="
    group flex items-center gap-2 
    !text-xs font-normal leading-[166%] tracking-[-0.24px] 
    !text-[#030712] hover:!bg-[#F1DCFF] hover:!text-[#B751FB]
    transition-colors duration-200
  "
                  >
                    <ViewsIcon className="text-current group-hover:text-[#B751FB]" />
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="
    group flex items-center gap-2 
    !text-xs font-normal leading-[166%] tracking-[-0.24px] 
    !text-[#030712] hover:!bg-[#F1DCFF] hover:!text-[#B751FB]
    transition-colors duration-200
  "
                  >
                    <EditIcon className="text-current group-hover:text-[#B751FB]" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="
    group flex items-center gap-2 
    !text-xs font-normal leading-[166%] tracking-[-0.24px] 
    !text-[#030712] hover:!bg-[#F1DCFF] hover:!text-[#B751FB]
    transition-colors duration-200
  "
                  >
                    <DisableIcon className="text-current group-hover:text-[#B751FB]" />
                    Enable / Disable
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SheetTitle>
          </SheetHeader>

          <div className="h-screen overflow-auto custom-scrollbar">
            <div className="p-3 border-1 rounded-2xl border-[#E4E7EB] md:mx-5 mx-3 mt-2 mb-7 flex gap-2 justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <h2 className="font-medium text-[15px] text-[#030712] border-r-1 pr-2 border-[#808188]">
                      Wade Warren
                    </h2>
                    <div className="flex items-center gap-1  bg-[#E4E7EB] rounded-[100px] px-2 py-[2px] border-[#808188] border-1">
                      <GenderIcon />
                      <Pragraph
                        className={
                          "font-normal leading-[160%] tracking-[-0.2px] !text-[10px] !text-[#030712]"
                        }
                        title={"Male"}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-[#808188] flex items-center gap-1">
                    <MailIcon size={14} />
                    curtis.weaver@example.com
                  </p>
                </div>
              </div>
              <p className="Text-[#030712] text-[10px] font-semibold leading-[100%] border-1 border-[#8EBAF6] py-1 px-2 rounded-xl">
                RM
              </p>
            </div>
            <div className=" flex flex-col gap-2 border-y-1 border-[#E4E7EB] px-5 py-3 text-sm text-gray-700">
              <p className="text-sm text-[#808188]">
                Status:
                <span className="text-[#030712] font-medium"> Working</span>
              </p>
              <p className="text-sm text-[#808188]">
                Status date:
                <span className="text-[#030712] font-medium">
                  February 24, 2025
                </span>
              </p>
            </div>
            <Tabs defaultValue="details" className="flex-1 flex flex-col">
              <TabsList className="flex md:gap-5 gap-3  px-5 py-0 mt-5 bg-transparent justify-between w-full border-b-1 border-[#E4E7EB]">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:text-[#B751FB] data-[state=active]:border-b-[#B751FB] border-b-3 pb-2 rounded-none data-[state=active]:shadow-none justify-start"
                >
                  <GrowthIcon />
                  Basic Details
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="data-[state=active]:text-[#B751FB] data-[state=active]:border-b-[#B751FB] border-b-3  pb-2 rounded-none data-[state=active]:shadow-none justify-start"
                >
                  <GrowthIcon />
                  Performance
                </TabsTrigger>
              </TabsList>
              {/* Basic Details */}
              <TabsContent
                value="details"
                className="flex-1 overflow-y-auto px-5 py-4 space-y-3"
              >
                <div>
                  <p className="font-semibold text-sm text-[#030712]">
                    Basic Info
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0 ">
                      <p className="text-sm text-[#808188] font-medium">Name</p>
                      <p className="text-sm text-[#030712] font-semibold">
                        Gretchen Vaccaro
                      </p>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <p className="text-sm text-[#808188] font-medium">
                        Gender
                      </p>
                      <span className="text-sm text-[#030712] font-semibold flex items-center">
                        <GenderIcon /> Male
                      </span>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <span className="text-sm text-[#808188] font-medium">
                        Phone
                      </span>
                      <span className="text-sm text-[#030712] font-semibold">
                        +91 12333222423
                      </span>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <span className="text-sm text-[#808188] font-medium">
                        Email
                      </span>
                      <span className="text-sm text-[#030712] font-semibold">
                        kuldeep@gmail.com
                      </span>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <span className="text-sm text-[#808188] font-medium">
                        Role
                      </span>
                      <span className="text-sm text-[#030712] font-semibold">
                        TC
                      </span>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <span className="text-sm text-[#808188] font-medium">
                        Assigned
                      </span>
                      <span className="text-sm text-[#030712] font-semibold">
                        <span className="border border-[#B751FB] text-[#B751FB] text-[10px] px-1 py-[1px] rounded-full">
                          BA
                        </span>
                        John Walley
                      </span>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <span className="text-sm text-[#808188] font-medium">
                        Facebook
                      </span>
                      <span className="text-sm text-[#030712] font-semibold">
                        https://www.facebook.com
                      </span>
                    </div>
                    <div className="flex justify-between border-b-1 border-[#E4E7EB] py-2 m-0">
                      <span className="text-sm text-[#808188] font-medium">
                        Instagram
                      </span>
                      <span className="text-sm text-[#030712] font-semibold">
                        https://www.instagram.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Manage */}
                <div className="pt-2 flex flex-col gap-2">
                  <p className="font-semibold text-sm text-[#030712]">
                    Manage: 2 RM
                  </p>
                  <div className="flex justify-between text-sm">
                    <p className="flex text-sm text-[#808188] font-medium">
                      RM:
                      <span className="text-[#030712]">Rohit Sharma</span>
                    </p>
                    <span className="flex items-center gap-1 font-medium text-[#030712]">
                      <CallIcon /> 23348-32948
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="flex text-sm text-[#808188] font-medium">
                      RM:
                      <span className="text-[#030712]">Priya Kumari</span>
                    </p>
                    <span className="flex items-center gap-1 font-medium text-[#030712]">
                      <CallIcon /> 84950-34859
                    </span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="performance"
                className="flex-1 overflow-y-auto space-y-6"
              >
                <div className="px-5 pt-8">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection("current")}
                  >
                    <p className="font-semibold text-sm text-[#030712] flex items-center gap-2">
                      <CurrentPerformanceIcon /> Current Performance
                    </p>
                    <TopBottomIcon />
                  </div>

                  {openSection === "current" && (
                    <div className="mt-5 space-y-3">
                      {currentData.map((item, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          <div className="flex justify-between text-sm">
                            <div className="flex gap-1 items-center">
                              <div className="bg-[#F3F4F6] rounded-full p-1">
                                {item.icon}
                              </div>
                              <span className="text-sm font-medium text-[#030712]">
                                {item.name}
                              </span>
                            </div>

                            <div className="flex gap-3 items-center">
                              <span
                                className={`font-medium ${
                                  item.change.includes("-")
                                    ? "text-[#F35353]"
                                    : "text-[#2EE560]"
                                }`}
                              >
                                {item.change}
                              </span>
                              <p className="text-xs text-[#000000] font-medium">
                                {item.totel}
                              </p>
                            </div>
                          </div>
                          <Progress value={item.value} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t-1 border-[#E4E7EB] px-5 py-5">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection("past")}
                  >
                    <p className="font-semibold text-sm text-gray-800 flex items-center gap-2">
                      <PastPerformanceIcon /> Past Performance
                    </p>
                    <TopBottomIcon />
                  </div>

                  {openSection === "past" && (
                    <div className="mt-5 space-y-3">
                      {currentData.map((item, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          <div className="flex justify-between text-sm">
                            <div className="flex gap-1 items-center">
                              <div className="bg-[#F3F4F6] rounded-full p-1">
                                {item.icon}
                              </div>
                              <span className="text-sm font-medium text-[#030712]">
                                {item.name}
                              </span>
                            </div>

                            <div className="flex gap-3 items-center">
                              <span
                                className={`font-medium ${
                                  item.change.includes("-")
                                    ? "text-[#F35353]"
                                    : "text-[#2EE560]"
                                }`}
                              >
                                {item.change}
                              </span>
                              <p className="text-xs text-[#000000] font-medium">
                                {item.totel}
                              </p>
                            </div>
                          </div>
                          <Progress value={item.value} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <SheetFooter className="flex justify-end gap-3 border-t-2 border-[#E4E7EB]">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 text-sm font-semibold text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
            >
              Cancel
            </Button>

            <Button className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 text-sm font-semibold rounded-md !bg-[#B751FB] border-[#B751FB] text-white hover:!shadow-lg duration-300 ease-in-out cursor-pointer">
              Add Targets
              <AddTargetsDialog />
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
