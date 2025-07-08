import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <Link className="bg-slate-900 p-2" href="/pages/dashboard">
        <Button>Pages/Dashboard</Button>
      </Link>
    </div>
  );
}
