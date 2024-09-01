import { useState, useEffect } from "react";
import { SWIGGY_RES_LINK } from "../constant";
import { json } from "react-router-dom";

const useGetResturaents = () => {
  const [restuarantsList, setRestuarants] = useState([]);

  useEffect(() => {
    gettingRestuarantsList();
    console.log("hook useEffect");
  }, []);
  const gettingRestuarantsList = async () => {
    const url = SWIGGY_RES_LINK;

    const fetchData = await fetch(url);
    const jsonData = await fetchData.json();
    //console.log("hooks", jsonData.data);
    const resList = jsonData.data.cards;

    const responseData = [];
    for (let i = 3; i < resList.length; i++) {
      responseData.push(resList[i].card.card.info);
    }
    setRestuarants(responseData);
  };

  return restuarantsList;
};

export default useGetResturaents;
