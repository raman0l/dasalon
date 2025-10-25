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
import { BankDetailsData, fermtcData } from "@/components/helper/Helper";
import Image from "next/image";
import Pragraph from "@/components/comman/Pragraph";
import {
  AccountNoIcon,
  AddedOnIcon,
  BankIcon,
  FemaleIcon,
  GenderIcon,
  GmailIcon,
  IfscIcon,
  MaleIcon,
  PhoneIcon,
  SalonIcon,
  StatusIcon,
  TeamMemberIcon,
} from "@/components/helper/Icon";
import AddAccountSheet from "@/components/comman/AddAccount";

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
            <AddAccountSheet />
            <span className="text-xl text-white">+ </span>Add Account
          </Button>
        </div>
        <div className="px-5 pt-5">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5 pt-5">
            {BankDetailsData.map((item, index) => (
              <div className="group max-w-[307px]" key={index}>
                <div className="group-hover:bg-[#F4E3FF] bg-white rounded-2xl shadow-sm border border-[#E4E7EB] p-4 cursor-pointer space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <Pragraph
                          className={
                            "font-semibold lg:!text-base !text-sm !text-[#030712]"
                          }
                          title={item.name}
                        />
                        <span className="text-[10px] font-normal flex items-center gap-1  border border-[#808188] bg-[#E4E7EB] px-2 py-[2px] rounded-full w-fit">
                          {item.gender === "Male" ? (
                            <MaleIcon />
                          ) : (
                            <FemaleIcon />
                          )}
                          {item.gender}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-1 group-hover:border-white border-[#E4E7EB] pt-3 space-y-2 text-[13px] text-gray-800">
                    <div className="flex items-center gap-2">
                      <BankIcon size={14} />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={"Bank:"}
                      />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={item.bank}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <AccountNoIcon size={14} />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={"A/C NO.:"}
                      />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={item.accountNo}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <IfscIcon size={14} />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={"IFSC:"}
                      />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={item.ifsc}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <AddedOnIcon size={14} />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={"Added On:"}
                      />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={item.addedOn}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusIcon size={14} />
                      <Pragraph
                        className={"!text-[13px] font-medium !text-[#030712]"}
                        title={"Status:"}
                      />
                      <Pragraph
                        className={`px-2 py-[1px] rounded-full !text-[13px] font-medium !text-[#030712] ${
                          item.status === "Verified"
                            ? "text-[#030712] bg-[#E3F7E9] border-[#31A553] border-1"
                            : item.status === "Pending"
                            ? "text-[#030712] bg-[#FFEFDB] border-[#F5640A] border-1"
                            : "text-[#030712] bg-[#FF888857] border-[#FF0000] border-1"
                        }`}
                        title={item.status}
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
