import React from "react";

import Separator from "../ui/separator";

import CustomCardHeader from "./cardHeader";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface statCardProps {
  title: string;
  value: string | React.ReactNode;
  tagNode: React.ReactNode;
  tagLine: string;
  icon: React.ReactNode;
  bgColor: string;
  isGraph?: boolean;
}
/**
 * StatCard component
 *
 * A card component for displaying statistics.
 *
 * @param {object} props
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {React.ReactNode} props.children - The content of the card.
 *
 * @returns {JSX.Element} The StatCard component.
 */
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
    <div className="mt-3">
      <Card className="relative rounded-lg">
        {!isGraph && (
          <div
            className={cn(`p-4 rounded-lg text-white flex items-center justify-center absolute -top-3 left-3 z-10 shadow-md bg-gradient-to-t from-black to-gray-800/95 shadow-black/50`,
              bgColor ==="green" && "bg-gradient-to-t from-green-500 to-green-400/95 shadow-green-500/50",
              bgColor ==="pink" && "bg-gradient-to-t from-pink-500 to-pink-400/95 shadow-pink-500/50",
              bgColor ==="blue" && "bg-gradient-to-t from-blue-500 to-blue-400/95 shadow-blue-500/50",
            )}
          >
            {icon}
          </div>
        )}
        <CardContent className={cn(isGraph ? "p-4" : "p-3")}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-full gap-2">
              {isGraph && <div className="w-full -mt-8">{icon}</div>}
              <CustomCardHeader
                className={isGraph ? "" : "text-right self-end"}
                reverse={isGraph}
                title={title}
                value={value}
              />
              <Separator />
              <div className="flex items-center mt-2 text-xs text-gray-400">
                {tagNode} &nbsp;{tagLine}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
