"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  NotificationsRounded,
  PersonRounded,
  SettingsRounded,
} from "@mui/icons-material";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// Converts a string to title case (e.g. "path-segment becomes "Path Segment").
const formatSegment = (segment: string) =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default function Navbar() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  // Takes an index and creates a href by joining path segments up to that index.
  const href = (index: number) =>
    `/${pathSegments.slice(0, index + 1).join("/")}`;
  const isLast = (index: number) => index === pathSegments.length - 1;

  return (
    <header className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              {pathSegments.length > 0
                ? pathSegments.map((segment, index) => {
                    return (
                      <React.Fragment key={index}>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            className={`${isLast(index) ? "text-gray-700" : ""}`}
                            href={href(index)}
                          >
                            {formatSegment(segment)}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                      </React.Fragment>
                    );
                  })
                : "Home"}
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-lg font-semibold text-gray-900">
            {formatSegment(pathSegments[pathSegments.length - 1] ?? "Home")}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Input
              className="p-2 md:min-w-40 bg-transparent border-1.5 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-black focus-visible:border-pink-600"
              placeholder="Type here..."
            />
          </div>
          <Button
            className="text-sm px-4 text-pink-600 border-pink-600 rounded-lg hover:bg-pink-200/20 hover:text-pink-600 hover:border-pink-700"
            size="sm"
            variant="outline"
          >
            ONLINE BUILDER
          </Button>
          <div className="flex text-gray-500 gap-0">
            <Button size="sm" variant="ghost">
              <PersonRounded className="size-2" />
              Sign In
            </Button>
            <Button className="p-2" variant="ghost">
              <SettingsRounded className="size-2" />
            </Button>
            <Button className="p-2" variant="ghost">
              <NotificationsRounded className="size-2" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
