import React from "react";

export default function SideBarButtons({
  icon,
  name,
  activeItem,
  onclick,
}: {
  icon: React.ReactNode;
  name: string;
  activeItem?: string;
  onclick?: (name: string) => void;
}) {
  return (
    <button
      key={name}
      className={`text-xs w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors ${
        name === activeItem
          ? "bg-gradient-to-r from-pink-700 to-pink-500 text-white"
          : "text-gray-300 hover:bg-gray-500/80"
      }`}
      onClick={() => onclick?.(name)}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
}
