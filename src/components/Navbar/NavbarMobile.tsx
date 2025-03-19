"use client";

import Image from "next/image";
import { MenuIcon } from "../common/Icons";
import ProfileMenuHeader from "./ProfileMenuHeader";
import NavbarMenuList from "./NavbarMenuList";
import ProfileMenuContent from "./ProfileMenuContent";
import { useEffect, useRef, useState } from "react";

export default function NavbarMobile() {
  const [navbarMobileIsOpen, setNavbarMobileIsOpen] = useState<boolean>(false);

  const menuElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: { target: Node | null }): void => {
      if (!menuElRef.current?.contains(e.target)) {
        setNavbarMobileIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick as () => void);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick as () => void);
    };
  }, [menuElRef]);

  return (
    <>
      {navbarMobileIsOpen && <div className="z-[998] fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black/90 backdrop-blur-sm"></div>}

      <div ref={menuElRef}>
        <button onClick={() => setNavbarMobileIsOpen(!navbarMobileIsOpen)} className="relative shrink-0 w-[46px] h-[46px] aspect-square flex items-center justify-center">
          <Image src="/img/avatar.png" width={41} height={41} alt="Profile picture" />
          <span className="absolute bottom-0 right-0 shrink-0 w-5 h-5 aspect-square flex items-center justify-center bg-[#F0F0F0] rounded-full">
            <MenuIcon className="w-3 h-3 aspect-square text-[#707070]" />
          </span>
        </button>

        <div className={`z-[999] fixed top-0 w-[285px] max-w-screen h-screen bg-white transition-main ${navbarMobileIsOpen ? "left-0" : "-left-[100%]"}`}>
          <ProfileMenuHeader />
          <div className="h-px bg-[#F0F0F0]"></div>
          <NavbarMenuList />
          <div className="h-px bg-[#F0F0F0]"></div>
          <ProfileMenuContent />
        </div>
      </div>
    </>
  );
}
