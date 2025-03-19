"use client";

import { useEffect, useState } from "react";

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis, restrictToParentElement } from "@dnd-kit/modifiers";

import { SSidebarMenu } from "./SidebarMenu";
import { BackIcon, CheckIcon, CloseIcon, SettingGearIcon } from "@/components/common/Icons";
import { SidebarMenuItem } from "@/Types";

import { useSidebarStore } from "@/stores/sidebarStore";

import { fetchSidebarData } from "@/utils/sidebar";

export default function Sidebar() {
  const { closeSidebar } = useSidebarStore();

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [items, setItems] = useState<SidebarMenuItem[]>([]);

  // const [data, setData] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // setLoading(true);
        // setError(null);
        console.log("Fetching sidebar data...");

        // Then try the utility function
        const sidebarData = await fetchSidebarData();
        setItems(sidebarData);

        console.log("Sidebar data:", sidebarData);

        // setData(sidebarData);
      } catch (err: unknown) {
        console.error("Error:", err);
        // setError(err.message || "Unknown error");
      } finally {
        // setLoading(false);
      }
    }

    loadData();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((button, index) => (
              <SSidebarMenu key={`sidemenu-button-${index}`} isEditMode={isEditMode} button={button} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
