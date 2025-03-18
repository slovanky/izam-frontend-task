"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import { MenuIcon } from "@/components/common/Icons";

export default function JobsPage() {
  const [sideFilterMenuIsOpen, setSideFilterMenuIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <div className="w-full h-[98px] flex items-center justify-center bg-[#161616] text-gray-500">Top Nav Here</div>

      <div className="grow flex items-start">
        {/* Side Filter Menu */}
        <div
          className={`
          shrink-0 fixed lg:static top-0 bottom-0 right-0 w-screen lg:w-[380px] 2xl:w-[440px] min-h-screen lg:h-screen overflow-y-auto transition-main
          ${sideFilterMenuIsOpen ? "left-0" : "-left-[100%]"}
          `}
        >
          <Sidebar onClose={() => setSideFilterMenuIsOpen(false)} />
        </div>

        {/* Jobs Page Content */}
        <div className="grow px-[24px] py-[36px]">
          <div className="flex items-stretch gap-1.5">
            <div className="grow px-10 py-6 flex items-center justify-between gap-5 bg-[#3D8E41] text-white rounded-[2px] lg:rounded-[5px]">
              <div>
                <h4 className="text-sm lg:text-[23px] font-bold">UI Designer in Egypt</h4>
                <p className="text-[11px] lg:text-[17px]">70 job positions</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[21px]">Set alert</span>
                <div>123</div>
              </div>
            </div>
            <button onClick={() => setSideFilterMenuIsOpen(true)} className="shrink-0 w-[57px] flex items-center justify-center bg-white border border-[#F0F0F0] rounded-[2px]">
              <MenuIcon className="w-[24px] h-[24px] aspect-square" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
