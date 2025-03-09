import { CDN_URL } from "../utils/constant";

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
    </div>
  );
};

export default RestaurantCard;
