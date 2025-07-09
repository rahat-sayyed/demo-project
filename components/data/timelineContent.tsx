import { timelineItems } from "@/data/timelineData";
import React from "react";

export default function TimelineContent() {
  const timelineContent = timelineItems.map((item, index) => (
    <div key={index} className="relative flex items-start gap-4">
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white ">
        <item.icon className={`size-3 ${item.iconColor}`} />
      </div>

      <div className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-[1px] bg-gray-300 translate-x-1/2" />

      <div className="flex-1 min-w-0 pb-2">
        <p className="text-sm font-semibold text-gray-900 leading-5">
          {item.title}
        </p>
        <p className="text-xs text-gray-500 mt-1 font-bold">
          {item.timestamp}
        </p>
      </div>
    </div>
  ));

  return timelineContent;
}