"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { salonData } from "@/components/helper/Helper";
import Pragraph from "@/components/comman/Pragraph";
import Link from "next/link";
import Heading from "@/components/comman/Heading";
import { Search } from "lucide-react";
import { FilterIcon } from "@/components/helper/Icon";

function Platform() {
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="min-h-screen p-6">
      <div className="flex gap-2 min-[538px]:items-center justify-between lg:py-6 py-4 max-[538px]:flex-col">
        <Heading
          className={"!text-base font-semibold !text-[#030712]"}
          title={"Platform "}
        />
        <div className="flex lg:gap-5 md:gap-3 gap-2 items-center flex-wrap">
          <div className="relative lg:w-[290px] md:w-[230px] w-[160px]">
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D9DDE3]"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full lg:px-4 md:px-3 px-2 lg:py-[11px] py-[6px] border border-[#D9DDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B751FB] placeholder:text-sm"
            />
          </div>
          <div className="relative inline-block">
            <div
              onClick={() => setShowCalendar((prev) => !prev)}
              className="flex items-center gap-2 border border-[#A8A9AE] rounded-md lg:px-4 md:px-3 px-2 lg:py-[11px] py-[6px] cursor-pointer"
            >
              <FilterIcon className="h-4 w-4 text-[#A8A9AE]" />
              <span className="text-sm text-[#A8A9AE]">
                {date ? date.toDateString() : "Filter by date"}
              </span>
            </div>

            {showCalendar && (
              <div className="absolute mt-2 right-0 z-50 bg-white border rounded-md shadow-lg p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(day) => {
                    setDate(day);
                    setShowCalendar(false);
                  }}
                  captionLayout="dropdown"
                  modifiers={{ today: new Date() }}
                  modifiersClassNames={{
                    today: "bg-gray-200 text-gray-800 rounded-md",
                  }}
                  classNames={{
                    day_today: "text-gray-700 font-semibold",
                    day: "hover:bg-gray-100 rounded-md",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {salonData.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border-1 border-[#E4E7EB] cursor-pointer hover:shadow-lg transition  flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="!rounded-2xl object-cover h-[180px] w-full p-3"
            />
            <div className="mt-3 flex flex-col flex-grow">
              <div className="px-3">
                <div className="flex items-center justify-between">
                  <Pragraph
                    className={"!text-[#000000] font-bold"}
                    title={item.title}
                  />
                  <div className="flex items-center mt-1 mb-2">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <Pragraph
                  className={
                    "md:!text-xs !text-[10px] !text-[#000000B2] font-normal"
                  }
                  title={item.desc}
                />

                <Link
                  target="_blank"
                  className="md:text-xs text-[10px] font-semibold text-[#5B14D1] underline"
                  href={"/"}
                >
                  {item.link}
                </Link>
              </div>
              <div className="flex justify-between items-center mt-3 border-t border-[#E4E7EB] text-[#000000B2] text-xs font-normal p-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="stroke-[#000000B2]" />

                  <Pragraph
                    className="!text-[#000000B2] md:!text-xs !text-[10px] font-normal"
                    title={item.date}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="stroke-[#000000B2]" />

                  <Pragraph
                    className="!text-[#000000B2] md:!text-xs !text-[10px] font-normal"
                    title={item.time}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Platform;
