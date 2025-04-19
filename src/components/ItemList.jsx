import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span> ₹ - {item.card.info.price}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <button
                  className="p-2 bg-black text-white rounded-2xl shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
