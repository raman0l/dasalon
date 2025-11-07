"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname?.includes("/auth");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-row min-h-screen">
      {!isAuthPage && (
        <Navbar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`flex-1 w-full flex flex-col ${
          !isAuthPage ? "md:pl-13 pl-8" : ""
        }`}
      >
        <main className="flex-1 w-full">{children}</main>
      </div>
    </div>
  );
}
