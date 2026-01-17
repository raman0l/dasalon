"Use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Pragraph from "@/components/comman/Pragraph";
import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  CalendarIcon,
  CallIcon,
  LoctionIcon,
  MenuIcon,
  SelectdragIcon,
  ViewIcon,
  ViewReportIcon,
} from "@/components/helper/Icon";
import { ClockIcon, MoreVerticalIcon } from "lucide-react";
import {
  nameData,
  reasonData,
  textsData,
  timesData,
} from "@/components/helper/Helper";
import { Calendar } from "@/components/ui/calendar";
import { SelectIcon } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import Heading from "@/components/comman/Heading";

// Helper Function
const getDisplayName = (value, data) => {
  if (!value) return "";
  const found = data.find((item) => item.toLowerCase() === value);
  return found || "";
};

function AddFollowUp() {
  // ✅ Local States
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [status1, setStatus1] = useState("");
  const [remarks, setRemarks] = useState("");

  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = React.useState(new Date());
  const [activeItem, setActiveItem] = useState(null);

  const handleSelect = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Trigger Button */}
        <SheetTrigger asChild>
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="!p-0 w-[400px] left-0 top-0 absolute bg-transparent hover:bg-transparent text-[#B751FB] text-sm font-semibold hover:border-none border-none"
          ></Button>
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent>
          {/* Header */}
          <SheetHeader className="border-b border-[#E4E7EB] lg:p-6 md:p-4 p-3">
            <SheetTitle className="flex gap-2 justify-between items-center">
              <span className="font-semibold text-[#030712]">
                Add Follow Up
              </span>
            </SheetTitle>
          </SheetHeader>
          <div className="overflow-auto pb-10">
            <div>
              <div className="flex gap-2 lg:px-6 md:px-4 px-3 pt-5">
                <Image
                  className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] object-cover rounded-md"
                  src={"/assets/png/salon-2.png"}
                  alt="salon"
                  width={32}
                  height={32}
                />
                <div className="flex gap-2 justify-between w-full">
                  <div className="flex flex-col gap-[2px]">
                    <Pragraph
                      className="!text-[#030712] font-semibold leading-[166%] tracking-[-0.24px]"
                      title={"Glamour Glow Studio"}
                    />
                    <div className="flex gap-1 items-center">
                      <LoctionIcon />
                      <Pragraph
                        className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]"
                        title={"123 Sparkle Ave, Glam City"}
                      />
                    </div>
                    <div className="flex gap-1 items-center">
                      <CallIcon />
                      <Pragraph
                        className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]"
                        title={"55523-32324"}
                      />
                    </div>
                  </div>
                  <DropdownMenu className="p-0">
                    <DropdownMenuTrigger asChild>
                      <Button className="flex items-center gap-2 cursor-pointer !p-0 !bg-transparent !shadow-none text-[#808188]">
                        <MoreVerticalIcon />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-50 bg-white border border-[#808188] p-0 mr-10">
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 1)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 1
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:!bg-[#eaccfe]"
                        }`}
                      >
                        <div className="flex items-center gap-2 ">
                          <ViewIcon />
                          View as partner
                        </div>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 2)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 2
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <ViewReportIcon />
                        View Report
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 3)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 3
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AddVisitIcon />
                        Add Visit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 4)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 4
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AddFollowUpIcon />
                        Add Follow Up
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 5)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 5
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AddVisitIcon />
                        Add Visit Report
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={(e) => handleSelect(e, 6)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] ${
                          activeItem === 6
                            ? "bg-[#eaccfe]"
                            : "bg-white hover:bg-[#eaccfe]"
                        }`}
                      >
                        <AssignPartnerIcon />
                        Assign Partner
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div>
                <div className="flex gap-2 py-[17px_15px]">
                  {textsData.map((item, index) => (
                    <Pragraph
                      key={index}
                      className={`${item.color} ${
                        index === 1
                          ? "border-x !border-[#808188] !text-xs lg:px-6 md:px-4 px-3"
                          : "!text-xs font-semibold leading-[166%] tracking-[-0.24px] lg:px-6 md:px-4 px-3"
                      }`}
                      title={item.label}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-[#E4E7EB] flex flex-col gap-4 px-4">
              <div>
                <Heading
                  className={
                    "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] lg:py-5 py-4"
                  }
                  title={"Schedule Follow Up"}
                />

                <span className="font-semibold text-sm">Assign to FE</span>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full border p-2 rounded mt-1">
                    <SelectValue placeholder="John Smith" />
                    <span>{getDisplayName(status, nameData)}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {nameData.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Picker */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex justify-between items-center border border-[#E4E4E7] cursor-pointer bg-white text-[#030712] hover:bg-transparent">
                    <span>
                      {date ? date.toLocaleDateString() : "Pick a date"}
                    </span>
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border shadow-sm"
                      captionLayout="dropdown"
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Time Picker */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex justify-between w-full border border-[#E4E4E7] cursor-pointer px-3 py-2 bg-white text-[#030712] hover:bg-transparent">
                    {selectedTime || "Pick a time slot"}
                    <ClockIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {timesData.map((t) => (
                    <DropdownMenuItem
                      key={t}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Follow Up Reason */}
              <div>
                <span className="font-semibold text-sm">Follow up reason</span>
                <Select value={status1} onValueChange={setStatus1}>
                  <SelectTrigger className="w-full border p-2 rounded mt-1">
                    <SelectValue placeholder="Select a reason for follow up" />
                    <span>{getDisplayName(status, reasonData)}</span>
                  </SelectTrigger>

                  <SelectContent>
                    {reasonData.map((reason) => (
                      <SelectItem key={reason} value={reason}>
                        {reason}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Remarks */}
              <div>
                <span className="font-semibold text-sm">Remarks</span>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Enter any remarks..."
                  className="w-full border p-2 rounded mt-1"
                />
              </div>
            </div>
          </div>
          <SheetFooter className="!flex gap-2 border-t border-[#E4E7EB] py-3 lg:pr-5 md:pr-4 pr-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setOpen(false)}
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] border-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
            >
              Submit
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AddFollowUp;
