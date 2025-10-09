import React from "react";
import clsx from "clsx";

const StatusBadge = ({ status }) => {
  const safeStatus = status || "unknown";

  const label =
    safeStatus.charAt(0).toUpperCase() + safeStatus.slice(1).toLowerCase();

  // Define color based on status
  let colorClass = "";
  switch (safeStatus.toLowerCase()) {
    case "active":
      colorClass = "bg-green-100 text-green-700";
      break;
    case "expired":
      colorClass = "bg-red-100 text-red-700";
      break;
    case "due":
      colorClass = "bg-yellow-100 text-yellow-700";
      break;
    default:
      colorClass = "bg-gray-200 text-gray-700";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 text-xs font-medium",
        {
          "bg-[#E3F7E9] text-[#030712] border border-[rgba(49,165,83,1)]":
            status === "Active",
          "bg-[#EDEDED] text-[#030712] border border-[#ABABAB]":
            status === "Expired",
          "bg-[#FFEFDB] text-[#030712] border border-[#FFAB47]":
            status === "Due",
        }
      )}
    >
      <span
        className={clsx("h-1.5 w-1.5 rounded-full mr-1", {
          "bg-[#7ACD92]": status === "Active",
          "bg-[#CCC]": status === "Expired",
          "bg-[#FFAB47]": status === "Due",
        })}
      />
      {label}
    </span>
  );
};

export default StatusBadge;

// export function SheetDemo() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Edit profile</SheetTitle>
//           <SheetDescription>
//             Make changes to your profile here. Click save when you&apos;re done.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid flex-1 auto-rows-min gap-6 px-4">
//           <div className="grid gap-3">
//             <Label htmlFor="sheet-demo-name">Name</Label>
//             <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
//           </div>
//           <div className="grid gap-3">
//             <Label htmlFor="sheet-demo-username">Username</Label>
//             <Input id="sheet-demo-username" defaultValue="@peduarte" />
//           </div>
//         </div>
//         <SheetFooter>
//           <Button type="submit">Save changes</Button>
//           <SheetClose asChild>
//             <Button variant="outline">Close</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }
