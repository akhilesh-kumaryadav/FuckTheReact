import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const filterByRating = () => {
    const filteredResList = resList.filter((res) => res.info.avgRating > 4.2);
    setResList(filteredResList);
  };

  const fetchData = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const jsonResData = await resData.json();
    console.log(jsonResData);
    setResList(
      jsonResData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (resList.length === 0) {
    return <h1>Loading...</h1>;
  }

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
