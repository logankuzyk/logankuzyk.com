import React from "react";

interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-nord-bg2 p-2">
      <p className="text-xs text-nord-fg0">{children}</p>
    </div>
  );
};
