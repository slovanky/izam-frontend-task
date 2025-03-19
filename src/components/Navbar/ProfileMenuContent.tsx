import Link from "next/link";

export default function ProfileMenuContent() {
  return (
    <div>
      <div className="py-[23px]">
        <ul className="space-y-[11px]">
          <li>
            <Link href="/">
              <span className="px-[23px] text-[17px] text-[#707070] font-medium">Setting and privacy</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="px-[23px] text-[17px] text-[#707070] font-medium">Language</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="px-[23px] text-[17px] text-[#707070] font-medium">Help</span>
            </Link>
          </li>

          <li>
            <div className="h-px my-[23px] bg-[#F0F0F0]"></div>
          </li>

          <li>
            <Link href="/">
              <span className="px-[23px] text-[17px] text-[#ED1F03] font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
