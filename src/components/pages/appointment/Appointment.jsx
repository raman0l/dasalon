"use client";
import React, { useState } from "react";
import Heading from "@/components/comman/Heading";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { filtersData, statusSummaryData } from "@/components/helper/Helper";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Appointment() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Today", "Upcoming", "New", "Past"];

  return (
    <div>
      <div className="border-b-1 border-[#DCE0E5]">
        <div className="p-6">
          <Heading
            className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
            title={"Appointment"}
          />
        </div>
      </div>

      <div className="px-5">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-col gap-3 text-sm text-[#030712]">
            <span className="font-medium">
              Total Appointments: <span className="font-semibold">50</span>
            </span>

            <div className="flex flex-wrap  gap-3">
              {statusSummaryData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span
                    className="w-2 h-full rounded-full border"
                    style={{
                      backgroundColor: item.color, // circle fill
                      borderColor: item.border, // circle border
                    }}
                  ></span>
                  <span className="text-sm text-[#030712] whitespace-nowrap">
                    {item.label}: {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full sm:w-[250px]">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />

            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 text-sm border-[#E4E7EB] focus-visible:ring-[#A855F7]"
            />
          </div>
        </div>
        {/* Filter Buttons */}
        <div className="flex gap-5">
          <div className="flex gap-2 mt-2 bg-[#E4E7EB] rounded-md p-1 !w-80">
            {tabs.map((tab) => (
              <Button
                key={tab}
                size="sm"
                variant={activeTab === tab ? "default" : "outline"} // Active tab is "default"
                className={`text-xs rounded-md hover:bg-transparen shadow-none ${
                  activeTab === tab
                    ? "bg-[#FFFFFF] text-black"
                    : "bg-transparent  border-none"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          {/* Filter Selects */}
          <div className="flex flex-wrap w-full mt-3 items-center gap-3">
            {/* First two selects */}
            <div className="flex gap-3 flex-wrap">
              {filtersData.slice(0, 3).map((filter, i) => (
                <Select key={i}>
                  <SelectTrigger className="w-[150px] sm:w-[180px] h-9 text-sm border-[#E4E7EB]">
                    <SelectValue placeholder={filter.label} />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.options.map((opt, j) => (
                      <SelectItem key={j} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>

            {/* Spacer to push last select to end */}
            <div className="flex-1" />

            {/* Last select */}
            {filtersData[2] && (
              <Select>
                <SelectTrigger className="w-[150px] sm:w-[180px] h-9 text-sm border-[#E4E7EB]">
                  <SelectValue placeholder={filtersData[2].label} />
                </SelectTrigger>
                <SelectContent>
                  {filtersData[2].options.map((opt, j) => (
                    <SelectItem key={j} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
