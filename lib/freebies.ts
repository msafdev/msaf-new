import {
  ArrowRight,
  CircleHelp,
  ClipboardCheck,
  PiggyBank,
} from "lucide-react";
import { ElementType } from "react";

interface SidebarSub {
  name: string;
  href: string;
  icon?: ElementType;
}

interface SidebarGen {
  name: string;
  href: string;
  icon?: ElementType;
}

interface SidebarSubItems {
  name: string;
  subItems: SidebarSub[];
}

interface SidebarGenItems {
  name: string;
  generalItems: SidebarGen[];
}

const SidebarGeneralItems: SidebarGenItems[] = [
  {
    name: "Getting Started",
    generalItems: [
      {
        name: "Introduction",
        icon: ClipboardCheck,
        href: "",
      },
      {
        name: "Usage",
        icon: CircleHelp,
        href: "usage",
      },
      {
        name: "Donate",
        icon: PiggyBank,
        href: "donate",
      },
    ],
  },
];

const SidebarItems: SidebarSubItems[] = [
  {
    name: "Components",
    subItems: [
      {
        name: "Button",
        icon: ArrowRight,
        href: "button",
      },
      {
        name: "Badge",
        icon: ArrowRight,
        href: "badge",
      },
      {
        name: "Card",
        icon: ArrowRight,
        href: "card",
      },
      {
        name: "Input",
        icon: ArrowRight,
        href: "input",
      },
      {
        name: "Profile",
        icon: ArrowRight,
        href: "profile",
      },
    ],
  },
  {
    name: "Layouts",
    subItems: [
      {
        name: "Typography",
        icon: ArrowRight,
        href: "typography",
      },
      {
        name: "Gallery",
        icon: ArrowRight,
        href: "gallery",
      },
      {
        name: "Hero",
        icon: ArrowRight,
        href: "hero",
      },
      {
        name: "Portfolio",
        icon: ArrowRight,
        href: "portfolio",
      },
    ],
  },
];

export { SidebarItems, SidebarGeneralItems };
