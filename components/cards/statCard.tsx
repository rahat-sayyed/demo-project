import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import CustomCardHeader from "./cardHeader";
import Separator from "../ui/separator";

interface statCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  icon: React.ReactNode;
  positive: boolean;
  bgColor: string;
}
export default function StatCard({
  title,
  value,
  change,
  changeText,
  icon,
  positive,
  bgColor,
}: statCardProps) {
  return (
    <div className="relative p-2">
      <div
        className={`w-12 h-12 rounded-lg text-white ${bgColor} flex items-center justify-center absolute -top-1 left-5 z-10`}
      >
        {icon}
      </div>
      <Card className="relative overflow-hidden rounded-lg">
        <CardContent className="px-2 py-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-full gap-2">
              <CustomCardHeader
                title={title}
                value={value}
                className="text-right self-end"
              />
              <Separator />
              <div className="flex items-center mt-2">
                <span
                  className={`text-sm font-medium ${positive ? "text-green-600" : "text-red-600"}`}
                >
                  {change}
                </span>
                <span className="text-sm text-gray-500 ml-1">{changeText}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
