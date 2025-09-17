import { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getCartTotal: () => void;
};
export const ShoppignCartContext = createContext<CartContextType | null>(null);

export const ShoppinCartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p,
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const getCartTotal = () => {
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <ShoppignCartContext.Provider
      value={{ cartItems, addToCart, clearCart, removeFromCart, getCartTotal }}
    >
      {children}
    </ShoppignCartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(ShoppignCartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
