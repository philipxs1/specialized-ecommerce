import { useState, createContext } from "react";
import { useHeaderVisibility } from "~/hooks/useHeaderVisibility";

interface HeaderContextType {
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContextType>({
  isShowing: true,
  setIsShowing: () => {},
});

interface HeaderProps {
  children: React.ReactNode;
}

const HeaderProvider: React.FC<HeaderProps> = ({ children }) => {
  const [isShowing, setIsShowing] = useState(true);

  useHeaderVisibility({ setIsShowing });

  return (
    <HeaderContext.Provider value={{ isShowing, setIsShowing }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
