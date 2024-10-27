import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props.restaurant.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="restautrant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.deliveryTime} min</h5>
      <h5>{costForTwo} </h5>
    </div>
  );
};

export default RestaurantCard;
