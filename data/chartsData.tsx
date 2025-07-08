import { Clock } from "lucide-react";

import { CustomLineChart } from "@/components/charts/lineChart";
import { WebsiteViewChart } from "@/components/charts/websiteViewChart";

const lineChartData = [
  { month: "Apr", value: 50 },
  { month: "May", value: 80 },
  { month: "Jun", value: 250 },
  { month: "Jul", value: 200 },
  { month: "Aug", value: 450 },
  { month: "Sep", value: 250 },
  { month: "Oct", value: 350 },
  { month: "Nov", value: 200 },
  { month: "Dec", value: 500 },
];

const barChartData = [
  { day: "M", value: 45 },
  { day: "T", value: 18 },
  { day: "W", value: 8 },
  { day: "T", value: 20 },
  { day: "F", value: 48 },
  { day: "S", value: 5 },
  { day: "S", value: 35 },
];

export const chartsCardData = [
  {
    title: "Website Views",
    value: "last campaign performance",
    icon: <WebsiteViewChart data={barChartData} />,
    bgColor: "",
    tagNode: (
      <span className="">
        <Clock size={12} />
      </span>
    ),
    tagLine: "campaign sent 2 days ago",
  },
  {
    title: "Daily Sales",
    value: "(+15%) increase in today sales",
    icon: <CustomLineChart data={lineChartData} variant="dark" />,
    bgColor: "",
    tagNode: (
      <span className="">
        <Clock size={12} />
      </span>
    ),

    tagLine: "updated 4 min ago",
  },
  {
    title: "Completed Tasks",
    value: "Last Campaign Performance",
    icon: <CustomLineChart data={lineChartData} variant="dark" />,
    bgColor: "",
    tagNode: (
      <span className="">
        <Clock size={12} />
      </span>
    ),

    tagLine: "just updated",
  },
];
