import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props.restaurant.info;
  return (
    <div className="m-4 p-4 w-75 bg-gray-200 rounded-lg">
      <img
        className="rounded-2xl"
        alt="restautrant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.deliveryTime} min</h5>
      <h5>{costForTwo} </h5>
      <h5>
        <UserContext.Consumer>
          {(user) => <div className="font-bold">{user.loggedInUser}</div>}
        </UserContext.Consumer>
      </h5>
    </div>
  );
};

// higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (restaurant) => {
    return (
      <div>
        <div className="absolute mx-4 p-3 bg-black text-white rounded-2xl">
          Promoted
        </div>
        <RestaurantCard {...restaurant} />
      </div>
    );
  };
};

export default RestaurantCard;
