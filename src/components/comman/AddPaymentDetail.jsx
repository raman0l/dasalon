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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2Icon, BanknoteIcon } from "lucide-react";
import Pragraph from "./Pragraph";
import {
  AddImageIcon,
  BankDetailsIcon,
  BusinessDetailsIcon,
} from "../helper/Icon";
import BankDetails from "../pages/home/setting/BankDetails";

export default function AddAccountSheet() {
  const [open, setOpen] = useState(false);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className={
            "!p-0 bg-transparent w-[100px] absolute hover:bg-transparent cursor-pointer z-10"
          }
        ></Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="lg:w-[400px] w-[350px] max-[400px]:w-full"
      >
        <SheetHeader className="border-b border-[#E4E7EB]">
          <SheetTitle>Add Payment Detail</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 overflow-auto px-4 custom-scrollbar">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#030712]">Name</label>
            <Input
              className={
                "placeholder:text-xs font-medium placeholder:text-[#18181B80]"
              }
              placeholder="Enter Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#030712]">
              Month
            </label>
            <Input
              className={
                "placeholder:text-xs font-medium placeholder:text-[#18181B80]"
              }
              placeholder="Select Month"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#030712]">
              Total Earning
            </label>
            <Input
              className={
                "placeholder:text-xs font-medium placeholder:text-[#18181B80]"
              }
              placeholder="₹1,75,000"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#030712]">
              Total Amount
            </label>
            <Input
              className={
                "placeholder:text-xs font-medium placeholder:text-[#18181B80]"
              }
              placeholder="₹"
            />
          </div>
          <div className="flex flex-col gap-2 w-auto">
            <label className="text-xs font-semibold text-[#030712]">
              Transaction ID
            </label>
            <div className="flex gap-2 full">
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B80]"
                }
                placeholder="Enter Transaction ID"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#030712]">
              Remarks
            </label>
            <textarea
              className={
                "placeholder:text-xs font-medium placeholder:text-[#18181B80] w-full border-1 border-[#E4E4E7] p-3 rounded-md text-xs"
              }
              placeholder="Enter any remarks or additional notes"
            />
          </div>

          <div className="w-full border-2 border-dashed border-[#E2E5E9] rounded-md py-8 flex flex-col items-center justify-center bg-[#F9FAFB] hover:bg-[#F9FAFB] transition cursor-pointer">
            <Input
              type="file"
              accept="image/*"
              id="file-upload"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col  items-center justify-center cursor-pointer"
            >
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-36 object-cover rounded-md"
                />
              ) : (
                <>
                  <AddImageIcon />

                  <span className="text-xs font-medium leading-[133%] tracking-[-0.24px] text-[#8C99A6] flex gap-[2px]">
                    Drag and drop image or
                    <Pragraph
                      className={
                        "!text-xs font-semibold leading-[133%] tracking-[-0.24px] !text-[#030712]"
                      }
                      title={"browse"}
                    />
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Footer Buttons */}

        <SheetFooter className="flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpen(false)}
            className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer relative"
          >
            Submit
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
