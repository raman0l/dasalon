"use client";

import React, { useState } from "react";

import Heading from "@/components/comman/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { fermtcData } from "@/components/helper/Helper";
import Image from "next/image";
import Pragraph from "@/components/comman/Pragraph";
import {
  GenderIcon,
  GmailIcon,
  PhoneIcon,
  SalonIcon,
  TeamMemberIcon,
} from "@/components/helper/Icon";

function BankDetails() {
  const [open, setOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="w-full">
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Setting"}
            />
          </div>
        </div>
        <div
          className="p-4 border-b-2 border-[#DCE0E5] flex  gap-2 justify-between items-center
        "
        >
          <Heading
            className={
              "lg:!text-xl md:!text-lg !text-base font-semibold !text-[#030712]"
            }
            title={"Bank  Details"}
          />
          <Button
            className="!bg-[#B751FB] hover:bg-[#B751FB] cursor-pointer hoover:shadow !text-sm font-semibold leading-[142%] tracking-[-0.28px] py-1 flex items-center gap-1 !rounded-md p-2 text-white"
            open={open}
            onClose={setOpen}
          >
            <span className="text-xl text-white">+ </span>Add Account
          </Button>
        </div>
        <div>
          <div className="flex gap-2 justify-between items-center">
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
            <div className="relative flex-1 sm:flex-auto max-w-[290px]">
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
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fermtcData.map((member, index) => (
              <div key={index} className="group">
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
                            {member.gender}
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
      </div>
    </>
  );
}

export default BankDetails;
