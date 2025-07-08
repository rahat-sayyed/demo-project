import React from "react";
import { Button } from "../ui/button";
import { Heart, Settings } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-8">
      <div className="flex items-center justify-between text-sm text-gray-500 relative">
        <div className="flex items-center space-x-1">
          <span>© 2022, made with</span>
          <Heart className="w-4 h-4 fill-current" />
          <span>by</span>
          <span className="font-semibold text-gray-900">Creative Tim</span>
          <span>for a better web.</span>
        </div>
        <div className="flex items-center space-x-6 mr-16">
          <Link href="#">Creative Tim</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Blog</Link>
        </div>
          <Button variant="secondary" size="icon" className="absolute right-0 rounded-full bg-gray-200 hover:bg-gray-300">
            <Settings className="w-4 h-4" />
          </Button>
      </div>
    </footer>
  );
}
