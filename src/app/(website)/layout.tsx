"use client";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

import { useSidebarStore } from "@/stores/sidebarStore";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = useSidebarStore();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="grow flex items-stretch">
        {/* Sidebar Menu */}
        <div
          className={`
          z-[99] shrink-0 fixed lg:static top-0 bottom-0 w-screen lg:w-[380px] 2xl:w-[440px] min-h-screen lg:h-auto overflow-y-auto transition-main
          ${isOpen ? "right-0" : "-right-[100%]"}
          `}
        >
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="grow px-[21px] lg:px-[24px] xl:pe-20 py-[26px] lg:py-[36px]">{children}</div>
      </div>
    </div>
  );
}
