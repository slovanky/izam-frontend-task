"use client";

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
      {/* Top Nav */}
      <div className="w-full h-[86px] lg:h-[98px] flex items-center justify-center bg-[#161616] text-gray-500">Top Nav Here</div>

      <div className="grow flex items-start">
        {/* Side Filter Menu */}
        <div
          className={`
          z-[99] shrink-0 fixed lg:static top-0 bottom-0 right-0 w-screen lg:w-[380px] 2xl:w-[440px] min-h-screen lg:h-screen overflow-y-auto transition-main
          ${isOpen ? "left-0" : "-left-[100%]"}
          `}
        >
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="grow px-[21px] lg:px-[24px] py-[26px] lg:py-[36px]">{children}</div>
      </div>
    </div>
  );
}
