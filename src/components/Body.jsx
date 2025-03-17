import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const resList = useRestaurantList();

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredResList(resList);
  }, [resList]);

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection.
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
    <div className="flex flex-col justify-center">
      <div className="m-4 text-center">Restaurant ads and site offers</div>
      <div className="m-4 px-4 flex justify-center">
        <input
          placeholder="Search for food, restaurant, cuisines"
          className="border-2 mx-2 rounded-sm w-[28ch]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="mx-2 px-4 bg-red-400 rounded-sm"
          onClick={filterByText}
        >
          Search
        </button>
        <button
          className="mx-2 px-4 bg-red-400 rounded-sm"
          onClick={filterByRating}
        >
          Filter by Rating
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredResList?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {!restaurant.info.promoted ? <PromotedRestaurantCard restaurant={restaurant}/> : <RestaurantCard restaurant={restaurant} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
