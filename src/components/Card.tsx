import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-2 rounded-lg border border-nord-bg2 p-6 shadow-lg flex-wrap bg-nord-bg0">
      {children}
    </div>
  );
};
