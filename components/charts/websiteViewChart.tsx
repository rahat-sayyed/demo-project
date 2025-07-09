"use client";

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";

import { ChartContainer } from "@/components/ui/chart";

/**
 * WebsiteViewChart component
 *
 * A chart component for displaying website views.
 *
 * @param {object} props
 * @param {array} props.data - The data for the chart.
 *
 * @returns {JSX.Element} The WebsiteViewChart component.
 */
interface WebsiteViewChartProps {
  data: Array<{ day: string; value: number }>;
  className?: string;
}

export function WebsiteViewChart({
  data,
  className = "h-44 w-full",
}: WebsiteViewChartProps) {
  return (
    <ChartContainer
      className={`${className} bg-pink-500 text-white rounded-lg pt-1 pr-1 shadow-md shadow-pink-500/60`}
      config={{
        value: {
          label: "Value",
          color: "#ffffff",
        },
      }}
    >
      <BarChart
        accessibilityLayer
        barCategoryGap="60%"
        data={data}
        margin={{
          left: -20,
          top: 20,
          right: 12,
        }}
      >
        <CartesianGrid
          stroke="rgba(255, 255, 255, 0.3)"
          strokeDasharray="3 3"
        />
        <XAxis
          axisLine={false}
          dataKey="day"
          style={{ fill: "white" }}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          domain={[0, 60]}
          style={{ fill: "white" }}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          tickLine={false}
          ticks={[0, 20, 40, 60]}
        />
        <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
