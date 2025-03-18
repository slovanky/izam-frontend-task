"use client";

import { useEffect, useState } from "react";

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis, restrictToParentElement } from "@dnd-kit/modifiers";

import { SSidebarMenu } from "./SidebarMenu";
import { BackIcon, CheckIcon, CloseIcon, SettingGearIcon } from "@/components/common/Icons";
import { SidebarMenuItem } from "@/Types";

import { useSidebarStore } from "@/stores/sidebarStore";

export default function Sidebar() {
  const { closeSidebar } = useSidebarStore();

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const sideFilterMenuList: SidebarMenuItem[] = [
    {
      id: "1",
      title: "Dashboard",
      href: "/",
      target: "",
      visible: true,
      childs: [],
    },

    {
      id: "2",
      title: "Job Application",
      href: "/",
      target: "",
      visible: true,
      childs: [
        {
          id: "123",
          title: "John Doe",
          href: "/",
          target: "",
          visible: true,
        },
        {
          id: "124",
          title: "James Bond",
          href: "/",
          target: "",
          visible: true,
        },
        {
          id: "125",
          title: "Scarlet Joe",
          href: "/",
          target: "",
          visible: false,
        },
      ],
    },

    {
      id: "3",
      title: "Qualifications",
      href: "/",
      target: "",
      visible: true,
      childs: [
        {
          id: "126",
          title: "Child 1",
          href: "/",
          target: "",
          visible: true,
        },
        {
          id: "127",
          title: "Child 2",
          href: "/",
          target: "",
          visible: true,
        },
      ],
    },

    {
      id: "4",
      title: "About",
      href: "/",
      target: "",
      visible: true,
      childs: [],
    },

    {
      id: "5",
      title: "Contact",
      href: "/",
      target: "",
      visible: true,
      childs: [],
    },
  ];

  const [items, setItems] = useState<SidebarMenuItem[]>(sideFilterMenuList);

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
    <div className="w-full h-full flex flex-col bg-white">
      <div className="h-[98px] px-[44px] py-[36px] flex items-center border-b border-[#E9E9E9]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={closeSidebar} className="lg:hidden">
              <BackIcon className="w-[15px] h-[15px] aspect-square text-[#161616]" />
            </button>
            <h3 className="text-[17px] lg:text-[25px] text-[#404040] font-medium">Menu</h3>
          </div>

          <div className="flex items-center gap-[9px]">
            {isEditMode ? (
              <>
                <button onClick={() => setIsEditMode(false)}>
                  <CloseIcon className="shrink-0 h-[34px] lg:h-[42px] aspect-square text-[#ED1F03]" />
                </button>
                <button onClick={() => setIsEditMode(false)}>
                  <CheckIcon className="shrink-0 h-[34px] lg:h-[42px] aspect-square text-[#3D8E41]" />
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
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
          <SortableContext items={sideFilterMenuList} strategy={verticalListSortingStrategy}>
            {items.map((button, index) => (
              <SSidebarMenu key={`sidemenu-button-${index}`} isEditMode={isEditMode} button={button} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
