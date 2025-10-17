"use client";

import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AddImageIcon } from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";

export default function AddNewPartnerSheet() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="!p-0 bg-transparent absolute w-[190px] hover:bg-transparent cursor-pointer z-10" />
      </SheetTrigger>

      <SheetContent className="">
        {/* Header */}
        <SheetHeader className="flex justify-between border-b border-[#E4E7EB]">
          <SheetTitle className="text-base font-semibold text-gray-[] tracking-[-0.32px] leading-[150%]">
            Add New Partner
          </SheetTitle>
        </SheetHeader>

        <div className="h-screen overflow-auto custom-scrollbar">
          <div className="flex flex-col gap-2 px-5">
            <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px] block">
              Profile Image
            </Label>

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
          {/* Form Inputs */}
          <div className="flex flex-col gap-4  px-5">
            <div className="flex flex-col gap-2">
              <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                Partner Name
              </Label>
              <Input
                placeholder="Enter Name"
                className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                Partner Address
              </Label>
              <Input
                placeholder="Enter address"
                type={"name"}
                className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px">
                Pincode
              </Label>
              <Input
                placeholder="Enter pincode"
                type="number"
                className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
              />
            </div>

            <div className="flex flex-col gap-2 pb-10">
              <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px">
                Contact No.
              </Label>
              <Input
                type={"number"}
                placeholder="Enter Contact no."
                className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
              />
            </div>
          </div>
        </div>
        {/* Action Buttons */}
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
            Save
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
