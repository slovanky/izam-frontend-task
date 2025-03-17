"use client";

import { useState } from "react";
import { CheckIcon, CloseIcon, SettingGearIcon } from "./common/Icons";

export default function SideFilterMenu() {
  const [menuMode, setMenuMode] = useState<"view" | "edit">("view");

  return (
    <div className="shrink-0 h-screen w-[440px] flex flex-col bg-white">
      <div className="h-[98px] px-[44px] py-[36px] flex items-center border-b border-[#E9E9E9]">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-[25px] text-[#404040] font-medium">Menu</h3>
          <div className="flex items-center gap-[9px]">
            {menuMode === "view" && (
              <button onClick={() => setMenuMode("edit")}>
                <SettingGearIcon className="w-[30px] h-[30px] aspect-square text-black" />
              </button>
            )}

            {menuMode === "edit" && (
              <>
                <button onClick={() => setMenuMode("view")}>
                  <CloseIcon className="w-[42px] h-[42px] aspect-square text-[#ED1F03]" />
                </button>
                <button onClick={() => setMenuMode("view")}>
                  <CheckIcon className="w-[42px] h-[42px] aspect-square text-[#3D8E41]" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="px-[14px] py-[32px]">
        <ul className="space-y-[14px]">
          <li>
            <div></div>
          </li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  );
}
