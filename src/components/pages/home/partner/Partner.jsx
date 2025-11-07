"use client";
import React, { useState } from "react";
import Heading from "@/components/comman/Heading";

import {
  AddFollowUpIcon,
  AddVisitIcon,
  AssignPartnerIcon,
  FilterIcon,
  ProspectiveIcon,
  RegisteredIcon,
  ViewIcon,
  ViewReportIcon,
} from "@/components/helper/Icon";
import AddNewPartnerSheet from "../../../comman/AddNewPartner";
import Pragraph from "@/components/comman/Pragraph";
import { MoreHorizontal, MoreVerticalIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  menuItemstab2Data,
  ProspectivePartnerData,
  RegisteredPartnerData,
} from "@/components/helper/Helper";
import Prospective from "./prospective/Prospective";
import Registered from "./registered/Registered";

function Partner() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [statusFilter, setStatusFilter] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const [activeRow, setActiveRow] = useState(null);

  const tabData = RegisteredPartnerData.filter((row) => {
    const matchesStatus = statusFilter
      ? row.subscription === statusFilter
      : true;
    const matchesSearch = row.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const [activeItem, setActiveItem] = useState(null);

  const handleSelect = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };
  return (
    <>
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Partner"}
            />
          </div>
        </div>
        <div>
          <div className="border-b-1 border-[#DCE0E5]">
            {/* Tabs */}
            <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] min-[420px]:items-center max-[420px]:flex-col">
              <div className="flex gap-7">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 border-b-3 ${
                    activeTab === "tab1"
                      ? "border-[#B751FB] text-[#B751FB] font-semibold border-b-3"
                      : "border-transparent text-[#808188] border-b"
                  }`}
                >
                  {activeTab === "tab1" ? (
                    <RegisteredIcon filled />
                  ) : (
                    <RegisteredIcon />
                  )}{" "}
                  Registered
                </button>

                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 border-b-3 ${
                    activeTab === "tab2"
                      ? "border-[#B751FB] text-[#B751FB] font-semibold border-b-3"
                      : "border-transparent text-[#808188] border-b-3"
                  }`}
                >
                  {activeTab === "tab2" ? (
                    <ProspectiveIcon filled />
                  ) : (
                    <ProspectiveIcon />
                  )}{" "}
                  Prospective
                </button>
              </div>

              <div className="flex items-center gap-4 max-[420px]:justify-end max-[420px]:pb-2">
                {activeTab === "tab1" && (
                  <div className="flex items-center gap-4 max-[420px]:justify-end max-[420px]:pb-2">
                    <div className="flex items-center gap-2 !text-sm">
                      <span className="w-4 h-4 rounded-full bg-[#f00]"></span>
                      <Pragraph
                        className={
                          "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                        }
                        title={"Critical"}
                      />
                    </div>
                    <div className="flex items-center gap-2 !text-sm">
                      <span className="w-4 h-4 rounded-full bg-[#F5640A]"></span>
                      <Pragraph
                        className={
                          "lg:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712]"
                        }
                        title={"Growth"}
                      />
                    </div>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className="bg-[#B751FB] hover:bg-[#B751FB] cursor-pointer hoover:shadow !text-sm font-semibold leading-[142%] tracking-[-0.28px] py-1 flex items-center gap-1 rounded p-2 text-white">
                    <span className="text-xl text-white">+ </span>Add Partner
                    <AddNewPartnerSheet />
                  </div>
                )}
              </div>
            </div>
          </div>
          {activeTab === "tab1" && <Registered />}
          {activeTab === "tab2" && <Prospective />}
        </div>
      </div>
    </>
  );
}

export default Partner;
