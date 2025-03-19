"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./common/Icons";

export default function SortingDropdown() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const optionList = ["Top match", "Newest", "Most recent"];

  const [currentOption, setCurrentOption] = useState<string>(optionList[0]);

  const menuElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: { target: Node | null }): void => {
      if (!menuElRef.current?.contains(e.target)) {
        setDropdownIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick as () => void);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick as () => void);
    };
  }, [menuElRef]);

  useEffect(() => {
    setDropdownIsOpen(false);
  }, [currentOption]);

  return (
    <div ref={menuElRef} className="relative hidden lg:block">
      <div
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
        className={`w-[310px] px-[26px] py-[19px] flex items-center justify-between gap-3 border rounded-t-[5px] transition-main
        ${dropdownIsOpen ? "bg-white border-[#D8D8D8] rounded-b-none" : "bg-transparent border-transparent"}
        `}
      >
        <span className="text-xl text-[#404040] font-medium">Sorting By:</span>
        <div className="grow flex items-center justify-between text-[#48A74C] cursor-pointer">
          <span className="text-xl font-medium">{currentOption}</span>
          <ChevronDownIcon className="shrink-0 h-[13px] aspect-square" />
        </div>
      </div>
      {dropdownIsOpen && (
        <div className="z-[99] absolute left-0 top-full right-0 bg-white border border-t-0 border-[#D8D8D8] rounded-b-[11px] overflow-hidden">
          <ul>
            {optionList.map((item, index) => (
              <li key={`sorting-item-${index}`}>
                <div
                  onClick={() => setCurrentOption(item)}
                  className={`px-[26px] py-[19px] text-xl cursor-pointer ${currentOption === item ? "bg-[#F0F0F0] text-[#48A74C]" : "bg-transparent text-[#707070]"}`}
                >
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
