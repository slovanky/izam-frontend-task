"use client";

import { MenuIcon } from "@/components/common/Icons";
import JobList from "@/components/JobList/JobList";
import SortingDropdown from "@/components/SortingDropdown";

import { useSidebarStore } from "@/stores/sidebarStore";

export default function JobsPage() {
  const { openSidebar } = useSidebarStore();

  return (
    <>
      {/* Sorting Dropdown */}
      <div className="flex items-center justify-end">
        <SortingDropdown />
      </div>

      {/* Page Content */}
      <div className="flex items-stretch gap-1.5">
        <div className="grow px-4 lg:px-10 py-2.5 lg:py-6 flex items-end lg:items-center justify-between gap-5 bg-[#3D8E41] text-white rounded-[2px] lg:rounded-[5px]">
          <div>
            <h4 className="text-sm lg:text-[23px] font-bold">UI Designer in Egypt</h4>
            <p className="text-[11px] lg:text-[17px]">70 job positions</p>
          </div>
          <div className="flex items-center gap-3 text-[11px] lg:text-[21px]">
            <span>Set alert</span>

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-[#C4C3C3]/50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black/10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C4C3C3]/50"></div>
            </label>
          </div>
        </div>

        <button onClick={openSidebar} className="shrink-0 lg:hidden w-[57px] flex items-center justify-center bg-white border border-[#F0F0F0] rounded-[2px]">
          <MenuIcon className="w-[24px] h-[24px] aspect-square" />
        </button>
      </div>

      {/* Job list */}
      <JobList />
    </>
  );
}
