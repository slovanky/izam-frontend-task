import Link from "next/link";
import Image from "next/image";

import ProfileMenu from "./ProfileMenu";
import NavbarMobile from "./NavbarMobile";
import NavbarMenuList from "./NavbarMenuList";

export default function Navbar() {
  return (
    <div className="w-full h-[86px] lg:h-[98px] px-[21px] xl:px-20 flex items-center bg-[#161616] text-[#E6E6E6]">
      <div className="w-full flex items-center justify-between">
        {/* Mobile menu area */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

        {/* Left area */}
        <Link href={`/`} className="flex items-center gap-x-[46px]">
          <Image src="/img/logo.svg" width={82} height={28} alt="IZAM Logo" className="shrink-0 h-[18px] lg:h-[27px] w-auto" />
        </Link>

        {/* Right area */}
        <div className="hidden lg:flex items-center justify-end gap-x-[58px]">
          <NavbarMenuList />
          {/* Profile Menu */}
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
