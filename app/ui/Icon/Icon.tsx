import {
  User,
  Search,
  ShoppingCart,
  Bookmark,
  Home,
  X,
  Menu,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  Youtube,
  type IconProps as FeatherIconProps,
} from "react-feather";

import type { ComponentType } from "react";

type IconId =
  | "search"
  | "user"
  | "book-mark"
  | "shopping-cart"
  | "home"
  | "menu"
  | "close"
  | "arrow-right"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "chevron-up"
  | "instagram"
  | "youtube"
  | "facebook";

const icons: Record<IconId, ComponentType<FeatherIconProps>> = {
  search: Search,
  user: User,
  "book-mark": Bookmark,
  "shopping-cart": ShoppingCart,
  home: Home,
  close: X,
  menu: Menu,
  "arrow-right": ArrowRight,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

type IconProps = {
  id: IconId;
  size?: number;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "color">; // Avoid conflict with `color` in div

const Icon = ({
  id,
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
  fill = "none",
  className = "",
  ...delegated
}: IconProps) => {
  const Component = icons[id];

  if (!Component) {
    console.error(`Error: No Icon found for ID: "${id}".`);
    return null;
  }

  return (
    <div className={`${className}`} {...delegated}>
      <Component
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    </div>
  );
};

export default Icon;
