import {
  BookOpen,
  CalendarDays,
  Cpu,
  Monitor,
  Ticket,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cpu, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "media", path: "/media", icon: Video, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
