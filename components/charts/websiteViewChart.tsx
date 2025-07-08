"use client";

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";

import { ChartContainer } from "@/components/ui/chart";

interface PinkBarChartProps {
  data: Array<{ day: string; value: number }>;
  className?: string;
}

export function WebsiteViewChart({
  data,
  className = "h-44 w-full",
}: PinkBarChartProps) {
  return (
    <ChartContainer
      className={`${className} bg-pink-500 text-white rounded-lg pt-1 pr-1`}
      config={{
        value: {
          label: "Value",
          color: "#ffffff",
        },
      }}
    >
      <BarChart barCategoryGap="60%" data={data}>
        <CartesianGrid
          horizontal={true}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="day"
          tick={{ fill: "#ffffff", fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          domain={[0, 60]}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          tickLine={false}
          ticks={[0, 20, 40, 60]}
        />
        <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
