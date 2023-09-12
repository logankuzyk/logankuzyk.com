import React from "react";

interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-gray-200 p-2">
      <p className="text-gray-700 text-xs">{children}</p>
    </div>
  );
};
