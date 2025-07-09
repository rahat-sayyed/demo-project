import React from "react";

import { cn } from "@/lib/utils";

/**
 * CustomCardHeader component
 *
 * A custom card header component for displaying title and value.
 *
 * @param {object} props
 * @param {string} props.title - The title to display.
 * @param {string} props.value - The value to display.
 * @param {boolean} [props.reverse=false] - Whether to reverse the title and value.
 * @param {string} [props.className=""] - The CSS class to apply to the component.
 *
 * @returns {JSX.Element} The CustomCardHeader component.
 */
interface CardHeaderProps {
  title: string;
  value: string | React.ReactNode;
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
            ? "font-light text-gray-500"
            : "text-xl font-bold text-gray-900",
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "text-xs mb-1",
          reverse
            ? "font-light text-gray-500"
            : "text-xl font-bold text-gray-900",
        )}
      >
        {value}
      </p>
    </div>
  );
}
