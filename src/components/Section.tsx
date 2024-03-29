import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className="flex flex-col mb-12 gap-y-6">{children}</div>;
};
