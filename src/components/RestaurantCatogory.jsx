import ItemList from "./ItemList";

const RestaurantCatogory = ({ data }) => {
  //   console.log("catogory - ", data);
  return (
    // <div>
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <ItemList data={data.itemCards} />
    </div>
    // </div>
  );
};

export default RestaurantCatogory;
