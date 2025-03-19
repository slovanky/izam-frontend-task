export type SidebarSubmenuItem = {
  id: string;
  title: string;
  href: string;
  target: string;
  visible: boolean;
};

export type SidebarMenuItem = SidebarSubmenuItem & {
  childs: SidebarSubmenuItem[];
};

export type Job = {
  title: string;
}