"use client";

import React, { useState, useRef, useEffect } from "react";
import Pragraph from "@/components/comman/Pragraph";
import {
  ClientEngagementdata,
  data,
  fromsummitData,
  ManageData,
  Metricdata,
  offerdata,
  ProfileManageData,
  PromoteUsagedata,
  ratingLabelsData,
  salonSizesData,
  Setupdata,
  textsData,
} from "@/components/helper/Helper";
import {
  CalendarIcon,
  CallIcon,
  GrayCalenderIcon,
  LoctionIcon,
  OverallScroreIcon,
} from "@/components/helper/Icon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import Image from "next/image";
import Heading from "@/components/comman/Heading";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-dropdown-menu";
import MyCheckbox from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

function DatePicker({ placeholder }) {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className="flex justify-between items-center border border-[#E4E4E7] rounded lg:px-3 px-2 md:py-2 py-1 cursor-pointer hover:bg-[#e4e7eb2a]"
        onClick={() => setOpen(!open)}
      >
        <span>{date ? date.toLocaleDateString() : placeholder}</span>
        <CalendarIcon className="lg:w-5 w-4 lg:h-5 h-4 text-[#030712]" />
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white border-1 border-[#E4E4E7] rounded shadow p-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
function AddNewVisitReport() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const totalSteps = 4;

  const handleSubmit = () => {
    console.log("Submit final report");
    // yahan final submit logic lagao
  };
  const [activeTab, setActiveTab] = useState(0); // 0-based index

  const nextStep = () => {
    if (activeTab < totalSteps - 1) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const parseValue = (val) => {
    if (!val) return 0;
    return parseInt(val.toString().replace(/[^0-9]/g, ""), 10);
  };

  //

  const [role, setRole] = useState("");
  const [role1, setRole1] = useState("");
  const [role2, setRole2] = useState("");
  const [role3, setRole3] = useState("");
  const [role4, setRole4] = useState("");
  const [software, setSoftware] = React.useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [values, setValues] = useState({
    socialMedia: 2,
    creatives: 3,
    whatsapp: 5,
    automation: 2,
  });

  const updateValue = (key, newValue) => {
    setValues((prev) => ({ ...prev, [key]: newValue[0] }));
  };
  return (
    <>
      <AlertDialog className="!p-0 ">
        <AlertDialogTrigger asChild>
          <Button
            className={
              "!P-0 bg-transparent absolute w-[190px] hover:bg-transparent cursor-pointer"
            }
          ></Button>
        </AlertDialogTrigger>
        <AlertDialogContent className={"!p-0 min-[1070px]:!max-w-[700px]"}>
          <AlertDialogHeader>
            <div className="flex items-center justify-between gap-2 lg:py-5 md:py-4 py-2 lg:px-4 px-3  border-b border-[#8081888a]">
              <AlertDialogTitle>Add New Visit Report</AlertDialogTitle>
              <AlertDialogCancel
                className={
                  "border-none bg-white p-0 hover:bg-transparent shadow-none rotate-45 text-3xl hover:text-gray-300 cursor-pointer"
                }
              >
                +
              </AlertDialogCancel>
            </div>

            <div
              id="radix-_r_4_"
              data-slot="alert-dialog-description"
              className="text-muted-foreground text-sm p-0 flex sm:flex-row flex-col  max-[768px]:overflow-y-auto h-screen max-h-[70vh] scrollbar-w-5 custom-scrollbar"
            >
              <div className="md:min-w-[300px] min-w-[260px] bg-[#F9FAFB] md:overflow-y-auto h-screen max-h-[70vh] scrollbar-h-2 scrollbar-none ">
                <div className="flex gap-2 lg:px-6 md:px-4 px-3 lg:pt-5 md:pt-4 pt-3">
                  <Image
                    className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] object-cover rounded-md"
                    src={"/assets/png/salon-2.png"}
                    alt="salon"
                    width={32}
                    height={32}
                  />
                  <div className="flex gap-2 justify-between w-full">
                    <div className="flex flex-col gap-[2px]">
                      <span className="lg:text-base text-sm !text-[#030712] font-semibold leading-[166%] tracking-[-0.24px]">
                        Glamour Glow Studio
                      </span>
                      <div className="flex gap-1 items-center">
                        <LoctionIcon />
                        <span className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]">
                          123 Sparkle Ave, Glam City
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <CallIcon />

                        <span className="!text-xs !text-[#030712] font-normal leading-[166%] tracking-[-0.24px]">
                          55523-32324
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Texts Data */}
                <div className="flex lg:py-[17px_15px] sm:justify-center px-2 py-3 divide-x divide-[#808188]">
                  {ManageData.map((item, index) => (
                    <Pragraph
                      key={index}
                      className={`${item.color} !text-xs font-semibold leading-[166%] tracking-[-0.24px]
                 first:pl-0 last:pr-0 px-2`}
                      title={item.label}
                    />
                  ))}
                </div>

                <div>
                  <div className="flex flex-col">
                    {ProfileManageData.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`
              flex gap-2 items-center lg:py-4 md:py-3 py-2 lg:px-5 md:px-4 px-3 duration-300 ease-in-out
              ${
                activeTab === index
                  ? "bg-[#F1DCFF] text-[#030712] cursor-pointer"
                  : "hover:bg-[#F1DCFF] text-[#030712] cursor-pointer"
              }
            `}
                      >
                        <div>{item.icon}</div>
                        <span className="text-sm font-medium text-center">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:py-3 py-2 lg:px-4 md:px-3 px-2 w-full md:overflow-y-auto h-screen max-h-[70vh] scrollbar-h-2 custom-scrollbar scrollbar-none">
                {activeTab === 0 && (
                  <div className="flex flex-col lg:gap-8 gap-6">
                    <Heading
                      className={
                        "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] text-start"
                      }
                      title={"Profile"}
                    />
                    <div className="flex flex-col lg:gap-5 md:gap-4 gap-3 w-full max-w-md pb-10 my-[-15px]">
                      {/* Person in contact name */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="contact-name"
                          className="text-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        >
                          Person in contact name
                        </label>

                        <input
                          id="contact-name"
                          className="placeholder:text-[#030712] placeholder:text-sm lg:px-4 md:px-3 px-2 py-2 border border-[#E4E4E7] font-semibold leading-[142%] tracking-[-0.28px] rounded-md"
                          placeholder="Enter Business Name"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <MyCheckbox id="decision-maker" />
                        <label
                          htmlFor="decision-maker"
                          className="text-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px]"
                        >
                          Decision Maker Name
                        </label>
                      </div>
                      {/* Contact Person Role */}
                      <div className="flex flex-col gap-1">
                        <Pragraph
                          htmlFor="contact-role"
                          title={"Contact Person Role"}
                          className="!text-[#030712] md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        />

                        <Select value={role} onValueChange={setRole}>
                          <SelectTrigger
                            id="contact-role"
                            className={"w-full lg:px-4 md:px-3 px-2"}
                          >
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="owner">Owner</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {/* Contact Person Phone */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="contact-name"
                          className="text-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        >
                          Contact Person Phone
                        </label>

                        <input
                          id="contact-phone"
                          placeholder="Enter phone no."
                          type="tel"
                          className="placeholder:text-[#030712] placeholder:text-sm lg:px-4 md:px-3 px-2 py-2 border border-[#E4E4E7] font-semibold leading-[142%] tracking-[-0.28px] rounded-md"
                        />
                      </div>
                      {/* Software Currently Used */}
                      <div className="flex flex-col gap-1">
                        <Label
                          htmlFor="software"
                          className="text-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        >
                          Software Currently Used
                        </Label>
                        <Select value={software} onValueChange={setSoftware}>
                          <SelectTrigger
                            id="software"
                            className="w-full lg:px-4 md:px-3 px-2"
                          >
                            <SelectValue placeholder="Select software or usage status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Not using any</SelectItem>
                            <SelectItem value="custom">
                              Custom Software
                            </SelectItem>
                            <SelectItem value="crm">
                              CRM / POS Software
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {/* Size of Salon */}
                      <div className="flex flex-col space-y-2">
                        <Pragraph
                          className="font-semibold !text-black text-start"
                          title={"Size of Salon"}
                        />

                        <RadioGroup
                          value={selectedSize}
                          onValueChange={setSelectedSize}
                          className="flex flex-col"
                        >
                          {salonSizesData.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <RadioGroupItem
                                id={item.id}
                                value={item.value}
                                className={`
                lg:h-5 md:h-4 h-3 lg:w-5 md:w-4 w-3 rounded-full border border-[#E4E7EB]
                data-[state=checked]:bg-[#B751FB]
                data-[state=checked]:border-[#E4E7EB]
                transition-all duration-200
              `}
                              />
                              <Label
                                htmlFor={item.id}
                                className="text-[#030712] md:!text-sm !text-xs font-semibold tracking-[-0.28px] leading-[142%]"
                              >
                                {item.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="flex flex-col gap-4 pb-5">
                    <div className="flex flex-col gap-[5px]">
                      <Heading
                        className={
                          "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] text-start"
                        }
                        title={"Management Needs Assessment"}
                      />

                      <div className="flex flex-col w-full text-start">
                        {ratingLabelsData.map((label, index) => (
                          <Pragraph
                            className={
                              "!text-[#030712] !text-[10px] font-normal leading-[15px] tracking-[0.2px]"
                            }
                            key={index}
                            title={label}
                          />
                        ))}
                      </div>
                    </div>
                    <Card className={"p-0 border-none shadow-none"}>
                      <CardContent
                        className={"p-0 flex flex-col lg:gap-4 md:gap-3 gap-2"}
                      >
                        {[
                          {
                            label: "Appointment management",
                            key: "socialMedia",
                          },
                          {
                            label: "Catalog management",
                            key: "creatives",
                          },
                          { label: "Client management", key: "whatsapp" },
                          { label: "Staff management", key: "automation" },
                        ].map((item) => (
                          <div key={item.key} className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                              <span className="texy-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px]">
                                {item.label}
                              </span>
                            </div>
                            <div>
                              <Slider
                                value={[values[item.key]]}
                                min={1}
                                max={5}
                                step={1}
                                onValueChange={(val) =>
                                  updateValue(item.key, val)
                                }
                                className="
    max-w-[313px]
    [&>[data-slot=slider-track]]:h-3
    [&>[data-slot=slider-range]]:h-3
   
  "
                              />

                              <div className="flex justify-between texy-[#030712] text-[10px] font-normal leading-[250%] tracking-[-0.16px] max-w-[313px]">
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <span key={num}>{num}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="flex flex-col gap-4 pb-5">
                    <div className="flex flex-col gap-[5px]">
                      <Heading
                        className={
                          "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] text-start"
                        }
                        title={"Growth Needs Assessment"}
                      />

                      <div className="flex flex-col w-full text-start">
                        {ratingLabelsData.map((label, index) => (
                          <Pragraph
                            className={
                              "!text-[#030712] !text-[10px] font-normal leading-[15px] tracking-[0.2px]"
                            }
                            key={index}
                            title={label}
                          />
                        ))}
                      </div>
                    </div>
                    <Card className={"p-0 border-none shadow-none"}>
                      <CardContent
                        className={"p-0 flex flex-col lg:gap-4 md:gap-3 gap-2"}
                      >
                        {[
                          { label: "Voucher system", key: "socialMedia" },
                          {
                            label: "Memberships Programs",
                            key: "creatives",
                          },
                          { label: "Gift Cards", key: "whatsapp" },
                          { label: "Promo Codes", key: "automation" },
                        ].map((item) => (
                          <div key={item.key} className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                              <span className="texy-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px]">
                                {item.label}
                              </span>
                            </div>
                            <div>
                              <Slider
                                value={[values[item.key]]}
                                min={1}
                                max={5}
                                step={1}
                                onValueChange={(val) =>
                                  updateValue(item.key, val)
                                }
                                className="
    max-w-[313px]
    [&>[data-slot=slider-track]]:h-3
    [&>[data-slot=slider-range]]:h-3
   
  "
                              />

                              <div className="flex justify-between texy-[#030712] text-[10px] font-normal leading-[250%] tracking-[-0.16px] max-w-[313px]">
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <span key={num}>{num}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="flex flex-col gap-4 pb-5">
                    <div className="flex flex-col gap-[5px]">
                      <Heading
                        className={
                          "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] text-start"
                        }
                        title={"Promotion needs assessment"}
                      />

                      <div className="flex flex-col w-full text-start">
                        {ratingLabelsData.map((label, index) => (
                          <Pragraph
                            className={
                              "!text-[#030712] !text-[10px] font-normal leading-[15px] tracking-[0.2px]"
                            }
                            key={index}
                            title={label}
                          />
                        ))}
                      </div>
                    </div>
                    <Card className={"p-0 border-none shadow-none"}>
                      <CardContent
                        className={"p-0 flex flex-col lg:gap-4 md:gap-3 gap-2"}
                      >
                        {[
                          { label: "Social Media Ads", key: "socialMedia" },
                          {
                            label: "Creatives (Design Support)",
                            key: "creatives",
                          },
                          { label: "WhatsApp Marketing", key: "whatsapp" },
                          { label: "Automated Messaging", key: "automation" },
                        ].map((item) => (
                          <div key={item.key} className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                              <span className="texy-[#030712] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px]">
                                {item.label}
                              </span>
                            </div>
                            <div>
                              <Slider
                                value={[values[item.key]]}
                                min={1}
                                max={5}
                                step={1}
                                onValueChange={(val) =>
                                  updateValue(item.key, val)
                                }
                                className="
    max-w-[313px]
    [&>[data-slot=slider-track]]:h-3
    [&>[data-slot=slider-range]]:h-3
   
  "
                              />

                              <div className="flex justify-between texy-[#030712] text-[10px] font-normal leading-[250%] tracking-[-0.16px] max-w-[313px]">
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <span key={num}>{num}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                )}
                {activeTab === 4 && (
                  <div>
                    <div className="flex flex-col lg:gap-4 gap-3">
                      <Heading
                        className={
                          "lg:!text-base !text-sm font-semibold leading-[125%] tracking-[-0.32px] !text-[#030712] text-start pb-1"
                        }
                        title={"Outcome"}
                      />
                      <div className="flex flex-col gap-1">
                        <Pragraph
                          htmlFor="contact-role"
                          title={"Overall Interest"}
                          className="!text-[#030712] md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        />

                        <Select value={role1} onValueChange={setRole1}>
                          <SelectTrigger
                            id="contact-role"
                            className={"w-full lg:px-4 md:px-3 px-2 py-2"}
                          >
                            <SelectValue placeholder="Select visit outcome" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              value="Not interested - don’t see a fit"
                              className={"group"}
                            >
                              <div
                                className={
                                  "h-4 w-4 rounded-full border border-[#E4E7EB] group-hover:bg-white"
                                }
                              ></div>
                              Not interested - don’t see a fit
                            </SelectItem>
                            <SelectItem
                              value="Neutral / Undecided"
                              className={"group"}
                            >
                              <div
                                className={
                                  "h-4 w-4 rounded-full border border-[#E4E7EB] group-hover:bg-white"
                                }
                              ></div>
                              Neutral / Undecided
                            </SelectItem>
                            <SelectItem
                              value="Mildly interested - come bak later"
                              className={"group"}
                            >
                              <div
                                className={
                                  "h-4 w-4 rounded-full border border-[#E4E7EB] group-hover:bg-white"
                                }
                              ></div>
                              Mildly interested - come bak later
                            </SelectItem>
                            <SelectItem
                              value="Interested - requests detailed demo"
                              className={"group"}
                            >
                              <div
                                className={
                                  "h-4 w-4 rounded-full border border-[#E4E7EB] group-hover:bg-white"
                                }
                              ></div>
                              Interested - requests detailed demo
                            </SelectItem>
                            <SelectItem
                              value="Very interested - wants immediate onboarding"
                              className={"group"}
                            >
                              <div
                                className={
                                  "h-4 w-4 rounded-full border border-[#E4E7EB] group-hover:bg-white"
                                }
                              ></div>
                              Very interested - wants immediate onboarding
                            </SelectItem>
                            <SelectItem value="Registered" className={"group"}>
                              <div
                                className={
                                  "h-4 w-4 rounded-full border border-[#E4E7EB] group-hover:bg-white"
                                }
                              ></div>
                              Registered
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>{" "}
                      <div className="flex flex-col gap-1">
                        <Pragraph
                          htmlFor="contact-role"
                          title={"Outcomes of visit"}
                          className="!text-[#030712] md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        />

                        <Select value={role2} onValueChange={setRole2}>
                          <SelectTrigger
                            id="contact-role"
                            className={"w-full lg:px-4 md:px-3 px-2 py-2"}
                          >
                            <SelectValue placeholder="Select visit outcome" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Onboarded">Onboarded</SelectItem>
                            <SelectItem value="Not Onboarded">
                              Not Onboarded
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>{" "}
                      <div className="flex flex-col gap-1">
                        <Pragraph
                          htmlFor="contact-role"
                          title={"Reason for Not onboarding"}
                          className="!text-[#030712] md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start  "
                        />

                        <Select value={role3} onValueChange={setRole3}>
                          <SelectTrigger
                            id="contact-role"
                            className={"w-full lg:px-4 md:px-3 px-2 py-2"}
                          >
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Demo">Demo</SelectItem>
                            <SelectItem value="Pricing">Pricing</SelectItem>
                            <SelectItem value="Resistration">
                              Resistration
                            </SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col md:gap-2 gap-1 w-full">
                        <Pragraph
                          className={
                            "lg:!text-sm !text-xs font-semibold leading-[142%] traking-[-0.28px] !text-[#030712] text-start"
                          }
                          title={"Follow up date"}
                        />
                        <DatePicker
                          placeholder="Pick a date"
                          className={
                            "placeholder:text-xs font-semibold leading-[142%] traking-[-0.28px] placeholder:!text-[#030712]"
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Pragraph
                          htmlFor="contact-role"
                          title={"Follow up reason"}
                          className="!text-[#030712] md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] text-start"
                        />

                        <Select value={role4} onValueChange={setRole4}>
                          <SelectTrigger
                            id="contact-role"
                            className={"w-full lg:px-4 md:px-3 px-2 py-2"}
                          >
                            <SelectValue
                              className={
                                "placeholder:!text-sm placeholder:!text-black"
                              }
                              placeholder="Select a reason for follow up"
                            />
                          </SelectTrigger>
                          <SelectContent
                            className={
                              "!text-sm font-medium leading-[142%] tracking-[-0.28px] !text-[#18181B]"
                            }
                          >
                            <SelectItem value="owner">Owner</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col md:gap-2 gap-1 w-full mb-10">
                        <label
                          className={
                            "lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#030712] text-start"
                          }
                        >
                          Remarks
                        </label>
                        <textarea
                          placeholder="Enter any remarks or additional notes"
                          className={
                            "placeholder:text-xs placeholder:font-semibold placeholder:leading-[142%] placeholder:tracking-[-0.28px] placeholder:text-[rgba(24,24,27,0.50] border border-[#E4E4E7] rounded-md px-3 py-2 resize-none focus:outline-none focus:border-[#E4E4E7]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter
            className={
              "lg:py-5 md:py-4 py-3 lg:px-4 px-3  border-t border-[#8081888a]"
            }
          >
            <AlertDialogCancel
              className="lg:px-4 px-3 lg:py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#030712] border border-[#E4E7EB] rounded-md hover:shadow-lg duration-300 ease-in-out cursor-pointer"
              onClick={prevStep}
              disabled={activeTab === 1}
            >
              Cancel
            </AlertDialogCancel>

            {activeTab === 0 ? (
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                  nextStep();
                }}
                className="lg:px-4 px-3 lg:!py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md bg-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
              >
                Next
              </button>
            ) : activeTab < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="lg:!px-4 !px-3 lg:!py-[10px] md:!py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] text-white hover:!shadow-lg duration-300 ease-in-out cursor-pointer"
              >
                Next
              </button>
            ) : (
              <AlertDialogAction
                onClick={handleSubmit}
                className="lg:px-4 px-3 lg:!py-[10px] md:py-2 py-1 lg:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] rounded-md !bg-[#B751FB] text-white hover:shadow-lg duration-300 ease-in-out cursor-pointer"
              >
                Submit
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AddNewVisitReport;
