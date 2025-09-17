import React, { useEffect, useState } from "react";

const CartBadge = ({ count }: { count: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // don't render on server / hydration mismatch

  return count > 0 ? (
    <span className="absolute -top-2 -right-2 rounded-full bg-red-600 px-1.5 py-0.5 text-[8px] font-bold text-white">
      {count}
    </span>
  ) : null;
};

export default CartBadge;
