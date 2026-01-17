"use client";

import React, { useState, useEffect } from "react";
import Heading from "@/components/comman/Heading";

import {
  CalenderIcon,
  GrowthIcon,
  Reporttab1Icon,
  Reporttab2Icon,
} from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";
import VisitPlans from "./VisitPlans";

export function Planner() {
  const [activeTab, setActiveTab] = useState("visit");

  return (
    <>
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Planner"}
            />
          </div>
        </div>
        <div>
          <div className="border-b-1 border-[#DCE0E5]">
            {/* Tabs */}
            <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] min-[420px]:items-center max-[420px]:flex-col">
              <div className="flex gap-7">
                <button
                  onClick={() => setActiveTab("visit")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 ${
                    activeTab === "visit"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] border-white border-b-3"
                  }`}
                >
                  <Reporttab1Icon />
                  Visit Plans
                </button>
                <button
                  onClick={() => setActiveTab("follow")}
                  className={`lg:py-[19px] md:py-4 py-3  flex items-center gap-1  ${
                    activeTab === "follow"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                  }`}
                >
                  <Reporttab2Icon /> Follow up Plans
                </button>
              </div>
              {activeTab === "registered" && (
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
            </div>
          </div>

          {activeTab === "visit" && (
            <div className="p-5">
              <VisitPlans />
            </div>
          )}
          {activeTab === "prospective" && <Prospective />}
        </div>
      </div>
    </>
  );
}

export default Planner;
