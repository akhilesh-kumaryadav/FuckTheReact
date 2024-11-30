import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length < 1) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
    resMenu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="restuarant-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>Menu</p>
      <ul>
        {itemCards?.map((item) => (
          <li>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
