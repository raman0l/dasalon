"use client";

import React, { useState } from "react";

import Heading from "@/components/comman/Heading";
import { Button } from "@/components/ui/button";
import AddMember from "@/components/comman/AddMember";
import { totalPincodeData } from "@/components/helper/Helper";
import Pragraph from "@/components/comman/Pragraph";
import { MemberIcon, RightgreenIcon } from "@/components/helper/Icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TerritoryDetails() {
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
            title={"Territory Details"}
          />
          <Button
            className="!bg-[#B751FB] hover:bg-[#B751FB] cursor-pointer hoover:shadow !text-sm font-semibold leading-[142%] tracking-[-0.28px] py-1 flex items-center gap-1 !rounded-md p-2 text-white"
            open={open}
            onClose={setOpen}
          >
            <span className="text-xl text-white">+ </span>Add Member
            <AddMember />
          </Button>
        </div>
        <div className="px-4 flex flex-col gap-5">
          <div
            className="flex flex-col gap-4 pt-4
          "
          >
            <Heading
              className={"!text-sm font-semibold !text-[#030712]"}
              title={"Total PIN Codes : 50"}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 gap-2">
              {totalPincodeData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border-[#E4E7EB] border-2 flex flex-col lg:gap-5 md:gap-4 gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-[6px] rounded-[6px] bg-[#F0F2F4]">
                      {stat.icon}
                    </div>
                    <Pragraph
                      title={stat.title}
                      className="font-semibold leading-[150%] tracking-[-0.32px] !text-[#030712]"
                    />
                  </div>
                  <div>
                    <div className="flex gap-2 justify-between items-baseline">
                      <div className="flex gap-[10px] items-baseline">
                        <Heading
                          className="lg:!text-[40px] md:!text-4xl !text-2xl font-semibold leading-[120%] tracking-[-0.8px] !text-[#1D212C]"
                          title={stat.value}
                        />
                        <div>
                          <div className="flex gap-1 items-center">
                            <RightgreenIcon />
                            <Pragraph
                              className="lg:!text-sm !text-xs font-medium leading-[142%] tracking-[-0.28px] !text-[#31A553]"
                              title={stat.change}
                            />
                          </div>

                          <Pragraph
                            className={"!text-xs !text-[#808188]  font-medium"}
                            title={stat.vs}
                          />
                        </div>
                      </div>
                      <Pragraph
                        className="!text-xs font-medium leading-[133%] tracking-[-0.24px] bg-[#E0F6E6] rounded-[4px] py-[2px] px-2 !text-[#030712]"
                        title={stat.percent}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex gap-2 justify-between items-center">
              <Select
                value={statusFilter}
                onValueChange={(val) => setStatusFilter(val)}
              >
                <SelectTrigger className="lg:w-[200px] md:w-[150px] w-[120px]   lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px">
                  <MemberIcon />
                  <SelectValue placeholder="Select Member" />
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
            <div className="overflow-x-auto custom-scrollbar border-2 border-[#DCE0E5] rounded-[5px]">
              <Table className="min-w-[1200px]">
                <TableHeader>
                  <TableRow className="bg-[#F9FAFB] text-[#808188] font-semibold text-xs lg:text-sm">
                    <TableHead className="py-2 px-3 text-left">
                      PIN Code
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      City / Area
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Prospect Partner
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Registered Partner
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Active Partner
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Health Score
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Issues
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Total Sales
                    </TableHead>
                    <TableHead className="py-2 px-3 text-left">
                      Remarks
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {mamberformdata.map((row, idx) => (
                    <TableRow
                      key={`${row.id}-${idx}`}
                      className={
                        "border-b border-[#8081889a] border-l-transparent border-l-[3px]  bg-white hover:bg-[#EBD9FF] hover:border-l-[#b751fb]"
                      }
                    >
                      <TableCell className="inline-flex items-center gap-2 py-2 px-3 cursor-pointer">
                        {row.pin}
                        <Registered />
                      </TableCell>
                      <TableCell className="py-2 px-3">{row.city}</TableCell>
                      <TableCell className="py-2 px-3">
                        {row.ProspectPartner}
                      </TableCell>

                      <TableCell className="py-2 px-3">
                        {row.RegisteredPartner}
                      </TableCell>

                      <TableCell className="py-2 px-3">
                        {row.ActivePartner}
                      </TableCell>
                      <TableCell className="py-2 px-3">
                        {row.HealthScore}
                      </TableCell>
                      <TableCell className="py-2 px-3">{row.issue}</TableCell>

                      <TableCell className="py-2 px-3">
                        {row.TotalSales}
                      </TableCell>

                      <TableCell className="py-2 px-3">{row.remarks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TerritoryDetails;
