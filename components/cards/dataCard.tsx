import { MoreVertical } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
/**
 * DataCard component
 *
 * A card component for displaying data.
 *
 * @param {object} props
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {React.ReactNode} props.children - The content of the card.
 *
 * @returns {JSX.Element} The DataCard component.
 */
interface CardHeaderProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  showMore?: boolean;
  content: React.ReactNode;
  className?: string;
}
export default function DataCard({
  title,
  value,
  icon,
  showMore,
  content,
  className,
}: CardHeaderProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-black">{title}</p>
            <p className=" text-sm font-normal text-gray-600">
              {icon}&nbsp;{value}
            </p>
          </div>
          <div>
            {showMore && (
              <Button size="icon" variant="ghost">
                <MoreVertical className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
