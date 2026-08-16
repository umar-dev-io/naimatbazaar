'use client';
import { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeBlogProduct, setActiveBlogProduct] = useState(null);

  const addToCart = (title, grammage, price) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(item => item.title === title && item.grammage === grammage);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].qty += 1;
        return updated;
      } else {
        return [...prevCart, { title, grammage, price, qty: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const updateQty = (index, change) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[index].qty += change;
      if (updated[index].qty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      return updated;
    });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <ShopContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQty,
      totalCartCount,
      openBlog: (product) => setActiveBlogProduct(product),
      activeBlogProduct,
      closeBlog: () => setActiveBlogProduct(null)
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}