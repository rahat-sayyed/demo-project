"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DashboardRounded,
  TableViewRounded,
  ReceiptLongRounded,
  ViewInArRounded,
  FormatTextdirectionRToLRounded as rtlIcon,
  NotificationsRounded,
  PersonRounded,
  LoginRounded,
  AssignmentRounded,
  WidgetsRounded,
} from "@mui/icons-material";
import SideBarButtons from "../buttons/sideBarButtons";
import Separator from "../ui/separator";

export default function SideBar() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const sidebarItems = [
    { name: "Dashboard", icon: DashboardRounded, active: true },
    { name: "Tables", icon: TableViewRounded },
    { name: "Billing", icon: ReceiptLongRounded },
    { name: "Virtual Reality", icon: ViewInArRounded },
    { name: "RTL", icon: rtlIcon },
    { name: "Notifications", icon: NotificationsRounded },
  ];

  const accountItems = [
    { name: "Profile", icon: PersonRounded },
    { name: "Sign In", icon: LoginRounded },
    { name: "Sign Up", icon: AssignmentRounded },
  ];
  return (
    <div className="p-3 h-screen">
      <div className="w-56 text-white flex flex-col h-full rounded-lg bg-gradient-to-t from-[#050000] via-[#313B35] to-[#6E6E6E]">
        {/* header */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <WidgetsRounded className="w-5 h-5" />
            <span className="font-medium text-sm">Material Dashboard 2</span>
          </div>
        </div>
<Separator/>
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <SideBarButtons
                key={item.name}
                icon={<item.icon />}
                name={item.name}
                activeItem={activeNav}
                onclick={() => setActiveNav(item.name)}
              />
            ))}
          </div>

          <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              ACCOUNT PAGES
            </p>
            <div className="space-y-1">
              {accountItems.map((item) => (
                <SideBarButtons
                  key={item.name}
                  icon={<item.icon />}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4">
          <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
            UPGRADE TO PRO
          </Button>
        </div>
      </div>
    </div>
  );
}

