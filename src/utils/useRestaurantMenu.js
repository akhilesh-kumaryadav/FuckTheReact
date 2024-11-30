import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(`${RESTAURANT_MENU_URL}${resId}`);

    const json = await data.json();

    setResMenu(json);
  };

  return resMenu;
};

export default useRestaurantMenu;
