import { cn } from "@/lib/utils";
import React from "react";

interface CardHeaderProps {
  title: string;
  value: string;
  reverse?: boolean;
  className: string;
}
export default function CustomCardHeader({
  title,
  value,
  reverse,
  className,
}: CardHeaderProps) {
  return (
    <div className={className}>
      <p
        className={cn(
          "text-xs mb-1",
          !reverse
            ? "font-light text-gray-600"
            : "text-xl font-bold text-gray-900",
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "text-xs mb-1",
          reverse
            ? "font-light text-gray-600"
            : "text-xl font-bold text-gray-900",
        )}
      >
        {value}
      </p>
    </div>
  );
}
