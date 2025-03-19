"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ProfileMenuContent from "./ProfileMenuContent";
import { CaretDownIcon } from "../common/Icons";
import ProfileMenuHeader from "./ProfileMenuHeader";

export default function ProfileMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const menuElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: { target: Node | null }): void => {
      if (!menuElRef.current?.contains(e.target)) {
        setMenuIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick as () => void);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick as () => void);
    };
  }, [menuElRef]);

  return (
    <div ref={menuElRef} className="relative">
      {/* Button */}
      <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="flex flex-col items-center gap-y-1.5">
        <Image src="/img/avatar.png" width={30} height={30} alt="Profile picture" />
        <div className="flex items-center justify-center gap-x-1 text-center">
          <span className="text-lg">Profile</span>
          <CaretDownIcon className="w-4 h-4 aspect-square" />
        </div>
      </button>

      {/* Menu */}
      {menuIsOpen && (
        <div className="z-[999] absolute top-full right-0 w-[316px] mt-2 bg-white border border-[#D8D8D8] rounded-[11px]">
          <ProfileMenuHeader />
          <div className="h-px bg-[#F0F0F0]"></div>
          <ProfileMenuContent />
        </div>
      )}
    </div>
  );
}
