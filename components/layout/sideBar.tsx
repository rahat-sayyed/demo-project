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
    <div className="p-3">
      <div className="w-64 bg-gray-800 text-white flex flex-col h-full rounded-lg">
        {/* header */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <WidgetsRounded className="w-5 h-5 text-gray-800" />
            </div>
            <span className="font-semibold">Material Dashboard 2</span>
          </div>
        </div>

        <nav className="flex-1 px-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  item.name === activeNav
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              ACCOUNT PAGES
            </p>
            <div className="space-y-1">
              {accountItems.map((item) => (
                <button
                  key={item.name}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
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
