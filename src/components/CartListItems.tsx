import React from "react";

const CartListItems = (props) => {
  const { items } = props;
  console.log("cartList items in ", items);
  if (items.length === 0) {
    return <h2> Please add items into the cart!</h2>;
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className=" flex border-black-100  border-b-8 py-3 justify-between"
          >
            <h1 className=" font-medium">{item.info.info.name}</h1>
            <h2>{item.quantity}</h2>
            <h2>{(item.quantity * item.info.info.price) / 100}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CartListItems;
