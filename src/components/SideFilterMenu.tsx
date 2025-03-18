"use client";

import { useState } from "react";
import { BackIcon, CheckIcon, ChevronDownIcon, CloseIcon, DragBtnIcon, EditIcon, HiddenIcon, SettingGearIcon, VisibleIcon } from "./common/Icons";
import Link from "next/link";

type SideFilterMenuButtonChild = {
  title: string;
  href: string;
  target: string;
  visible: boolean;
};

type SideFilterMenuButton = SideFilterMenuButtonChild & {
  childs: SideFilterMenuButtonChild[];
};

export default function SideFilterMenu(props: { onClose: () => void }) {
  const { onClose } = props;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const sideFilterMenuList: SideFilterMenuButton[] = [
    {
      title: "Dashboard",
      href: "/",
      target: "",
      visible: true,
      childs: [],
    },

    {
      title: "Job Application",
      href: "/",
      target: "",
      visible: true,
      childs: [
        {
          title: "John Doe",
          href: "/",
          target: "",
          visible: true,
        },
        {
          title: "James Bond",
          href: "/",
          target: "",
          visible: true,
        },
        {
          title: "Scarlet Joe",
          href: "/",
          target: "",
          visible: false,
        },
      ],
    },

    {
      title: "Qualifications",
      href: "/",
      target: "",
      visible: true,
      childs: [
        {
          title: "Child 1",
          href: "/",
          target: "",
          visible: true,
        },
        {
          title: "Child 2",
          href: "/",
          target: "",
          visible: true,
        },
      ],
    },

    {
      title: "About",
      href: "/",
      target: "",
      visible: true,
      childs: [],
    },

    {
      title: "Contact",
      href: "/",
      target: "",
      visible: true,
      childs: [],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="h-[98px] px-[44px] py-[36px] flex items-center border-b border-[#E9E9E9]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="lg:hidden">
              <BackIcon className="w-[15px] h-[15px] aspect-square text-[#161616]" />
            </button>
            <h3 className="text-[25px] text-[#404040] font-medium">Menu</h3>
          </div>

          <div className="flex items-center gap-[9px]">
            {isEditMode ? (
              <>
                <button onClick={() => setIsEditMode(false)}>
                  <CloseIcon className="w-[42px] h-[42px] aspect-square text-[#ED1F03]" />
                </button>
                <button onClick={() => setIsEditMode(false)}>
                  <CheckIcon className="w-[42px] h-[42px] aspect-square text-[#3D8E41]" />
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditMode(true)}>
                <SettingGearIcon className="w-[30px] h-[30px] aspect-square text-black" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="px-[14px] py-[32px]">
        <ul className="space-y-3.5">
          {sideFilterMenuList.map((button, index) => (
            <li key={`sidemenu-button-${index}`}>
              <SideFilterButton isEditMode={isEditMode} button={button} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type SideFilterButtonProps = {
  isEditMode: boolean;
  button: SideFilterMenuButton;
};

export function SideFilterButton(props: SideFilterButtonProps) {
  const { isEditMode, button } = props;

  return (
    <div className="sidemenu-parent">
      <label className="w-full h-[65px] flex items-center justify-between px-[30px] bg-[#F7F7F7] rounded">
        <div className="flex items-center gap-x-1.5 text-[#404040]">
          {isEditMode && (
            <>
              <DragBtnIcon className="w-[30px] h-[30px] aspect-square cursor-move" />
            </>
          )}

          <span className="text-2xl font-medium">{button.title}</span>
        </div>
        <div className="flex items-center gap-x-2.5 text-[#848484]">
          {isEditMode ? (
            <>
              <EditIcon className="w-[25px] h-[25px] aspect-square cursor-pointer" />
              {button.visible ? (
                <>
                  <VisibleIcon className="w-[25px] h-auto cursor-pointer" />
                </>
              ) : (
                <>
                  <HiddenIcon className="w-[25px] h-[25px] aspect-square cursor-pointer" />
                </>
              )}
            </>
          ) : (
            <>{button.childs.length > 0 && <ChevronDownIcon className="chevron-down-icon w-[13px] h-[13px] aspect-square cursor-pointer" />}</>
          )}
        </div>
        <input type="checkbox" disabled={isEditMode} className="hidden" />
      </label>
      {button.childs.length > 0 && (
        <ul className="sidemenu-child-list space-y-3.5">
          {button.childs.map((childButton, chIndex) => (
            <li key={`sidemenu-child-button-${chIndex}`} className={`${!childButton.visible && !isEditMode && "hidden"}`}>
              <Link href={childButton.href} target={childButton.target} className="w-full h-[52px] flex items-center justify-between ps-[50px] pe-[30px]">
                <div className={`flex items-center gap-x-1.5 ${childButton.visible ? "text-[#404040]" : "text-[#CDCDCD]"}`}>
                  {isEditMode && (
                    <>
                      <DragBtnIcon className="w-[30px] h-[30px] aspect-square cursor-move" />
                    </>
                  )}

                  <span className="text-[22px] font-normal">{childButton.title}</span>
                </div>
                <div className="flex items-center gap-x-2.5 text-[#848484]">
                  {isEditMode && (
                    <>
                      <EditIcon className="w-[25px] h-[25px] aspect-square cursor-pointer" />
                      {childButton.visible ? (
                        <>
                          <VisibleIcon className="w-[25px] h-auto cursor-pointer" />
                        </>
                      ) : (
                        <>
                          <HiddenIcon className="w-[25px] h-[25px] aspect-square cursor-pointer" />
                        </>
                      )}
                    </>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
