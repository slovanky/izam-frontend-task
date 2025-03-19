"use client";

import { useEffect, useState } from "react";

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis, restrictToParentElement } from "@dnd-kit/modifiers";

import { SidebarMenu } from "./SidebarMenu";
import { BackIcon, CheckIcon, CloseIcon, SettingGearIcon } from "@/components/common/Icons";

import { useSidebarStore } from "@/stores/sidebarStore";
import { fetchSidebarData, updateSidebarData } from "@/utils/sidebar";
import { SidebarMenuItem } from "@/Types";

export default function Sidebar() {
  const { closeSidebar } = useSidebarStore();

  const [sidebarList, setSidebarList] = useState<SidebarMenuItem[]>([]);
  // const [sidebarListFromAPI, setSidebarListFromAPI] = useState<SidebarMenuItem[]>([]);

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  async function loadSidebarData() {
    try {
      setIsLoading(true);
      console.log("Fetching sidebar data...");

      const sidebarData = await fetchSidebarData();
      setSidebarList(sidebarData);
      // setSidebarListFromAPI(sidebarData);

      console.log("Sidebar data:", sidebarData);
    } catch (err: unknown) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadSidebarData();
  }, []);

  const onEditCanceling = () => {
    loadSidebarData();
    setIsEditMode(false);
  };

  const onEditSubmitting = async () => {
    console.log(sidebarList);

    await updateSidebarData(sidebarList);
    loadSidebarData();
    setIsEditMode(false);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setSidebarList((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over?.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="h-[98px] px-[44px] py-[36px] flex items-center border-b border-[#E9E9E9]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Back button */}
            <button onClick={closeSidebar} className="lg:hidden">
              <BackIcon className="w-[15px] h-[15px] aspect-square text-[#161616]" />
            </button>

            <h3 className="text-[17px] lg:text-[25px] text-[#404040] font-medium">Menu</h3>
          </div>

          <div className="flex items-center gap-[9px]">
            {isEditMode ? (
              <>
                {/* Cancel button */}
                <button onClick={() => onEditCanceling()}>
                  <CloseIcon className="shrink-0 h-[34px] lg:h-[42px] aspect-square text-[#ED1F03]" />
                </button>
                {/* Save button */}
                <button onClick={() => onEditSubmitting()}>
                  <CheckIcon className="shrink-0 h-[34px] lg:h-[42px] aspect-square text-[#3D8E41]" />
                </button>
              </>
            ) : (
              // Setting button
              <button
                onClick={() => !isLoading && setIsEditMode(true)}
                className={`transition-main ${!isLoading ? "opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed"}`}
              >
                <SettingGearIcon className="w-[30px] h-[30px] aspect-square text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isLoading ? (
        // Sidebar list
        <div className="px-[14px] py-[32px]">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
            <SortableContext items={sidebarList} strategy={verticalListSortingStrategy}>
              {sidebarList.map((button, index) => (
                <SidebarMenu key={`sidemenu-button-${index}`} isEditMode={isEditMode} button={button} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      ) : (
        // Skeleton loader
        <ul className="px-[14px] py-[32px] space-y-3.5">
          {Array(4)
            .fill(1)
            .map((_n, i) => (
              <li key={`sidebar-skeleton-item-${i}`}>
                <div className="w-full h-[57.5px] lg:h-[72px] block bg-[#F7F7F7] animate-pulse rounded"></div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
