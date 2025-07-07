import React from "react";

interface CardHeaderProps {
  title: string;
  value: string;
  reverse?: boolean;
  className: string;
}
export default function CustomCardHeader({ title, value, reverse, className }: CardHeaderProps) {
  return (
    <div className={className}>
      <p className="font-light text-gray-600 mb-1 text-xs">{reverse ? value : title}</p>
      <p className="text-xl font-bold text-gray-900">{reverse ? title : value}</p>
    </div>
  );
}
