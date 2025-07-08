import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <Link href="/pages/dashboard" className="bg-slate-900 p-2">
        <Button>Pages/Dashboard</Button>
      </Link>
    </div>
  );
}
