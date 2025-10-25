"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EarningDetailsData } from "@/components/helper/Helper";
import { Heading1 } from "lucide-react";
import Heading from "@/components/comman/Heading";
import { ChevronRight } from "lucide-react";
import {
  EarningDetailsIcon,
  PlatformEarningIcon,
} from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";

function EarningDetails() {
  const [status, setStatus] = useState(undefined);
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
        <div className="flex gal-2 justify-end items-center py-5">
          <Select value={status} onValueChange={(val) => setStatus(val)}>
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
                <TableHead className="py-2 px-3 text-left">name</TableHead>
                <TableHead className="py-2 px-3 text-left">
                  TerritoryName
                </TableHead>
                <TableHead className="py-2 px-3 text-left">
                  TotalEarning
                </TableHead>
                <TableHead className="py-2 px-3 text-left">
                  TotalAmount
                </TableHead>
                <TableHead className="py-2 px-3 text-left">
                  Transaction ID
                </TableHead>
                <TableHead className="py-2 px-3 text-left">Remarks</TableHead>
                <TableHead className="py-2 px-3 text-left">File</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {EarningDetailsData.map((row, idx) => (
                <TableRow
                  key={`${row.id}-${idx}`}
                  onClick={() => setActiveRow(idx)}
                  className="border-b border-[#8081889a] "
                >
                  <TableCell className="inline-flex items-center gap-2 py-2 px-3">
                    {/* <AddPaymentDetail /> */}
                    <Image
                      src={row.image}
                      alt="salon"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full"
                    />
                    <span>{row.name}</span>
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    {row.TerritoryName}
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    {row.TotalEarning}
                  </TableCell>
                  <TableCell className="py-2 px-3">{row.TotalAmount}</TableCell>
                  <TableCell className="py-2 px-3">
                    {row.TransactionID}
                  </TableCell>
                  <TableCell className="py-2 px-3">{row.Remarks}</TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="!p-0 bg-transparent absolute hover:bg-transparent cursor-pointer z-10">
                        <TableCell className="py-2 px-3 cursor-pointer">
                          {row.File}
                        </TableCell>
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent className="max-w-sm sm:max-w-md p-0  border-none shadow-none bg-black">
                      <div className="flex justify-center items-center bg-black rounded-xl pt-15">
                        <Image
                          src="/assets/png/payment.png"
                          alt="Payment Screenshot"
                          width={350}
                          height={500}
                          className="rounded-lg object-contain w-full"
                        />
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default EarningDetails;
