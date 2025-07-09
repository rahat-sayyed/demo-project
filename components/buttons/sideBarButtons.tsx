import React from "react";

/**
 * A button for the side bar.
 *
 * @param {React.ReactNode} icon The icon to show before the button name.
 * @param {string} name The name of the button.
 * @param {boolean} [isActive=false] Whether the button should appear active (i.e. with a pink background).
 * @param {((name: string) => void)} [onclick] The function to call when the button is clicked. The button name is passed as an argument.
 */
export default function SideBarButtons({
  icon,
  name,
  isActive = false,
  onclick,
}: {
  icon: React.ReactNode;
  name: string;
  isActive?: boolean;
  onclick?: (name: string) => void;
}) {
  return (
    <button
      key={name}
      className={`text-xs w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors ${
        isActive
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
