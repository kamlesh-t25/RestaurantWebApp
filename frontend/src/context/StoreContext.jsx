import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState("");
  const url = "http://localhost:4000";

  const addToCart = async (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));

    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
  }

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Failed to load cart data", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
      } catch (error) {
        console.error("Failed to fetch food list", error);
      }
    }

    fetchData();
    console.log(foodList);
  }, []);

  const getTotalCost = () => {
    if (!foodList || !cartItems) {
      return 0;
    }

    return foodList.reduce((total, item) => {
      const itemCount = cartItems[item._id] || 0;
      return total + (itemCount * item.price);
    }, 0);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      loadCartData(savedToken);
    }
  }, []);

  const removeFromCart = async (itemId) => {
    setCartItems(prev => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }
      return newCartItems;
    });

    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  }

  const contextValue = {
    food_list: foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCost,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
