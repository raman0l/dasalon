"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Heading from "@/components/comman/Heading";
import Pragraph from "@/components/comman/Pragraph";
import { ContcatIcon, FMIcon, RMIcon, TCIcon } from "@/components/helper/Icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "@/components/ui/tooltip";
import {
  fmTeamData,
  GiftCardData,
  MembershipData,
  PackageData,
  ProductData,
  rmTeamData,
  ServiceData,
  Top10ServicesData,
  TopSellingProductsData,
  VoucherData,
} from "@/components/helper/Helper";
import { ServerIcon } from "lucide-react";

function Sales() {
  const [tc, setTc] = useState("");
  const [rm, setRm] = useState("");
  const [fm, setFm] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <div className="pb-5">
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="p-6">
            <Heading
              className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Sales"}
            />
          </div>
        </div>
        <div className="border-b-1 border-[#DCE0E5]">
          <div className="lg:p-6 md:p-5 p-4 flex lgap-4 justify-between items-center">
            <Heading
              className="lg:!text-xl md:!text-lg !text-sm font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
              title={"Territory Details"}
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <Pragraph
                  className={"md:!text-sm !text-xs font-semibold "}
                  title={"Total Salons Active :"}
                />
                <Pragraph
                  className={
                    "md:!text-sm !text-xs font-semibold !text-[#030712]"
                  }
                  title={"1430"}
                />
              </div>
              <div className="flex items-center justify-end">
                <Pragraph
                  className={"md:!text-sm !text-xs font-semibold "}
                  title={"Registered :"}
                />
                <Pragraph
                  className={
                    "md:!text-sm !text-xs font-semibold !text-[#030712]"
                  }
                  title={"1850"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between p-5">
          {/* Left 3 selects */}
          <div className="flex flex-wrap gap-4 flex-1 min-w-[200px]">
            {/* TC */}
            <Select value={tc} onValueChange={setTc}>
              <SelectTrigger className="w-36 flex items-center gap-2">
                <TCIcon />
                <SelectValue placeholder="Select TC" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="tc1">TC 1</SelectItem>
                  <SelectItem value="tc2">TC 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* RM */}
            <Select value={rm} onValueChange={setRm}>
              <SelectTrigger className="w-36 flex items-center gap-2">
                <RMIcon />
                <SelectValue placeholder="Select RM" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="rm1">RM 1</SelectItem>
                  <SelectItem value="rm2">RM 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* FM */}
            <Select value={fm} onValueChange={setFm}>
              <SelectTrigger className="w-36 flex items-center gap-2">
                <FMIcon />
                <SelectValue placeholder="Select FM" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fm1">FM 1</SelectItem>
                  <SelectItem value="fm2">FM 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Right 4th select */}
          <div>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="lastMonth">Last Month</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="px-5 flex flex-col gap-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px_20px]">
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none">
              <CardHeader>
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ServiceData}>
                    {/* X-axis: Monday to Sunday */}
                    <XAxis
                      dataKey="name" // <-- changed from "day" to "name"
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Grid lines */}
                    <CartesianGrid
                      vertical={false}
                      stroke="#C4C4C4"
                      strokeDasharray="3 5"
                    />

                    {/* Y-axis: 0 to 50 with steps of 10 */}
                    <YAxis
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      domain={[0, 50000]}
                      ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                      tickFormatter={(value) =>
                        value >= 1000
                          ? `${(value / 1000).toLocaleString()}K`
                          : value
                      }
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    {/* Bar */}
                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    ></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none">
              <CardHeader>
                <CardTitle>Package</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PackageData}>
                    {/* X-axis: Monday to Sunday */}
                    <XAxis
                      dataKey="name" // <-- changed from "day" to "name"
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Grid lines */}
                    <CartesianGrid
                      vertical={false}
                      stroke="#C4C4C4"
                      strokeDasharray="3 5"
                    />

                    <YAxis
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      domain={[0, 50000]}
                      ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                      tickFormatter={(value) =>
                        value >= 1000
                          ? `${(value / 1000).toLocaleString()}K`
                          : value
                      }
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    {/* Bar */}
                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    ></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none">
              <CardHeader>
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ProductData}>
                    {/* X-axis: Monday to Sunday */}
                    <XAxis
                      dataKey="name" // <-- changed from "day" to "name"
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Grid lines */}
                    <CartesianGrid
                      vertical={false}
                      stroke="#C4C4C4"
                      strokeDasharray="3 5"
                    />

                    <YAxis
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      domain={[0, 50000]} // 0 to 50k
                      ticks={[0, 10000, 20000, 30000, 40000, 50000]} // steps of 10k
                      tickFormatter={(value) =>
                        value >= 1000
                          ? `₹${(value / 1000).toLocaleString()}K`
                          : `₹${value}`
                      }
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    {/* Bar */}
                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    ></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none">
              <CardHeader>
                <CardTitle>Voucher</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={VoucherData}>
                    {/* X-axis: Monday to Sunday */}
                    <XAxis
                      dataKey="name" // <-- changed from "day" to "name"
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Grid lines */}
                    <CartesianGrid
                      vertical={false}
                      stroke="#C4C4C4"
                      strokeDasharray="3 5"
                    />

                    {/* Y-axis: 0 to 50 with steps of 10 */}
                    <YAxis
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      domain={[0, 50000]}
                      ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                      tickFormatter={(value) =>
                        value >= 1000
                          ? `${(value / 1000).toLocaleString()}K`
                          : value
                      }
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    {/* Bar */}
                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    ></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none">
              <CardHeader>
                <CardTitle>Membership</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MembershipData}>
                    {/* X-axis: Monday to Sunday */}
                    <XAxis
                      dataKey="name" // <-- changed from "day" to "name"
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Grid lines */}
                    <CartesianGrid
                      vertical={false}
                      stroke="#C4C4C4"
                      strokeDasharray="3 5"
                    />

                    <YAxis
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      domain={[0, 50000]}
                      ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                      tickFormatter={(value) =>
                        value >= 1000
                          ? `${(value / 1000).toLocaleString()}K`
                          : value
                      }
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    {/* Bar */}
                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    ></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none">
              <CardHeader>
                <CardTitle>Gift Card</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={GiftCardData}>
                    {/* X-axis: Monday to Sunday */}
                    <XAxis
                      dataKey="name" // <-- changed from "day" to "name"
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Grid lines */}
                    <CartesianGrid
                      vertical={false}
                      stroke="#C4C4C4"
                      strokeDasharray="3 5"
                    />

                    <YAxis
                      tick={{ fontSize: 12, fill: "#000000", fontWeight: 500 }}
                      domain={[0, 50000]}
                      ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                      tickFormatter={(value) =>
                        value >= 1000
                          ? `${(value / 1000).toLocaleString()}K`
                          : value
                      }
                      axisLine={false}
                      tickLine={false}
                    />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    {/* Bar */}
                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    ></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-3 md:flex-row flex-col">
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none bg-white">
              <CardHeader>
                <CardTitle>Top 10 Services</CardTitle>
              </CardHeader>
              <CardContent className="h-100 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={Top10ServicesData}
                    layout="vertical"
                    margin={{ top: 5, right: 5, left: 30, bottom: 5 }}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {/* Y-axis: service names */}
                    <YAxis
                      type="category"
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={({ x, y, payload }) => (
                        <text
                          x={x - 60}
                          y={y + 5}
                          fill="#000"
                          fontSize={12}
                          textAnchor="start"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {payload.value}
                        </text>
                      )}
                    />

                    {/* X-axis: hide values */}
                    <XAxis type="number" hide />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 4, 4]}
                      barSize={20}
                      background={{ fill: "#E4E7EB" }}
                    >
                      <LabelList
                        dataKey="value"
                        content={(props) => {
                          const { x, y, width, height, value } = props;
                          {
                            value;
                          }
                        }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="w-full mx-auto !border-[#E4E7EB] shadow-none bg-white">
              <CardHeader>
                <CardTitle>Top 10 Services</CardTitle>
              </CardHeader>
              <CardContent className="h-100 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={TopSellingProductsData}
                    layout="vertical"
                    margin={{ top: 5, right: 5, left: 30, bottom: 5 }}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {/* Y-axis: service names */}
                    <YAxis
                      type="category"
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={({ x, y, payload }) => (
                        <text
                          x={x - 60}
                          y={y + 5}
                          fill="#000"
                          fontSize={12}
                          textAnchor="start"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {payload.value}
                        </text>
                      )}
                    />

                    {/* X-axis: hide values */}
                    <XAxis type="number" hide />

                    {/* Tooltip */}
                    <Tooltip formatter={(value) => `${value}`} />

                    <Bar
                      dataKey="value"
                      fill="#B751FB"
                      radius={[4, 4, 4, 4]}
                      barSize={20}
                      background={{ fill: "#E4E7EB" }}
                    >
                      <LabelList
                        dataKey="value"
                        content={(props) => {
                          const { x, y, width, height, value } = props;
                          {
                            value;
                          }
                        }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
