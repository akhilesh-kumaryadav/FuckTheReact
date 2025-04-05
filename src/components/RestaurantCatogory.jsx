import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogory = ({ data, showList, setShowIndex }) => {
  const handleShowList = () => {
    setShowIndex();
  };

  return (
    <div
      className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg cursor-pointer"
      onClick={handleShowList}
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showList && <ItemList data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCatogory;
