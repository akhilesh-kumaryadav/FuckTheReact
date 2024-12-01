import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const resList = useRestaurantList();

  useEffect(() => {
    setFilteredResList(resList);
  }, [resList]);

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  const filterByRating = () => {
    const filResList = resList.filter((res) => res.info.avgRating > 4.2);
    setFilteredResList(filResList);
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
