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
import { BankDetailsIcon, BusinessDetailsIcon } from "../helper/Icon";
import BankDetails from "../pages/setting/BankDetails";

export default function AddAccountSheet() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("business");

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
          <SheetTitle>Add Account</SheetTitle>
        </SheetHeader>

        {/* Custom Tab Buttons */}
        <div className="flex w-full border-b border-gray-200 mt-4">
          <button
            onClick={() => setActiveTab("business")}
            className={`flex items-center gap-2 w-1/2 justify-center py-2 text-sm font-semibold transition-all ${
              activeTab === "business"
                ? "text-[#B751FB] border-b-2 border-[#B751FB]"
                : "text-[#808188] border-b-2 border-transparent"
            }`}
          >
            <BusinessDetailsIcon />
            <Pragraph
              className={"!text-sm font-semibold !text-inherit"}
              title={"Business Details"}
            />
          </button>
          <button
            onClick={() => setActiveTab("bank")}
            className={`flex items-center gap-2 w-1/2 justify-center py-2 text-sm font-semibold transition-all ${
              activeTab === "bank"
                ? "text-[#B751FB] border-b-2 border-[#B751FB]"
                : "text-[#808188] border-b-2 border-transparent"
            }`}
          >
            <BankDetailsIcon />
            <Pragraph
              className={"!text-sm font-semibold !text-inherit"}
              title={"Bank Details"}
            />
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "business" && (
          <div className="space-y-4 overflow-auto px-4 custom-scrollbar">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Business Type
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Select business type"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Business Name
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Enter business name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Contact Name
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Enter contact name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Email
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col gap-2 w-auto">
              <label className="text-xs font-semibold text-[#030712]">
                Phone No.
              </label>
              <div className="flex gap-2 full">
                <div>
                  <Input
                    className={
                      "placeholder:text-xs font-medium placeholder:text-[#18181B] w-13"
                    }
                    placeholder="+91"
                  />
                </div>
                <Input
                  className={
                    "placeholder:text-xs font-medium placeholder:text-[#18181B] !w-full"
                  }
                  placeholder="ex. 0998 8891"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Pan
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Pan card no."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                GST
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="GST no."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Address Line 1
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Address 1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Address Line 2 (Optional)
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Address 2"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#030712]">
                  Postal Code
                </label>
                <Input
                  className={
                    "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                  }
                  placeholder="Postal code"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#030712]">
                  City
                </label>
                <Input
                  className={
                    "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                  }
                  placeholder="City"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#030712]">
                  State / Province / Region
                </label>
                <Input
                  className={
                    "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                  }
                  placeholder="State/Province/Region"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#030712]">
                  Country
                </label>
                <Input
                  className={
                    "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                  }
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "bank" && (
          <div className="flex flex-col gap-4 px-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Bank Account No.
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Enter bank account no."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                IFSC Code
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Enter IFSC code"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#030712]">
                Bank Name
              </label>
              <Input
                className={
                  "placeholder:text-xs font-medium placeholder:text-[#18181B]"
                }
                placeholder="Bank Name"
              />
            </div>
          </div>
        )}

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
            Save
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
