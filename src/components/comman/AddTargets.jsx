"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "recharts";
import { Input } from "@/components/ui/input";
import { fieldsData } from "@/components/helper/Helper";
import Heading from "@/components/comman/Heading";
import Pragraph from "@/components/comman/Pragraph";

export default function AddTargetsDialog() {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          className={
            "!P-0 bg-transparent w-[190px] absolute hover:bg-transparent cursor-pointer z-10"
          }
        ></Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="lg:w-[400px] w-[350px] max-[400px]:w-full rounded-none">
        <AlertDialogHeader>
          <div className="flex gap-2 justify-between max-w-[350px] items-center p-4 pb-0">
            <Heading
              className={"!text-base text-[#030712] font-semibold"}
              title={"Add Targets"}
            />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="oct">October</SelectItem>
                <SelectItem value="nov">November</SelectItem>
                <SelectItem value="dec">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AlertDialogHeader>

        <div className="space-y-4 max-h-[75vh] overflow-y-auto w-full custom-scrollbar mt-4 p-4">
          <div className="flex flex-col gap-2">
            <Heading
              className="!text-sm font-semibold !text-[#030712]"
              title={"Set Targets for Wade Warren (FE)"}
            />
            <Pragraph
              className="!text-xs font-semibold !text-[#030712]"
              title={"Defines the performance targets for upcoming period"}
            />
          </div>

          <div className="py-4 flex flex-col gap-4">
            {fieldsData.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-[#030712]">
                  {item.label}
                </p>

                <Select>
                  <SelectTrigger className="text-[14px] border-gray-300 bg-white w-full">
                    <SelectValue placeholder={item.value} />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    {item.label.toLowerCase().includes("ratio") ||
                    item.label.includes("%")
                      ? Array.from({ length: 100 }, (_, index) => (
                          <SelectItem
                            key={index + 1}
                            value={`${index + 1}%`}
                            className={"text-[#18181B] text-sm font-medium"}
                          >
                            {index + 1}%
                          </SelectItem>
                        ))
                      : Array.from({ length: 200 }, (_, index) => (
                          <SelectItem
                            key={index + 1}
                            value={`${index + 1}`}
                            className={"text-[#18181B] text-sm font-medium"}
                          >
                            {index + 1}
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>

                <p className="text-xs font-normal text-[#030712B2]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AlertDialogFooter className="flex justify-end gap-3 p-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 text-sm font-semibold text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            className="!bg-[#B751FB] hover:!bg-[#b751fbdd] cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Save
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
