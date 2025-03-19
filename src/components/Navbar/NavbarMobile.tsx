import Image from "next/image";
import { MenuIcon } from "../common/Icons";
import ProfileMenuHeader from "./ProfileMenuHeader";
import NavbarMenuList from "./NavbarMenuList";

export default function NavbarMobile() {
  return (
    <>
      <div>
        <button className="relative shrink-0 w-[46px] h-[46px] aspect-square flex items-center justify-center">
          <Image src="/img/avatar.png" width={41} height={41} alt="Profile picture" />
          <span className="absolute bottom-0 right-0 shrink-0 w-5 h-5 aspect-square flex items-center justify-center bg-[#F0F0F0] rounded-full">
            <MenuIcon className="w-3 h-3 aspect-square text-[#707070]" />
          </span>
        </button>

        <div className="z-[999] fixed top-0 left-0 w-[285px] max-w-screen h-screen bg-white">
          <ProfileMenuHeader />
          <div className="h-px bg-[#F0F0F0]"></div>
          <NavbarMenuList />
        </div>
      </div>
    </>
  );
}
