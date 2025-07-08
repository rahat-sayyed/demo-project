"use client";

import { ChartContainer } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";

interface LineChartProps {
  data: Array<{ month: string; value: number }>;
  variant: "dark" | "green";
  className?: string;
}

export function CustomLineChart({
  data,
  variant,
  className = "h-44 w-full",
}: LineChartProps) {
  const gridStroke =
    variant === "dark" ? "#4B5563" : "rgba(255, 255, 255, 0.3)";

  return (
    <ChartContainer
      config={{
        value: {
          label: "Value",
          color: "#ffffff",
        },
      }}
      className={`${className} bg-gray-800 text-white rounded-lg pt-1 pr-1`}
    >
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={gridStroke}
          horizontal={true}
          vertical={false}
        />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#ff0000", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          domain={[0, 600]}
          ticks={[0, 200, 400, 600]}
        />
        <Line
          dataKey="value"
          stroke="#ffffff"
          strokeWidth={3}
          dot={{ fill: "#ffffff", strokeWidth: 0, r: 4 }}
          type="monotone"
        />
      </LineChart>
    </ChartContainer>
  );
}
