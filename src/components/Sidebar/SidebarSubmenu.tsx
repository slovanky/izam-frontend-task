import { useEffect, useState } from "react";
import Link from "next/link";

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis, restrictToParentElement } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";

import { DragBtnIcon, EditIcon, HiddenIcon, VisibleIcon } from "../common/Icons";
import { SidebarMenuItem, SidebarSubmenuItem } from "@/Types";

type SidebarMenuProps = {
  isEditMode: boolean;
  button: SidebarMenuItem;
};

export function SideFilterMenuSubitems(props: SidebarMenuProps) {
  const { isEditMode, button } = props;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [items, setItems] = useState<SidebarSubmenuItem[]>(button.childs);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over?.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="sidemenu-child-list space-y-3.5">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
        <SortableContext items={button.childs} strategy={verticalListSortingStrategy}>
          {items.map((childButton, chIndex) => (
            <SubmenuItem key={`sidemenu-child-button-${chIndex}`} isEditMode={isEditMode} childButton={childButton} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

type SubmenuItemProps = {
  isEditMode: boolean;
  childButton: SidebarSubmenuItem;
};

export function SubmenuItem(props: SubmenuItemProps) {
  const { isEditMode, childButton } = props;

  const uniqueId = childButton.id;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: uniqueId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isCursorGrabbing = attributes["aria-pressed"];

  return (
    <div
      ref={setNodeRef}
      className={`w-full flex items-center justify-between ps-[40px] lg:ps-[50px] pe-[27px] lg:pe-[30px] py-3.5 ${!childButton.visible && !isEditMode && "hidden"}`}
      style={style}
    >
      <div className={`flex items-center gap-x-1.5 ${childButton.visible ? "text-[#404040]" : "text-[#CDCDCD]"}`}>
        {isEditMode ? (
          <>
            <div {...attributes} {...listeners} className={` ${isCursorGrabbing ? "cursor-grabbing" : "cursor-grab"}`} aria-describedby={`DndContext-${uniqueId}`}>
              <DragBtnIcon className="shrink-0 h-5 lg:h-[30px] aspect-square cursor-pointer" />
            </div>

            <div className="text-[17px] lg:text-[22px] font-normal">{childButton.title}</div>
          </>
        ) : (
          <Link href={childButton.href} target={childButton.target} className="text-[17px] lg:text-[22px] font-normal">
            {childButton.title}
          </Link>
        )}
      </div>
      <div className="flex items-center gap-x-2.5 text-[#848484]">
        {isEditMode && (
          <>
            <EditIcon className="shrink-0 h-5 lg:h-[25px] aspect-square cursor-pointer" />
            {childButton.visible ? (
              <>
                <VisibleIcon className="shrink-0 w-5 lg:w-[25px] h-auto cursor-pointer" />
              </>
            ) : (
              <>
                <HiddenIcon className="shrink-0 h-5 lg:h-[25px] aspect-square cursor-pointer" />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
