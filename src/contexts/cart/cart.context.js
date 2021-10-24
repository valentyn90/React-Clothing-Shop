import { createContext } from 'react';

const CartContext = createContext({
  hidden: true,
  // cartItems: [],
  toggleHidden: () => {},
});

export default CartContext;
