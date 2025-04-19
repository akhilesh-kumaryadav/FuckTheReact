import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length ? (
        <button
          className="bg-red-500 font-bold m-2 p-2 rounded-2xl"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      ) : (
        <h1>Please items to the cart.</h1>
      )}

      <div className="w-6/12 m-auto">
        <ItemList data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
