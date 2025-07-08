import React from "react";
import { Button } from "../ui/button";
import { Heart, Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <span>© 2022, made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>by</span>
          <span className="font-medium text-gray-900">Creative Tim</span>
          <span>for a better web.</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>Creative Tim</span>
          <span>About Us</span>
          <span>Blog</span>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
