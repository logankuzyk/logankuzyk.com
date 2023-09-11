import React from "react";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="flex items-center justify-center gap-2 bg-gray-200 p-2 rounded-full">
        {children}
      </div>
    </a>
  );
};
