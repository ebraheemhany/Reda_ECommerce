import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // useState to Add product in cart  and save in localStroge
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItem = localStorage.getItem("cartItems");
    return savedCartItem ? JSON.parse(savedCartItem) : [];
  });

  const AddtoCart = (item) => {
    setCartItems((preve) => [...preve, item]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // useState to faforet item and save in localStroge
  const [itemFaforet, setItemFaforet] = useState(() => {
    const Savedfaforet = localStorage.getItem("fafotrets");
    return Savedfaforet ? JSON.parse(Savedfaforet) : [];
  });
  const AddTofaforet = (ele) => {
    setItemFaforet((prev) => [...prev, ele]);
  };
  useEffect(() => {
    localStorage.setItem("fafotrets", JSON.stringify(itemFaforet));
  }, [itemFaforet]);

// remove element from cartPage
const removeItemFromCart = (id) => {
const reomveItemFromCart = cartItems.filter((ele) => ele.id !== id);
setCartItems(reomveItemFromCart)
}
 
// remove element from fafortPage
const removeItemFromFofaret = (id) => {
const removefromFaforet = itemFaforet.filter((ele) => ele.id !== id);
setItemFaforet(removefromFaforet)

}


  return (
    <CartContext.Provider
      value={{ cartItems, AddtoCart, AddTofaforet, itemFaforet ,removeItemFromCart, removeItemFromFofaret  }}
    >
      {children}
    </CartContext.Provider>
  );
};
