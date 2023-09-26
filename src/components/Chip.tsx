import classNames from "classnames";
import React from "react";

interface ChipProps {
  children: React.ReactNode;
  clickable?: boolean;
}

export const Chip: React.FC<ChipProps> = ({ children, clickable }) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center rounded-full bg-nord-bg2 p-2",
        {
          "transition-all duration-200 ease-in-out bg-nord-bg2 hover:bg-nord-bg1 hover:shadow-lg border border-nord-bg2":
            clickable,
        }
      )}
    >
      <p className="text-xs text-nord-fg0">{children}</p>
    </div>
  );
};
