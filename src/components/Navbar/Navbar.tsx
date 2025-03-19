import Image from "next/image";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import NavbarMobile from "./NavbarMobileMenu";

export default function Navbar() {
  return (
    <div className="w-full h-[86px] lg:h-[98px] px-[21px] 2xl:px-20 flex items-center bg-[#161616] text-[#E6E6E6]">
      <div className="w-full flex items-center justify-between">
        {/* Mobile menu area */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

        {/* Left area */}
        <Link href={`/`} className="flex items-center gap-x-[46px]">
          <Image src="/img/logo.svg" width={81} height={27} alt="IZAM Logo" />
        </Link>

        {/* Right area */}
        <div className="hidden lg:flex items-center justify-end">
          {/* Profile Menu */}
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
