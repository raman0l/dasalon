"use client";
import { useState } from "react";
import Heading from "@/components/comman/Heading";
import Pragraph from "@/components/comman/Pragraph";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ContcatIcon, MaleIcon } from "@/components/helper/Icon";

function BAProfiles() {
  const [activeTab, setActiveTab] = useState("Personal Details");

  return (
    <div>
      <div className="border-b-1 border-[#DCE0E5]">
        <div className="p-6">
          <Heading
            className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
            title={"Setting"}
          />
        </div>
      </div>
      <div className="max-w-[543px] mx-auto flex flex-col gap-6 my-20 px-3">
        <div className="flex gap-1 items-center">
          <Pragraph
            className={"font-medium !text-[#808188]"}
            title={"Settings"}
          />
          <ChevronRight />
          <Pragraph
            className={"font-medium !text-[#030712]"}
            title={"BA Profiles"}
          />
        </div>
        <div className="border-1 border-[#E4E7EB] rounded-2xl p-4 flex gap-4 items-center">
          <Image
            className="rounded-full"
            src={"/assets/png/WadeWarren.png"}
            alt="wadewarren"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-2">
            <Heading
              className={"!text-base text-[#030712] font-semibold"}
              title={"Wade Warren"}
            />
            <Pragraph
              className={"!text-xs !text-[#808188] font-medium"}
              title={"Manager"}
            />
          </div>
        </div>
        <div>
          <div>
            <div className="flex max-[470px]:flex-col mx-auto gap-2 mb-4 border-[#808188] border-b-1 justify-center">
              {["Personal Details", "Contract Details", "Incentive"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex gap-1 items-center cursor-pointer ${
                      activeTab === tab
                        ? "border-b-3 border-[#B751FB]  pb-3 text-sm font-semibold px-2 text-[#B751FB] max-[470px]:w-40"
                        : "text-[#808188] text-sm font-semibold px-2 pb-3 border-b-3 border-transparent max-[470px]:w-40"
                    }`}
                  >
                    {/* Icon with color change */}
                    <ContcatIcon
                      className={
                        activeTab === tab ? "!text-[#B751FB]" : "text-[#808188]"
                      }
                    />
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "Personal Details" && (
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { label: "Name:", value: "Wade Warren" },
                      {
                        label: "Gender:",
                        value: (
                          <div className="flex gap-1 items-center">
                            <MaleIcon />
                            <Pragraph
                              className="!text-sm font-medium !text-[#030712]"
                              title="Male"
                            />
                          </div>
                        ),
                      },
                      { label: "Phone no.:", value: "+911233222423" },
                      { label: "Email:", value: "kuldeep@gmail.com" },
                      {
                        label: "Address:",
                        value: "4140 Parker Rd. Allentown, New Mexico 31134",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-[#F0F2F4]">
                        <td className="lg:px-5 md:px-4 px-3 py-3">
                          <Pragraph
                            className="!text-sm font-medium !text-[#808188] lg:w-32 md:w-25 w-18"
                            title={item.label}
                          />
                        </td>
                        <td className="lg:px-5 md:px-4 px-2 py-3 !text-sm font-medium !text-[#030712]">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === "Contract Details" && (
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { label: "Name:", value: "Wade Warren" },
                      { label: "License Term:", value: "1 year" },
                      { label: "Agreement Date:", value: "12-03-2024" },
                      { label: "Comm. Date:", value: "15-03-2024" },
                      { label: "Expiry Date:", value: "20-03-2025" },
                      { label: "Territory name:", value: "Rohit Mehta" },
                      { label: "Territory PIN Code:", value: "237489" },
                      { label: "Territory Potential:", value: "Medium" },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-[#F0F2F4]">
                        <td className="lg:px-5 md:px-4 px-2 py-3">
                          <Pragraph
                            className="!text-sm font-medium !text-[#808188]"
                            title={item.label}
                          />
                        </td>
                        <td className="lg:px-5 md:px-4 px-2 py-3">
                          <Pragraph
                            className="!text-sm font-medium !text-[#030712]"
                            title={item.value}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === "Incentive" && (
                <div>
                  <div className="flex items-center lg:gap-10 md:gap-7 gap-4 px-5 py-3 border-b-1 border-[#F0F2F4] m-0">
                    <Pragraph
                      className="!text-sm font-medium !text-[#808188] "
                      title={"Subscription % :"}
                    />
                    <Pragraph
                      className="!text-sm font-medium !text-[#030712]"
                      title={"80%"}
                    />
                  </div>
                  <div className="flex items-center lg:gap-10 md:gap-7 gap-4 px-5 py-3 border-b-1 border-[#F0F2F4] m-0">
                    <Pragraph
                      className="!text-sm font-medium !text-[#808188]"
                      title={"Get Featured % :"}
                    />
                    <Pragraph
                      className="!text-sm font-medium !text-[#030712]"
                      title={"86%"}
                    />
                  </div>{" "}
                  <div className="flex items-center lg:gap-10 md:gap-7 gap-4 px-5 py-3 border-b-1 border-[#F0F2F4] m-0">
                    <Pragraph
                      className="!text-sm font-medium !text-[#808188] "
                      title={"Ads Manager % :"}
                    />
                    <Pragraph
                      className="!text-sm font-medium !text-[#030712]"
                      title={"90%"}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BAProfiles;
