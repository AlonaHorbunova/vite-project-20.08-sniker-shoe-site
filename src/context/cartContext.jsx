import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  async function fetchCartItems() {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
