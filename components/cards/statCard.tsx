import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import CustomCardHeader from "./cardHeader";
import Separator from "../ui/separator";

interface statCardProps {
  title: string;
  value: string;
  tagNode: React.ReactNode;
  tagLine: string;
  icon: React.ReactNode;
  bgColor: string;
  isGraph?: boolean;
}
export default function StatCard({
  title,
  value,
  icon,
  tagNode,
  tagLine,
  bgColor,
  isGraph,
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
                reverse={isGraph}
                className="text-right self-end"
              />
              <Separator />
              <div className="flex items-center mt-2 text-sm">
               {tagNode}{tagLine}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
