"use client";
import React, { useState } from "react";

import { useRouter, usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlatformEarningData } from "@/components/helper/Helper";
import Heading from "@/components/comman/Heading";
import { ChevronRight } from "lucide-react";
import {
  EarningDetailsIcon,
  PlatformEarningIcon,
} from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";
function Platform() {
  const [status, setStatus] = useState(undefined);
  const [status2, setStatus2] = useState(undefined);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <div className="border-b-1 border-[#DCE0E5]">
        <div className="p-6 flex gap-1">
          <Heading
            className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#808188]"
            title={"Setting"}
          />
          <ChevronRight />
          <Heading
            className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
            title={"Earning"}
          />
        </div>
      </div>
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          {/* Tabs */}
          <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] min-[420px]:items-center max-[420px]:flex-col">
            <div className="flex lg:gap-7 md:gap-5 gap-3">
              <button
                onClick={() => router.push("/setting/earning/platform")}
                className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 ${
                  pathname === "/setting/earning/platform"
                    ? "border-b-3 border-[#B751FB] text-[#B751FB]"
                    : "text-[#808188] border-white border-b-3"
                }`}
              >
                <PlatformEarningIcon />
                <Pragraph
                  className={`!text-sm font-semibold ${
                    pathname === "/setting/earning/platform"
                      ? "text-black"
                      : "text-[#808188]"
                  }`}
                  title="Platform Earning"
                />
              </button>

              <button
                onClick={() => router.push("/setting/earning/earning-details")}
                className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 ${
                  pathname === "/setting/earning/earning-details"
                    ? "border-b-3 border-[#B751FB] text-[#B751FB]"
                    : "text-[#808188] border-white border-b-3"
                }`}
              >
                <EarningDetailsIcon />
                <Pragraph
                  className={`!text-sm font-semibold ${
                    pathname === "/setting/earning/earning-details"
                      ? "text-black"
                      : "text-[#808188]"
                  }`}
                  title="Earning Details"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="flex gal-2 justify-between items-center py-5">
          <Select value={status} onValueChange={(val) => setStatus(val)}>
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
          <Select value={status2} onValueChange={(val) => setStatus2(val)}>
            <SelectTrigger className="lg:w-[200px] md:w-[150px] w-[120px]   lg:px-4 md:px-3 px-2 lg:py-[10px] py-[6px]">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={undefined}> All</SelectItem>
                <SelectItem value="Active">One Month</SelectItem>
                <SelectItem value="Expired">Six Month</SelectItem>
                <SelectItem value="Due">Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto custom-scrollbar border-2 border-[#DCE0E5] rounded-[5px]">
          <Table className="min-w-[800px]">
            <TableHeader>
              <TableRow className="bg-[#F9FAFB] text-[#808188] font-semibold text-xs lg:text-sm">
                <TableHead className="py-2 px-3 text-left">
                  Revenue Type
                </TableHead>
                <TableHead className="py-2 px-3 text-left">Count</TableHead>
                <TableHead className="py-2 px-3 text-left">Revenue</TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Revenue Growth
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {PlatformEarningData.map((row, idx) => (
                <TableRow
                  key={`${row.id}-${idx}`}
                  onClick={() => setActiveRow(idx)}
                  className="border-b border-[#8081889a] "
                >
                  <TableCell className="py-2 px-3">{row.RevenueType}</TableCell>
                  <TableCell className="py-2 px-3">{row.Count}</TableCell>
                  <TableCell className="py-2 px-3">{row.Revenue}</TableCell>
                  <TableCell className="py-2 px-3">
                    {row.RevenueGrowth}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Platform;
