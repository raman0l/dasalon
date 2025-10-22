"use client";

import React, { useState, useEffect } from "react";
import Heading from "@/components/comman/Heading";

import {
  LivetrainingIcon,
  LiveTrainingIcon,
  MarketingIcon,
  PlatfromIcon,
} from "@/components/helper/Icon";
import Platform from "./Platform";
import Marketing from "./marketing";
import Livetraining from "./LiveTraing";

export function Training() {
  const [activeTab, setActiveTab] = useState("platform");

  return (
    <>
      <div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Training"}
            />
          </div>
        </div>
        <div>
          <div className="border-b-1 border-[#DCE0E5]">
            {/* Tabs */}
            <div className="flex lg:gap-6 md:gap-4 gap-2 justify-between lg:px-6 md:px-5 px-4 border-b-1 border-[#DCE0E5] min-[420px]:items-center max-[420px]:flex-col">
              <div className="flex lg:gap-7 md:gap-5 gap-4">
                <button
                  onClick={() => setActiveTab("platform")}
                  className={`lg:py-[19px] md:py-4 py-3 flex items-center gap-1 ${
                    activeTab === "platform"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] border-white border-b-3"
                  }`}
                >
                  <PlatfromIcon /> Platform
                </button>
                <button
                  onClick={() => setActiveTab("marketing")}
                  className={`lg:py-[19px] md:py-4 py-3  flex items-center gap-1  ${
                    activeTab === "marketing"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                  }`}
                >
                  <MarketingIcon /> Marketing
                </button>
                <button
                  onClick={() => setActiveTab("livetraining")}
                  className={`lg:py-[19px] md:py-4 py-3  flex items-center gap-1  ${
                    activeTab === "livetraining"
                      ? "border-b-3 border-[#B751FB] text-[#B751FB] lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                      : "text-[#808188] border-white border-b-3 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px]"
                  }`}
                >
                  <LivetrainingIcon /> Live Training
                </button>
              </div>
            </div>
          </div>
          {activeTab === "platform" && <Platform />}
          {activeTab === "marketing" && <Marketing />}
          {activeTab === "livetraining" && <Livetraining />}
        </div>
      </div>
    </>
  );
}

export default Training;
