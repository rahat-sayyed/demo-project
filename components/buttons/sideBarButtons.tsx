import React from "react";

/**
 * SideBarButtons component
 *
 * A button component specifically designed for the sidebar.
 *
 * @param {object} props
 * @param {React.ReactNode} props.icon - The icon to display inside the button.
 * @param {string} props.name - The name of the button.
 * @param {string} [props.activeItem] - The currently active item.
 * @param {function} [props.onclick] - The callback function when the button is clicked.
 *
 * @returns {JSX.Element} The SideBarButtons component.
 */
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
