import React from "react";
import { ArrowUp, Check } from "lucide-react";

import DataCard from "@/components/cards/dataCard";
import StatCard from "@/components/cards/statCard";
import { chartsCardData } from "@/data/chartsData";
import { statsCards } from "@/data/statData";
import { timelineItems } from "@/data/timelineData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { projects } from "@/data/tableData";
import { cn } from "@/lib/utils";
export default function Dashboard() {
  const timelineContent = timelineItems.map((item, index) => {
    const IconComponent = item.icon;

    return (
      <div key={index} className="relative flex items-start gap-4">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white ">
          <IconComponent className={`size-3 ${item.iconColor}`} />
        </div>

        <div className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-[1px] bg-gray-300 translate-x-1/2" />

        <div className="flex-1 min-w-0 pb-2">
          <p className="text-sm font-semibold text-gray-900 leading-5">
            {item.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
        </div>
      </div>
    );
  });

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
              content={TableContent()}
              icon={
                <span className="font-semibold">
                  <Check
                    className="size-4 inline-block text-blue-500"
                    strokeWidth={3}
                  />{" "}
                  30 done
                </span>
              }
              title="Projects"
              value="this month"
            />
            <DataCard
              content={<div className="grid gap-3">{timelineContent}</div>}
              icon={
                <span className="font-semibold">
                  <ArrowUp
                    className="size-4 inline-block text-green-500"
                    strokeWidth={3}
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

function TableContent() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-gray-200">
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Companies
          </TableHead>
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Members
          </TableHead>
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Budget
          </TableHead>
          <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
            Completion
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow
            key={project.id}
            className="border-b border-gray-100 hover:bg-gray-50"
          >
            <TableCell className="py-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}
                >
                  {project.icon}
                </div>
                <span className="font-semibold text-gray-900">
                  {project.name}
                </span>
              </div>
            </TableCell>
            <TableCell className="py-2">
              <div className="flex -space-x-3">
                {project.members.map((member, index) => (
                  <Avatar key={index} className="w-6 h-6 border-1 border-white">
                    <AvatarImage
                      alt={member.name}
                      src={member.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback className="text-xs bg-gray-300">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </TableCell>
            <TableCell className="py-2">
              <span className="font-semibold text-gray-600">
                {project.budget}
              </span>
            </TableCell>
            <TableCell className="py-2">
              <div className="items-center gap-3">
                <p className="text-sm font-medium text-gray-900 min-w-[40px]">
                  {project.completion}%
                </p>
                <div className="flex-1 max-w-[120px]">
                  <Progress
                    className={cn(
                      "h-1",
                      project.completion === 100
                        ? "[&>div]:bg-green-500"
                        : "[&>div]:bg-blue-500",
                    )}
                    value={project.completion}
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
