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
const formatSegment = (segment: string) =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default function Navbar() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <header className="px-6 py-4 ">
      <div className="flex items-center justify-between">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              {pathSegments.length > 0
                ? pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    return (
                      <React.Fragment key={index + href}>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            className={`${isLast ? "text-gray-700" : ""}`}
                            href={href}
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
              className="p-2 md:min-w-40 bg-transparent"
              placeholder="Type here..."
            />
          </div>
          <Button
            className="text-pink-600 border-pink-600 bg-transparent rounded-lg "
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
