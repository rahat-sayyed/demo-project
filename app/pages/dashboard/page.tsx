import React from "react";
import { ArrowUp, Check } from "lucide-react";

import DataCard from "@/components/cards/dataCard";
import StatCard from "@/components/cards/statCard";
import { chartsCardData } from "@/data/chartsData";
import { statsCards } from "@/data/statData";
import TableContent from "@/components/data/tableContent";
import TimelineContent from "@/components/data/timelineContent";

export default function Dashboard() {

  return (
    <div className="flex ">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 px-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {statsCards.map((card, index) => (
              <StatCard
                key={index}
                {...card}
                icon={<card.icon className="w-6 h-6" />}
              />
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
            {chartsCardData.map((card, index) => (
              <StatCard key={index} {...card} isGraph={true} />
            ))}
          </div>

          {/* Table Row & Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DataCard
              showMore
              className="lg:col-span-2"
              content={<TableContent/>}
              icon={
                <span className="font-bold">
                  <Check
                    className="size-4 inline-block text-blue-500"
                    strokeWidth={4}
                  />{" "}
                  30 done
                </span>
              }
              title="Projects"
              value="this month"
            />
            <DataCard
              content={<div className="grid gap-3">{<TimelineContent/>}</div>}
              icon={
                <span className="font-bold">
                  <ArrowUp
                    className="size-4 inline-block text-green-500"
                    strokeWidth={4}
                  />{" "}
                  24%
                </span>
              }
              title="Orders Overview"
              value="this month"
            />
          </div>
        </main>
      </div>
    </div>
  );
}


