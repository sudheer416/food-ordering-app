import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../constant";

const useResMenuList = (resId) => {
  // const { resId } = props;
  const [resInfo, setInfo] = useState(null);

  console.log("chilfddres");
  useEffect(() => {
    getRestaurantMenuList();
  }, []);

  const getRestaurantMenuList = async () => {
    try {
      const getMenu = await fetch(RES_MENU_URL + resId);
      const menuList = await getMenu.json();
      setInfo(menuList);

      //console.log(getListItem);
      //console.log("state", restaurantMenuList);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};

export default useResMenuList;
