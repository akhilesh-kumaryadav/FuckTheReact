import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);

  const filterByRating = () => {
    const filteredResList = resList.filter((res) => res.info.avgRating > 4.2);
    setResList(filteredResList);
  };

  return (
    <div className="body">
      <div className="ads">Restaurant ads and site offers</div>
      <div className="search-bar">Search Bar</div>
      <div className="filter-by-rating">
        <button onClick={filterByRating}>Filter by Rating</button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
