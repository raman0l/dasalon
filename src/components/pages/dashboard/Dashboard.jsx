"use client";
import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import {
  chartdata,
  GrowthtasksData,
  tasksData,
} from "@/components/helper/Helper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";
import * as React from "react";

import Heading from "@/components/comman/Heading";
import { RightgreenIcon } from "@/components/helper/Icon";
import { healthData, initialData, statsData } from "@/components/helper/Helper";
import Pragraph from "@/components/comman/Pragraph";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("performanceData");
    if (saved) {
      setData(JSON.parse(saved));
    } else {
      setData(initialData);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const serializableData = data.map((item) => {
        const { someField, anotherField } = item;
        return { someField, anotherField };
      });

      localStorage.setItem("performanceData", JSON.stringify(serializableData));
    }
  }, [data]);

  return (
    <>
      <div className="lg:px-6 md:px-5 px-4  mx-auto max-w-[1393px]">
        {/* Top Section */}
        <div>
          <div className="flex justify-between gap-4 py-5 items-center border-b-2 border-[#E4E7EB] ">
            <Heading
              title={"Dashboard"}
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
            />
            <Select>
              <SelectTrigger className="lg:w-[134px] bg-white">
                <SelectValue
                  placeholder="Last 7 days"
                  className="placeholder:text-xs !text-[#030712] font-semibold leading-[142%] lg:px-3 px-2  lg:py-[10px] py-[6px] tracking-[-0.28px]"
                />
              </SelectTrigger>
              <SelectContent className="border-[#F4F4F5] border-2 bg-white">
                <SelectGroup>
                  <SelectItem
                    className={
                      "hover:bg-[#F4F4F5] data-[state=checked]:bg-[#F4F4F5]"
                    }
                    value="last7"
                  >
                    Last 7 days
                  </SelectItem>
                  <SelectItem
                    className={
                      "hover:bg-[#F4F4F5] data-[state=checked]:bg-[#F4F4F5]"
                    }
                    value="last30"
                  >
                    Last 30 days
                  </SelectItem>
                  <SelectItem
                    className={
                      "hover:bg-[#F4F4F5] data-[state=checked]:bg-[#F4F4F5]"
                    }
                    value="lastMonth"
                  >
                    Last month
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Stats Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 gap-2 pt-6 ">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border-[#E4E7EB] border-2 flex flex-col lg:gap-5 md:gap-4 gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="p-[6px] rounded-[6px] bg-[#F0F2F4]">
                    {stat.icon}
                  </div>
                  <Pragraph
                    title={stat.title}
                    className="font-semibold leading-[150%] tracking-[-0.32px] !text-[#030712]"
                  />
                </div>
                <div>
                  <div className="flex gap-2 justify-between items-baseline">
                    <div className="flex gap-[10px] items-baseline">
                      <Heading
                        className="lg:!text-[40px] md:!text-4xl !text-2xl font-semibold leading-[120%] tracking-[-0.8px] !text-[#1D212C]"
                        title={stat.value}
                      />
                      <div className="flex gap-1 items-center">
                        <RightgreenIcon />
                        <Pragraph
                          className="lg:!text-sm !text-xs font-medium leading-[142%] tracking-[-0.28px] !text-[#31A553]"
                          title={stat.change}
                        />
                      </div>
                    </div>
                    <Pragraph
                      className="!text-xs font-medium leading-[133%] tracking-[-0.24px] bg-[#E0F6E6] rounded-[4px] py-[2px] px-2 !text-[#030712]"
                      title={stat.percent}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-2 mt-6 justify-between max-[920px]:flex-wrap">
            <div className="bg-white rounded-[8px] lg:p-6 md:p-4 p-3  border-2 border-[#E4E7EB] min-[920px]:max-w-[737px] w-full">
              <Heading
                className={
                  "lg:!text-xl md:!text-lg !text-base  font-semibold  leading-[120%] tracking-[-0.4px] !text-[#030712] lg:pb-6 md:pb-5 pb-4"
                }
                title={"Performance Overview"}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[16px_30px] lg:gap-[16px_20px] md:gap-4 gap-3">
                {initialData.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2">
                    <div className="flex justify-between gap-1">
                      <div className="flex gap-1 items-center">
                        <div className="bg-[#F3F4F6] rounded-full p-1">
                          {item.icon}
                        </div>
                        <Pragraph
                          title={item.title}
                          className={
                            "xl:!text-sm  !text-xs font-medium leading-[142%] !text-[#030712] tracking-[-0.28px]"
                          }
                        />
                      </div>

                      <span className="flex items-center lg:gap-6 md:gap-4 gap-3 text-xs font-medium leading-[133%] tracking-[-0.24px]">
                        <span
                          className={
                            item.change > 0
                              ? "text-[#2EE560]"
                              : item.change < 0
                              ? "text-[#F35353]"
                              : "text-[#808188]"
                          }
                        >
                          {item.change > 0
                            ? `+${item.change}%`
                            : `${item.change}%`}
                        </span>

                        <span
                          className={
                            item.value === 0
                              ? "text-[#808188] text-xs font-medium leading-[133%] tracking-[-0.24px]"
                              : "text-[#030712] text-xs font-medium leading-[133%] tracking-[-0.24px]"
                          }
                        >
                          {item.value}/{item.total}
                        </span>
                      </span>
                    </div>

                    {/* ✅ shadcn Progress */}
                    <Progress
                      value={(item.value / item.total) * 100}
                      className="h-2 bg-[#EAEEF5]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl lg:p-6 md:p-4 p-3 border-2 border-[#E4E7EB]  w-full min-[920px]:max-w-[575px]">
              <div className="flex justify-between  mb-6">
                <div className="flex  flex-col gap-1">
                  <Heading
                    className={
                      "lg:!text-xl md:!text-lg !text-base  font-semibold  leading-[120%] tracking-[-0.4px] !text-[#030712]"
                    }
                    title={"Health Score"}
                  />
                  <Pragraph
                    className={
                      "!text-sx !text-[#808188] font-medium leading-[133%] tracking-[-0.24px]"
                    }
                    title={"300"}
                  />
                </div>
                <Select defaultValue="monthly">
                  <SelectTrigger className="w-[134px] bg-white">
                    <SelectValue
                      placeholder="Select"
                      className="lg:!text-sm !text-xs !text-[#030712] font-semibold leading-[142%] px-3 py-[10px] tracking-[-0.28px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-[#F4F4F5] border-2 bg-white">
                    <SelectItem
                      className={
                        "hover:bg-[#F4F4F5] data-[state=checked]:bg-[#F4F4F5"
                      }
                      value="daily"
                    >
                      Daily
                    </SelectItem>
                    <SelectItem
                      className={
                        "hover:bg-[#F4F4F5] data-[state=checked]:bg-[#F4F4F5]"
                      }
                      value="weekly"
                    >
                      Weekly
                    </SelectItem>
                    <SelectItem
                      className={
                        "hover:bg-[#F4F4F5] data-[state=checked]:bg-[#F4F4F5]"
                      }
                      value="monthly"
                    >
                      Monthly
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-8">
                {healthData.map((item) => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <div className="flex justify-between w-full gap-2">
                      <Pragraph
                        className={
                          "!text-xs !text-[#808188] font-medium leading-[133%] tracking-[-0.24px] w-[104px]"
                        }
                        title={item.title}
                      />

                      {/* Progress bar */}
                      <div className="flex-1 min-[920px]:max-w-[360px] w-full items-center">
                        <Progress value={item.value} className={"h-4"} />
                      </div>
                    </div>

                    {/* Score */}

                    <Pragraph
                      className={
                        "lg:!text-sm !text-sx !text-[rgba(3,7,18,0.80)] font-medium leading-[142%] tracking-[-0.24px]"
                      }
                      title={item.score}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 max-[900px]:flex-wrap justify-between mt-6">
          <div className="flex flex-col gap-6 min-[900px]:max-w-[737px] w-full">
            <div className="border-[#E4E7EB] border-2 py-6   rounded-lg min-[900px]:!max-w-[737px]">
              <div className="flex gap-2 justify-between mb-4 lg:px-6 md:px-4 p-3 max-[440px]:flex-col">
                <Heading
                  className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
                  title={"Active vs Registered Trend"}
                />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#CCC]"></span>
                    <Pragraph
                      title={"Registered"}
                      className="!text-xs font-medium leading-[200%] tracking-[-0.24px] !text-[#030712]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#B751FB]"></span>
                    <Pragraph
                      title={"Active "}
                      className="!text-xs font-medium leading-[200%] tracking-[-0.24px] !text-[#030712]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:h-[350px] md:h-[300px] h-[250px] lg:ml-[-5px] md:ml-[-10px] ml-[-15px] lg:pr-5 pr-1">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartdata}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E5E7EB"
                    />
                    <XAxis
                      className="text-xs"
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      className="text-xs"
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 2500]}
                      ticks={[0, 500, 1000, 1500, 2000, 2500]}
                    />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="registered"
                      stroke="#CCC"
                      fill="#9CA3AF"
                      fillOpacity={0.9}
                    />
                    <Line
                      type="monotone"
                      dataKey="registered"
                      stroke="#9CA3AF"
                      strokeWidth={4}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="active"
                      stroke="#B751FB"
                      strokeWidth={4}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="w-full bg-white rounded-xl border border-gray-200 lg:p-6 md:p-4 p-3 min-[900px]:max-w-[737px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Heading
                  className={
                    "lg:!text-xl md:!text-lg !text-base  font-semibold  leading-[120%] tracking-[-0.4px] !text-[#030712]"
                  }
                  title={"Critical tasks"}
                />
                <Button className="bg-[#B751FB] text-[10px] font-semibold leading-[200%] tracking-[-0.2px] hover:bg-[#a741ebdb] text-white rounded-lg cursor-pointer duration-300 ease-in-out lg:px-2 px-1">
                  View Details
                </Button>
              </div>

              <div className="grid max-[900px]:grid-cols-3 max-[620px]:grid-cols-2 max-[425px]:grid-cols-1 xl:grid-cols-3  gap-2">
                {tasksData.map((task) => (
                  <div
                    key={task.id}
                    className="flex gap-2 py-[5px] px-[10px_2px] border-1 rounded-[8px] border-[#E4E7EB] cursor-pointer"
                  >
                    <div className="p-[3px] bg-[#E4E7EB] rounded-sm max-h-[15px]">
                      {task.icon}
                    </div>
                    <div className="flex flex-col">
                      <Heading
                        title={task.title}
                        className={
                          "!text-[10px] font-semibold leading-[200%] !text-[#030712] tracking-[-0.2px]"
                        }
                      />

                      <Heading
                        title={task.subtitle}
                        className={
                          "!text-[8px] font-normal leading-[250%] !text-[#030712] tracking-[-0.16px]"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-xl border border-gray-200 lg:p-6 md:p-4 p-3 min-[900px]:max-w-[575px] w-full">
            <div className="flex items-center justify-between mb-6">
              <Heading
                className={
                  "lg:!text-xl md:!text-lg !text-base  font-semibold  leading-[120%] tracking-[-0.4px] !text-[#030712]"
                }
                title={"Growth Task"}
              />
              <Button className="bg-[#B751FB] text-[10px] font-semibold leading-[200%] tracking-[-0.2px] hover:bg-[#8e16deea] text-white rounded-lg cursor-pointer duration-300 ease-in-out">
                View Details
              </Button>
            </div>

            <div className="grid max-[900px]:grid-cols-3 max-[710px]:grid-cols-2 max-[490px]:grid-cols-1 lg:grid-cols-2 lg:gap-5 md:gap-4 gap-3 min-[900px]:max-w-[737px]">
              {GrowthtasksData.map((task) => (
                <div
                  key={task.id}
                  className="flex  gap-2 py-[11px] pl-2 pr-[2px] border-1 rounded-[8px] border-[#E4E7EB] w-full cursor-pointer"
                >
                  <div className="p-[5px] rounded-[6px] bg-[#E4E7EB] h-[25px] lg:h-[30px]">
                    {task.icon}
                  </div>
                  <div className="flex flex-col">
                    <Pragraph
                      title={task.title}
                      className={
                        "lg:!text-sm md:!text-[13px] text-xs font-semibold leading-[200%] !text-[#030712] tracking-[-0.2px]"
                      }
                    />

                    <Pragraph
                      title={task.subtitle}
                      className={
                        ":lg!text-sm !text-xs font-normal leading-[250%] !text-[#030712] tracking-[-0.16px]"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
