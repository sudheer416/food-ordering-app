import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
//import MenuListItems from "./MenuItemsCatgory";
import useResMenuList from "../utils/CustomHooks/useResMenuList";
import MenuItemsCatgory from "./MenuItemsCatgory";

const ResturentMenu = () => {
  const [showedIndex, setShowedIndex] = useState(0);
  const handlIndex = (i) => {
    // console.log("handle idnex", i);
    if (showedIndex === i) {
      return setShowedIndex(null);
    }
    setShowedIndex(i);
  };
  //const [listItems, setListItems] = useState([]);
  const { resId } = useParams();
  const resInfo = useResMenuList(resId);
  if (resInfo === null) return <Shimmer />;
  //console.log("fd", resInfo?.data?.cards[2]);
  //console.log(resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  //console.log("des", name);
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  //console.log(itemCards);
  const itemCategory = itemCards.filter(
    (data) =>
      data.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("indexxxx", showedIndex);

  return (
    <div className="text-center">
      <div className="">
        <h1 className="font-extrabold my-3">{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
      </div>
      <h2>Menu</h2>
      {itemCategory.map((category, index) => (
        <MenuItemsCatgory
          key={category.card.card.title}
          data={category.card.card}
          showIndex={index === showedIndex ? true : false}
          setIndex={() => handlIndex(index)}
          curIndex={index}
        />
      ))}
    </div>
  );
};
export default ResturentMenu;
