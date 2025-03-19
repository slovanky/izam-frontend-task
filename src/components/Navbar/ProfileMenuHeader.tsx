import Image from "next/image";
import { ChevronRightIcon } from "../common/Icons";
import Link from "next/link";

export default function ProfileMenuHeader() {
  return (
    <div>
      <div className="p-[23px]">
        <Link href="/" className="flex items-center justify-between">
          <div className="flex items-center gap-x-[17px]">
            <Image src="/img/avatar.png" width={70} height={70} alt="Profile pucture" />
            <div>
              <h4 className="text-[19px] text-[#161616] font-medium">Ahmed Amaar</h4>
              <p className="text-[15px] text-[#707070]">UX UI designer</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ChevronRightIcon className="shrink-0 h-3 w-auto text-[#C4C3C3]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
