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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadCloud, Facebook, Instagram } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Pragraph from "./Pragraph";
import { AddImageIcon } from "../helper/Icon";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function AddMember() {
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };
  return (
    <>
      <Sheet
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
        }}
      >
        <SheetTrigger asChild>
          <Button
            className={
              "!P-0 bg-transparent absolute hover:bg-transparent cursor-pointer z-10"
            }
          ></Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="lg:w-[400px] w-[350px] max-[400px]:w-full"
        >
          <SheetHeader>
            <SheetTitle
              className="!text-base font-semibold leading-[160%]
              tracking-[-0.145px] !text-[rgba(3,7,18,0.80)]"
            >
              Addmember
            </SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto">
            <div className="flex flex-col gap-2 lg:px-5 md:px-4 px-3">
              <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px] block">
                Profile Image
              </Label>

              <div className="border-2 border-dashed border-[#E2E5E9] rounded-md py-8 flex flex-col items-center justify-center bg-[#F9FAFB] hover:bg-[#F9FAFB] transition cursor-pointer">
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
            <div className="flex flex-col lg:gap-4 gap-3 lg:px-5 md:px-4 px-3 pt-10">
              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Name
                </Label>
                <Input
                  placeholder="Enter Name"
                  className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Email
                </Label>
                <Input
                  placeholder="Enter Email"
                  type={"email"}
                  className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Pincode
                </Label>
                <Input
                  placeholder="Enter pincode"
                  type="number"
                  className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Phone No.
                </Label>
                <div className="flex gap-2">
                  <div className="w-15">
                    <Input
                      defaultValue="+91"
                      className="text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#18181B]"
                    />
                  </div>
                  <Input
                    placeholder="ex. 0998 8891"
                    className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Gender
                </Label>
                <Select>
                  <SelectTrigger className={"w-full"}>
                    <SelectValue
                      placeholder="Select gender"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Job Role */}
              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Job Role
                </Label>
                <Select>
                  <SelectTrigger className={"w-full"}>
                    <SelectValue
                      placeholder="Select role"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tc">TC</SelectItem>
                    <SelectItem value="rm">RM</SelectItem>
                    <SelectItem value="fe">FE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Assigned */}
              <div className="flex flex-col gap-2">
                <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                  Assigned
                </Label>
                <Select>
                  <SelectTrigger className={"w-full"}>
                    <SelectValue
                      placeholder="Select assigned"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 RM & 3 FE</SelectItem>
                    <SelectItem value="2">2 RM & 5 FE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="lg:px-5 md:px-4 px-3 border-y border-[#E4E7EB] my-5 py-5">
              <div className="mb-4">
                <Label>Facebook Link</Label>
                <div className="relative w-full">
                  <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input
                    className="pl-10"
                    placeholder="https://www.facebook.com/"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label>Instagram Link</Label>
                <div className="relative w-full">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input
                    className="pl-10"
                    placeholder="https://www.instagram.com/"
                  />
                </div>
              </div>
            </div>
            <div className="lg:px-5 md:px-4 px-3 flex flex-col gap-2">
              <Pragraph
                className="!text-sm font-semibold leading-[160%]
              tracking-[-0.145px] !text-[rgba(3,7,18,0.80)]"
                title={"Address"}
              />
              <div className="flex flex-col gap-4 pb-10">
                <div className="flex flex-col gap-2">
                  <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                    Line 1
                  </Label>
                  <Input
                    placeholder="Address 1"
                    className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                    Line 2 ( Optional )
                  </Label>
                  <Input
                    placeholder="Address 2"
                    className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-[16px_20px]">
                  <div className="flex flex-col gap-2">
                    <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                      Postal Code
                    </Label>
                    <Input
                      type={Number}
                      placeholder="Postal code"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                      City
                    </Label>
                    <Input
                      placeholder="City"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                      State/Province/Region
                    </Label>
                    <Input
                      placeholder="State/Province/Region"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="!text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                      Country
                    </Label>
                    <Input
                      placeholder="Country"
                      className="placeholder:text-sm font-semibold leading-[142%] tracking-[-0.28px] placeholder:text-[#18181B]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}
