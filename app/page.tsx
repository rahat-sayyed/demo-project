import StatCard from "@/components/cards/statCard";
import { CustomLineChart } from "@/components/charts/lineChart";
import { WebsiteViewChart } from "@/components/charts/websiteViewChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
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

  const chartsCardData = [
    {
      title: "Website Views",
      value: "last campaign performance",
      icon: (
        <Card className="bg-pink-500 text-white">
          <CardContent className="p-6">
            <WebsiteViewChart data={barChartData} />
          </CardContent>
        </Card>
      ),
      bgColor: "",
      tagNode: (
        <span className="">
          <Clock size={16} />
        </span>
      ),
      tagLine: "campaign sent 2 days ago",
    },
    {
      title: "Daily Sales",
      value: "(+15%) increase in today sales",
      icon: (
        <Card className="bg-gray-800 text-white">
          <CardContent className="p-6">
            <CustomLineChart data={lineChartData} variant="dark" />
          </CardContent>
        </Card>
      ),
      bgColor: "",
      tagNode: (
        <span className="">
          <Clock size={16} />
        </span>
      ),

      tagLine: "updated 4 min ago",
    },
    {
      title: "Completed Tasks",
      value: "Last Campaign Performance",
      icon: (
        <Card className="bg-gray-800 text-white">
          <CardContent className="p-6">
            <CustomLineChart data={lineChartData} variant="dark" />
          </CardContent>
        </Card>
      ),
      bgColor: "",
      tagNode: (
        <span className="">
          <Clock size={16} />
        </span>
      ),

      tagLine: "just updated",
    },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center ">
      {chartsCardData.map((card, index) => (
        <StatCard key={index} {...card} isGraph={true} />
      ))}
      <Link href="/pages/dashboard" className="bg-slate-900 p-2">
        <Button>Pages/Dashboard</Button>
      </Link>
    </div>
  );
}
