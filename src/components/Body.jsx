import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constant";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const filterByRating = () => {
    const filResList = resList.filter((res) => res.info.avgRating > 4.2);
    setFilteredResList(filResList);
  };

  const fetchData = async () => {
    const resData = await fetch(RESTAURANT_LIST_URL);
    const jsonResData = await resData.json();

    setResList(
      // HERE - value inside this [] array needed to be changes as swiggy changes the API
      jsonResData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setFilteredResList(
      jsonResData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const filterByText = () => {
    const filteredByText = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredResList(filteredByText);
  };

  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="ads">Restaurant ads and site offers</div>
      <div className="search-container">
        <div className="search-bar">
          <input
            placeholder="Search for food, restaurant, cuisines"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={filterByText}>Search</button>
        </div>
        <div className="filter-by-rating">
          <button onClick={filterByRating}>Filter by Rating</button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredResList?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
