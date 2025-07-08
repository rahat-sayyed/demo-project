"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Settings, Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  NotificationsRounded,
  PersonRounded,
  SettingsRounded,
} from "@mui/icons-material";
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
                            href={href}
                            className={`${isLast ? "text-gray-700" : ""}`}
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
              placeholder="Type here..."
              className="p-2 md:min-w-40 bg-transparent"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-pink-600 border-pink-600 bg-transparent rounded-lg "
          >
            ONLINE BUILDER
          </Button>
          <div className="flex text-gray-500 gap-0">
            <Button variant="ghost" size="sm">
              <PersonRounded className="size-2" />
              Sign In
            </Button>
            <Button variant="ghost" className="p-2">
              <SettingsRounded className="size-2" />
            </Button>
            <Button variant="ghost" className="p-2">
              <NotificationsRounded className="size-2" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
