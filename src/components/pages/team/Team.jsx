"use client";

import React, { useState, useEffect } from "react";
import Heading from "@/components/comman/Heading";

import {
  CalenderIcon,
  CardUiIcon,
  GenderIcon,
  GmailIcon,
  GrowthIcon,
  MenuTeamIcon,
  PerformanceIcon,
  PhoneIcon,
  SalonIcon,
  TeamIcon,
  TeamMemberIcon,
  TeamsIcon,
} from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";
import { MemoryStick, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  fmnmanberData,
  rmnmanberData,
  tcnmanberData,
} from "@/components/helper/Helper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddMember from "../../comman/AddMember";
import MemberDetail from "./MemberDetail";

export function Team() {
  const [activeTab, setActiveTab] = useState("members");
  const [open, setOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Team"}
            />
          </div>
        </div>
        <div>
          <div className="border-b-1 border-[#DCE0E5]">
            <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] flex-col min-[600px]:flex-row">
              <div className="flex gap-7">
                <button
                  onClick={() => setActiveTab("members")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 ${
                    activeTab === "members"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] border-white border-b-3"
                  }`}
                >
                  <TeamsIcon className={"!w-2 !h-[20px]"} /> Members
                </button>
                <button
                  onClick={() => setActiveTab("performance")}
                  className={`lg:py-[19px] md:py-4 py-3  flex items-center gap-1  ${
                    activeTab === "performance"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                  }`}
                >
                  <PerformanceIcon /> Performance
                </button>
              </div>

              <div className="flex items-center gap-4 max-[420px]:justify-end max-[600px]:pb-2 justify-end">
                {activeTab === "members" && (
                  <div className="flex lg:gap-3 gap-2 items-center  max-[400px]:flex-wrap">
                    <div className="flex items-center gap-4 max-[600px]:justify-end ">
                      <div className="flex items-center gap-2 !text-sm">
                        <span className="lg:w-4 md:w-3 w-2 lg:h-4 md:h-3 h-2 rounded-full bg-[#31A553]"></span>
                        <Pragraph
                          className={
                            "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                          }
                          title={"Working"}
                        />
                      </div>
                      <div className="flex items-center gap-2 !text-sm">
                        <span className="lg:w-4 md:w-3 w-2 lg:h-4 md:h-3 h-2 rounded-full bg-[#F00]"></span>
                        <Pragraph
                          className={
                            "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                          }
                          title={"Not-Working"}
                        />
                      </div>
                    </div>
                    <Button
                      className="!bg-[#B751FB] hover:bg-[#B751FB] cursor-pointer hoover:shadow !text-sm font-semibold leading-[142%] tracking-[-0.28px] py-1 flex items-center gap-1 !rounded-md p-2 text-white"
                      open={open}
                      onClose={setOpen}
                    >
                      <span className="text-xl text-white">+ </span>Add Member
                      <AddMember />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {activeTab === "members" && (
          <div className="w-full px-4 md:px-5 lg:px-6">
            {/* Top bar: Total Members + Search + Icons */}
            <div className="flex  max-[500px]:!flex-col justify-between min-[500px]:items-center gap-4 pt-4 md:pt-5 lg:pt-6">
              <h2 className="text-base text-[#808188] font-semibold traking-[-2%]">
                Total Members :<span className="text-[#030712]">16</span>
              </h2>

              <div className="flex gap-3 sm:gap-4 lg:gap-5 max-[500px]:w-full w-auto max-[500px]:!flex-col">
                <div className="relative flex-1 sm:flex-auto">
                  <Search
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D9DDE3]"
                    size={18}
                  />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-2 border border-[#D9DDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B751FB] placeholder:text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="border border-[#E4E7EB] p-2 rounded-md bg-white shadow-sm hover:bg-[#F1DCFF] cursor-pointer transition duration-300">
                    <CardUiIcon />
                  </div>
                  <div className="border border-[#E4E7EB] p-2 rounded-md bg-white shadow-sm hover:bg-[#F1DCFF] cursor-pointer transition duration-300">
                    <MenuTeamIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Member Lists */}
            {[
              { title: "TC List ( 2 )", data: tcnmanberData },
              { title: "RM List ( 4 )", data: rmnmanberData },
              { title: "FM List ( 10)", data: fmnmanberData },
            ].map((list, idx) => (
              <div
                key={idx}
                className="mt-6 md:mt-5 lg:mt-8 flex flex-col gap-4"
              >
                <Heading
                  className="!text-md md:!text-base lg:!text-lg !text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
                  title={list.title}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {list.data.map((member, index) => (
                    <div key={index} className="group">
                      <MemberDetail />
                      <div
                        className="relative bg-white rounded-xl border border-[#E4E7EB] shadow-sm transition-all duration-300 group-hover:bg-[#F1DCFF] cursor-pointer"
                        onClick={() => setOpen(true)}
                      >
                        <div
                          className="absolute top-2 left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 rounded-full"
                          style={{ backgroundColor: member.color }}
                        ></div>

                        <div className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-5">
                          <div className="flex items-center gap-4">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={48}
                              height={48}
                              className="object-cover rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                              <Pragraph
                                className="font-semibold lg:!text-base !text-sm !text-[#030712] leading-[150%] tracking-[0.32px]"
                                title={member.name}
                              />
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 bg-[#E4E7EB] border border-[#808188] rounded-full px-2.5 py-1">
                                  <GenderIcon />
                                  <Pragraph
                                    className="!text-[10px] text-[#030712] font-normal"
                                    title={member.gender}
                                  />
                                </div>
                                <div className="w-px h-5 bg-[#E4E7EB] group-hover:bg-white transition-all"></div>
                                <div
                                  className="rounded-full px-2.5 py-1 font-semibold"
                                  style={{
                                    border: `1px solid ${member.roleBorder}`,
                                    backgroundColor: member.roleBg,
                                  }}
                                >
                                  <Pragraph
                                    className="!text-[10px] !text-[#030712]"
                                    title={member.role}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-[#E4E7EB] px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-5 flex flex-col gap-2 transition-all duration-300 group-hover:border-white">
                          <div className="flex gap-2 items-center">
                            <PhoneIcon />
                            <Pragraph
                              className="!text-xs !text-[#030712] font-medium"
                              title={member.phone}
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <GmailIcon />
                            <Pragraph
                              className="!text-xs !text-[#030712] font-medium"
                              title={member.email}
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <TeamMemberIcon />
                            <Pragraph
                              className="!text-xs !text-[#030712] font-medium"
                              title={`manages: ${member.manages}`}
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <SalonIcon />
                            <Pragraph
                              className="!text-xs !text-[#030712] font-medium"
                              title={`totalSalons: ${member.totalSalons}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Team;
