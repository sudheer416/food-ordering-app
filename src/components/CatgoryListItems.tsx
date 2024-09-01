import { useState } from "react";
import { SWIGGY_IMG_URL } from "../utils/constant.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
const CatgoryListItems = (props) => {
  const { items } = props;
  console.log(addItem);
  //console.log(items);
  //console.log(SWIGGY_IMG_URL + itemData.card.imageId);
  const dispatch = useDispatch();
  // add item into store in items
  const handleStoreItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      {items.map((itemData) => {
        //console.log("image", itemData.card.info.imageId);
        return (
          <div
            className="border-gray-200 border-b-2 flex justify-between py-2 "
            key={itemData.card.info.id}
          >
            <div className=" text-left px-2 w-9/12">
              <h5 className="font-medium">{itemData.card.info?.name}</h5>
              <h6 className="font-medium">
                ₹ {itemData.card.info.price / 100}
              </h6>
              <p className="font-extralight">
                {itemData.card.info.description}
              </p>
            </div>

            <div className="3/12 p-2">
              {itemData.card.info.imageId ? (
                <>
                  <div className="absolute">
                    <button
                      onClick={() => handleStoreItem(itemData)}
                      className="bg-white text-green-600 font-bold p-2 shadow-lg mx-12 "
                    >
                      ADD
                    </button>
                  </div>

                  <img
                    className=" pb-2  "
                    src={SWIGGY_IMG_URL + itemData.card.info.imageId}
                    alt={itemData.card.imageId}
                  />
                </>
              ) : (
                <div className="">
                  <button
                    onClick={() => handleStoreItem(itemData)}
                    className="bg-white text-green-600 font-bold p-2 shadow-lg my-5"
                  >
                    ADD +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CatgoryListItems;
