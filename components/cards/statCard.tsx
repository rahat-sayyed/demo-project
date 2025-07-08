import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import CustomCardHeader from "./cardHeader";
import Separator from "../ui/separator";
import { cn } from "@/lib/utils";

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
    <div className="relative p-2 h-fit flex flex-col justify-end">
     {!isGraph &&
      <div
      className={` p-4 rounded-lg text-white ${bgColor} flex items-center justify-center absolute -top-1 left-5 z-10`}
      >
        {icon}
      </div>
      }
      <Card className="relative overflow-hidden rounded-lg">
        <CardContent className={cn(isGraph ? "p-4" : "p-3")}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-full gap-2">
             {isGraph && <div className="w-full ">{icon}</div>}
              <CustomCardHeader
                title={title}
                value={value}
                reverse={isGraph}
                className={isGraph ? "" :"text-right self-end"}
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
