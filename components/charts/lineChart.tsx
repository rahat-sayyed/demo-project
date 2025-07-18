"use client";

import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";

import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

/**
 * LineChart component
 *
 * A chart component for displaying line data.
 *
 * @param {object} props
 * @param {array} props.data - The data for the chart.
 *
 * @returns {JSX.Element} The LineChart component.
 */
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
      className={cn(
        `${className} text-white rounded-lg pt-1 pr-1 shadow-md`,
        variant === "dark"
          ? "bg-gray-800 shadow-gray-800/60"
          : "bg-green-500 shadow-green-500/60",
      )}
      config={{
        value: {
          label: "Value",
          color: "#ffffff",
        },
      }}
    >
      <LineChart
        data={data}
        margin={{
          left: -20,
          top: 20,
          right: 12,
        }}
      >
        <CartesianGrid
          horizontal={true}
          stroke={gridStroke}
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="month"
          style={{ fill: "white" }}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          domain={[0, 600]}
          style={{ fill: "white" }}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          tickLine={false}
          ticks={[0, 200, 400, 600]}
        />
        <Line
          dataKey="value"
          dot={{ fill: "#ffffff", strokeWidth: 0, r: 3 }}
          stroke="#ffffff"
          strokeWidth={1}
          type="monotone"
        />
      </LineChart>
    </ChartContainer>
  );
}
