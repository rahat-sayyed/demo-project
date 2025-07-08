import React from "react";
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

export default function Dashboard() {
  const timelineContent=    timelineItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Timeline dot with icon */}
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white ">
                    <IconComponent className={`h-4 w-4 ${item.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pb-2">
                    <p className="text-sm font-medium text-gray-900 leading-5">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
                  </div>
                </div>
              )
            })
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {chartsCardData.map((card, index) => (
              <StatCard key={index} {...card} isGraph={true} />
            ))}
          </div>

        
       
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataCard
              title="Projects"
              value="30 done this month"
              icon="📊"
              showMore
              content={tableContent()}
            />
          <DataCard title="Orders Overview" value="30 done this month" icon="📊" content={timelineContent}/>
        
        </div>
        
        </main>

        {/* Footer */}
        
      </div>
    </div>
  );
}



function tableContent(){
  return(
     <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                    Companies
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                    Members
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                    Budget
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
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
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}
                        >
                          {project.icon}
                        </div>
                        <span className="font-medium text-gray-900">
                          {project.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex -space-x-3">
                        {project.members.map((member, index) => (
                          <Avatar
                            key={index}
                            className="w-6 h-6 border-1 border-white"
                          >
                            <AvatarImage
                              src={member.avatar || "/placeholder.svg"}
                              alt={member.name}
                            />
                            <AvatarFallback className="text-xs bg-gray-300">
                              {member.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="font-medium text-gray-900">
                        {project.budget}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="items-center gap-3">
                        <p className="text-sm font-medium text-gray-900 min-w-[40px]">
                          {project.completion}%
                        </p>
                        <div className="flex-1 max-w-[120px]">
                          <Progress
                            value={project.completion}
                            className="h-2"
                            style={
                              {
                                "--progress-background":
                                  project.completion === 100
                                    ? "#10b981"
                                    : project.completion >= 50
                                      ? "#3b82f6"
                                      : project.completion >= 25
                                        ? "#f59e0b"
                                        : "#ef4444",
                              } as React.CSSProperties
                            }
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
  )
}
