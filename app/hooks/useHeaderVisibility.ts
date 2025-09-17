import { useEffect, useState } from "react";

export function useHeaderVisibility({
  setIsShowing,
}: {
  setIsShowing: (value: boolean) => void;
}) {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollBoundery = 50;

      if (currentScrollY >= scrollBoundery) {
        setLastScrollY(currentScrollY);
        return;
      }
      if (currentScrollY > lastScrollY) {
        setIsShowing(true);
        setLastScrollY(currentScrollY);
        return;
      } else if (currentScrollY < currentScrollY) {
        setIsShowing(false);
        return;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
