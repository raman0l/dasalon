"use client";
import React, { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Lock } from "lucide-react";
import { Camera } from "lucide-react";
import Pragraph from "@/components/comman/Pragraph";
import Heading from "@/components/comman/Heading";
import { ChevronRight } from "lucide-react";
import { CHangePasswordIcon, ContcatIcon } from "@/components/helper/Icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

export default function UserSettings({ label, placeholder }) {
  const [activeTab, setActiveTab] = useState("personal");
  const fileInputRef = useRef(null);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen text-white px-6 py-10 max-w-[543px] mx-auto">
      {/* Breadcrumb */}
      <div className="p-6 flex gap-1">
        <Heading
          className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#808188]"
          title={"Setting"}
        />
        <ChevronRight className="text-black" />
        <Heading
          className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
          title={"User Settings"}
        />
      </div>

      {/* Profile Header */}
      <div className="border border-[#2c2c2e1c] rounded-lg p-4 flex items-center gap-4 lg:mb-8 md:pb-5 mb-3">
        <div
          onClick={handleImageClick}
          className="relative w-[50px] h-[50px] cursor-pointer"
        >
          <Image
            src="/assets/png/WadeWarren.png"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full bg-black/60 flex items-center justify-center">
            <Camera className="text-[#808188] w-4 h-4" />
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => console.log("Selected:", e.target.files[0])}
          />
        </div>

        <div>
          <Pragraph
            className={"lg:!text-base !text-sm font-semibold !text-[#030712]"}
            title={"Wade Warren"}
          />
          <Pragraph
            title={"Manager"}
            className={"!text-xs font-medium !text-[#808188]"}
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-transparent lg:mb-8 md:mb-5 mb-3 p-0 flex lg:gap-10 gap-2 shadow-none border-b-1  border-[#E4E7EB] w-full rounded-none">
          <TabsTrigger
            value="personal"
            className={`pb-3 p-0 text-xs font-semibold !shadow-none border-b-2 rounded-none  ${
              activeTab === "personal"
                ? " border-b-[#A855F7] !text-[#030712]"
                : "text-[#808188]"
            }`}
          >
            <ContcatIcon />
            Personal Details
          </TabsTrigger>

          <TabsTrigger
            value="password"
            className={`p-0 text-xs font-semibold !shadow-none border-b-2 rounded-none  ${
              activeTab === "password"
                ? " border-b-[#A855F7] !text-[#030712]"
                : "text-[#808188]"
            }`}
          >
            <CHangePasswordIcon /> Change Password
          </TabsTrigger>
        </TabsList>

        {/* Personal Details Tab */}
        <TabsContent value="personal">
          <form className="flex flex-col lg:gap-5 gap-3">
            {/* Display Name */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-[#030712]">
                  Display Name
                </label>
                <Input
                  type="text"
                  placeholder="Wade Warren"
                  className=" border-[#E4E4E7] text-[#030712] placeholder:text-[#030712] placeholder:text-sm text-sm"
                />
              </div>
              <Pragraph
                className={
                  "md:!text-xs !text-[10px] font-medium !text-[#808188]"
                }
                title={
                  "This is your public display name. It will be visible to everyone."
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-[#030712]">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="wadewarren123@gmail.com"
                  className=" border-[#E4E4E7] text-[#030712] placeholder:text-[#030712] placeholder:text-sm text-sm"
                />
              </div>
              <Pragraph
                className={
                  "md:!text-xs !text-[10px] font-medium !text-[#808188]"
                }
                title={
                  "This email is linked to your account and used for authentication and notifications."
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-semibold text-[#030712]">
                Phone no.
              </label>
              <div className="flex gap-2 mt-2">
                <Select defaultValue="+91">
                  <SelectTrigger className="w-[90px] border border-[#E4E4E7] text-[#030712] text-sm h-10 rounded-md">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  placeholder="Phone no."
                  className=" border-[#E4E4E7] text-[#030712] placeholder:text-[#030712]"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2"></p>
              <Pragraph
                className={
                  "md:!text-xs !text-[10px] font-medium !text-[#808188]"
                }
                title={
                  " This mobile number is linked to your business account and required for password resets or other verifications."
                }
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-6">
              <Button
                variant="outline"
                className=" border border-[#E4E7EB] text-[#030712] cursor-pointer"
              >
                Cancel
              </Button>
              <Button className="bg-[#A855F7] hover:shadow-md hover:!bg-[#A855F7] text-white cursor-pointer">
                Update
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Change Password Tab */}
        <TabsContent value="password">
          <form className="space-y-6 max-w-xl">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-[#030712]">
                  Old Password
                </label>

                <div className="relative">
                  <Input
                    type={show ? "text" : "password"}
                    placeholder={"Old Password"}
                    className="pr-10 border-[#E4E4E7] text-[#030712] placeholder:text-[#808188] text-sm placeholder:text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <Pragraph
                className={
                  "md:!text-xs !text-[10px] font-medium !text-[#808188]"
                }
                title={" Old password is required to change your password."}
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-[#030712]">
                Old Password
              </label>

              <div className="relative">
                <Input
                  type={show ? "text" : "password"}
                  placeholder={"Old Password"}
                  className="pr-10 border-[#E4E4E7] text-[#030712] placeholder:text-[#808188]"
                />

                <button
                  type="button"
                  onClick={() => setShow2(!show)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {show2 ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-6">
              <Button
                variant="outline"
                className=" border border-[#E4E7EB] text-[#030712] cursor-pointer"
              >
                Cancel
              </Button>
              <Button className="bg-[#A855F7] hover:shadow-md hover:!bg-[#A855F7] text-white cursor-pointer">
                Change Password
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
