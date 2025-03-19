import Link from "next/link";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { SideFilterMenuSubitems } from "./SidebarSubmenu";
import { ChevronDownIcon, DragBtnIcon, EditIcon, HiddenIcon, VisibleIcon } from "../common/Icons";

import { SidebarMenuItem } from "@/Types";

type SidebarMenuProps = {
  isEditMode: boolean;
  button: SidebarMenuItem;
};

export function SidebarMenu(props: SidebarMenuProps) {
  const { isEditMode, button } = props;

  const uniqueId = button.id;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: uniqueId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isCursorGrabbing = attributes["aria-pressed"];

  return (
    <div ref={setNodeRef} className="sidemenu-parent mb-3.5" style={style}>
      <label className="w-full flex items-center justify-between gap-3 px-[27px] lg:px-[30px] py-4 lg:py-5 bg-[#F7F7F7] rounded">
        <div className="grow flex items-center gap-x-1.5 text-[#404040]">
          {isEditMode && (
            <>
              <div {...attributes} {...listeners} className={` ${isCursorGrabbing ? "cursor-grabbing" : "cursor-grab"}`} aria-describedby={`DndContext-${uniqueId}`}>
                <DragBtnIcon className="shrink-0 h-5 lg:h-[30px] aspect-square cursor-move" />
              </div>
            </>
          )}

          {isEditMode || button.childs.length > 0 ? (
            <span className="grow text-[17px] lg:text-2xl font-medium">{button.title}</span>
          ) : (
            <Link href={button.href} target={button.target} className="grow text-[17px] lg:text-2xl font-medium">
              {button.title}
            </Link>
          )}
        </div>
        <div className="flex items-center gap-x-2.5 text-[#848484]">
          {isEditMode ? (
            <>
              <EditIcon className="shrink-0 h-5 lg:h-[25px] aspect-square cursor-pointer" />
              {button.visible ? (
                <>
                  <VisibleIcon className="shrink-0 w-5 lg:w-[25px] h-auto cursor-pointer" />
                </>
              ) : (
                <>
                  <HiddenIcon className="shrink-0 h-5 lg:h-[25px] aspect-square cursor-pointer" />
                </>
              )}
            </>
          ) : (
            <>{button.childs.length > 0 && <ChevronDownIcon className="chevron-down-icon w-[13px] h-[13px] aspect-square cursor-pointer" />}</>
          )}
        </div>
        <input type="checkbox" disabled={isEditMode} className="hidden" />
      </label>
      {button.childs.length > 0 && <SideFilterMenuSubitems isEditMode={isEditMode} button={button} />}
    </div>
  );
}
