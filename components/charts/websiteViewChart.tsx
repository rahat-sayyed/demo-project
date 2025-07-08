"use client"

import { ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"

interface PinkBarChartProps {
  data: Array<{ day: string; value: number }>
  className?: string
}

export function PinkBarChart({ data, className = "h-64" }: PinkBarChartProps) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Value",
          color: "#ffffff",
        },
      }}
      className={className}
    >
      <BarChart data={data} barCategoryGap="60%">
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.3)" horizontal={true} vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#ffffff", fontSize: 12 }} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#ffffff", fontSize: 12 }}
          domain={[0, 60]}
          ticks={[0, 20, 40, 60]}
        />
        <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
