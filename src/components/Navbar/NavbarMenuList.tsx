import { ReactNode } from "react";
import Link from "next/link";

import { NavbarEmployersIcon, NavbarHomeIcon, NavbarMessagingIcon, NavbarNotificationsIcon, NavbarJobsIcon } from "./NavbarIcons";

export default function NavbarMenuList() {
  return (
    <div>
      <ul className="p-[21px] lg:p-0 flex flex-col lg:flex-row items-center gap-x-[58px] gap-y-5">
        <li className="w-full lg:w-auto">
          <NavbarButton title="Home" icon={<NavbarHomeIcon className="shrink-0 w-5 lg:w-auto lg:h-9" />} href="/" target="" />
        </li>
        <li className="w-full lg:w-auto">
          <NavbarButton title="Jobs" icon={<NavbarJobsIcon className="shrink-0 w-5 lg:w-auto lg:h-9" />} href="/" target="" />
        </li>
        <li className="w-full lg:w-auto">
          <NavbarButton title="Employers" icon={<NavbarEmployersIcon className="shrink-0 w-5 lg:w-auto lg:h-9" />} href="/" target="" />
        </li>
        <li className="hidden lg:block">
          <div className="w-px h-[55px] bg-[#D6D6D6]"></div>
        </li>
        <li className="w-full lg:w-auto">
          <NavbarButton title="Notifications" icon={<NavbarNotificationsIcon className="shrink-0 w-5 lg:w-auto lg:h-9" />} href="/" target="" />
        </li>
        <li className="w-full lg:w-auto">
          <NavbarButton title="Messaging" icon={<NavbarMessagingIconWithNumber messagesCount={12} />} href="/" target="" />
        </li>
      </ul>
    </div>
  );
}

type NavbarButtonProps = {
  title: string;
  icon: ReactNode;
  href: string;
  target: string;
};

export function NavbarButton(props: NavbarButtonProps) {
  const { title, icon, href, target } = props;
  return (
    <Link
      href={href}
      target={target}
      className="w-full lg:max-w-[97px] flex lg:flex-col items-center gap-x-[13px] gap-y-0.5 text-[#5B5B5B] lg:text-[#E6E6E6] lg:hover:text-[#3D8E41] text-center transition-main"
    >
      {icon}
      <span className="text-lg text-center">{title}</span>
    </Link>
  );
}

type NavbarMessagingIconWithNumberProps = {
  messagesCount: number;
};

export function NavbarMessagingIconWithNumber(props: NavbarMessagingIconWithNumberProps) {
  const { messagesCount } = props;
  return (
    <div className="relative w-5 lg:w-[36px] h-5 lg:h-[36px] aspect-square flex flex-col items-center justify-end">
      <NavbarMessagingIcon className={`shrink-0 aspect-square ${messagesCount > 0 ? "h-[18px] lg:h-[30px]" : "h-5 lg:h-[36px]"}`} />
      {messagesCount > 0 && (
        <span className="absolute top-0 right-0 shrink-0 w-2 lg:w-4 w-2 lg:h-4 aspect-square flex items-center justify-center bg-gradient-to-bl from-[#FF5E5E] to-[#ED1F03] text-[5px] lg:text-[9px] text-center text-white font-bold rounded-full">
          {messagesCount <= 9 ? messagesCount : "9+"}
        </span>
      )}
    </div>
  );
}
