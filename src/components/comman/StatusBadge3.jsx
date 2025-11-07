import React from "react";
import clsx from "clsx";

const StatusBadge = ({ status }) => {
  const safeStatus = (status || "unknown").toLowerCase();

  // Don’t render anything if unknown or empty
  if (safeStatus === "unknown" || safeStatus.trim() === "") return null;

  const label = safeStatus.charAt(0).toUpperCase() + safeStatus.slice(1);

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border",
        {
          "bg-[#FFEFDB] text-[#F58400] border-[#F58400]": safeStatus === "new",
          "bg-[#E4E7EB] text-[#808188] border-[#808188]":
            safeStatus === "not show",
          "bg-[#5B14D133] text-[#4710A3] border-[#4710A3]":
            safeStatus === "expired",
          "bg-[#CFE2FC33] text-[#8EBAF6] border-[#8EBAF6]":
            safeStatus === "confirmed",
          "bg-[#FF888857] text-[#FF0000] border-[#FF0000]":
            safeStatus === "canceled",
          "bg-[#E7F8E8] text-[#2E7D32] border-[#2E7D32]":
            safeStatus === "completed",
        }
      )}
    >
      <span
        className={clsx("h-1.5 w-1.5 rounded-full mr-1", {
          "bg-[#F58400]": safeStatus === "new",
          "bg-[#808188]": safeStatus === "not show",
          "bg-[#4710A3]": safeStatus === "expired",
          "bg-[#8EBAF6]": safeStatus === "confirmed",
          "bg-[#FF0000]": safeStatus === "canceled",
          "bg-[#2E7D32]": safeStatus === "completed",
        })}
      />
      {label}
    </span>
  );
};

export default StatusBadge;
