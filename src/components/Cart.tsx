import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import CartListItems from "./CartListItems.js";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const getTotalCartValue = () => {
    let total = 0;
    for (let item of cartItems) {
      total += (item.quantity * item.info.info.price) / 100;
    }
    setTotalCartValue(total);
  };

  useEffect(() => {
    getTotalCartValue();
  });

  return (
    <div className=" text-center  mx-auto w-6/12 my-4 py-3">
      <div className="flex justify-between">
        <h1 className=" font-bold ">Cart</h1>
        <button
          onClick={() => dispatch(clearCart())}
          className=" bg-black  text-white rounded-lg  p-3"
        >
          clear Cart
        </button>
      </div>
      <div>
        <CartListItems items={cartItems} />
        <h3 className="my-10  p-3 font-extrabold">
          total cart value:{totalCartValue}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
