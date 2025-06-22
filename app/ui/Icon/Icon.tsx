import { User, Search, ShoppingCart, Bookmark, Home } from "react-feather";

const icons = {
  search: Search,
  user: User,
  "book-mark": Bookmark,
  "shopping-cart": ShoppingCart,
  home: Home,
};

const Icon = ({
  id,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  fill = "none",
  ...delegated
}) => {
  const Component = icons[id];

  if (!Component) {
    console.error(
      `Error: No Icon found for ID: "${id}". Please check the 'id' prop.`,
    );
    return null;
  }

  return (
    <div
      className={`inline-block ${delegated.className || ""} /* Merge with any passed in className */`}
      style={{}}
      {...delegated}
    >
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
