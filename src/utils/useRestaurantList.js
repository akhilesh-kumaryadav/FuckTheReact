import { useEffect, useState } from "react";

import { RESTAURANT_LIST_URL } from "./constant";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();

    setResList(
      // HERE - value inside this [] array needed to be changes as swiggy changes the API
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return resList;
};

export default useRestaurantList;
