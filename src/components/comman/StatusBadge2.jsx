import React from "react";
import clsx from "clsx";

const StatusBadge = ({ status }) => {
  const safeStatus = status || "unknown";

  const label =
    safeStatus.charAt(0).toUpperCase() + safeStatus.slice(1).toLowerCase();

  // Define color based on status
  let colorClass = "";
  switch (safeStatus.toLowerCase()) {
    case "Completed":
      colorClass = "bg-green-100 text-green-700";
      break;
    case "Expired":
      colorClass = "bg-[#FF888857] text-red-700";
      break;
    case "Planned":
      colorClass = "bg-yellow-100 text-yellow-700";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 text-xs font-medium",
        {
          "bg-[#E3F7E9] text-[#030712] border border-[rgba(49,165,83,1)]":
            status === "Completed",
          "bg-[#FF888857] text-[#030712] border border-[#e90c0c]":
            status === "Expired",
          "bg-[#FFEFDB] text-[#030712] border border-[#FFAB47]":
            status === "Planned",
        }
      )}
    >
      <span
        className={clsx("h-1.5 w-1.5 rounded-full mr-1", {
          "bg-[#7ACD92]": status === "Completed",
          "bg-[#ee0a0aea]": status === "Expired",
          "bg-[#FFAB47]": status === "Planned",
        })}
      />
      {label}
    </span>
  );
};

export default StatusBadge;
