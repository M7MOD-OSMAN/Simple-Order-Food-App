import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 20,
  addItem: (items) => {},
  removeItem: (id) => {},
});

export default CartContext;
