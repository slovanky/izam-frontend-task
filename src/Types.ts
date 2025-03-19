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

export type JobType = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  workMode: string;
  categories: string[];
  postedDate: string;
  logoUrl: string;
}