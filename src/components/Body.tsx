import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useGetResturaents from "../utils/CustomHooks/useGetResturaents.jsx";
import { SWIGGY_RES_LINK } from "../utils/constant.js";

import Shimmer from "./Shimmer";
import ResturentCard from "./ResturentCard";

const Body = () => {
  //const restuarantsList = useGetResturaents();
  const [restuarantsList, setRestaurantMenuList] = useState([]);
  const [filterlist, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log(" body fetching..");

    //fetchingAPi();
    gettingRestuarantsList();
    console.log(restuarantsList);
  }, []);

  const filterTopRated = () => {
    console.log("testing filter");
    const filterResturents = restuarantsList.filter((data) => {
      //console.log(data, "filter");
      if (data.avgRating > 4) {
        return data;
      }
    });
    //console.log("fileting", filterResturents);
    setRestuarantsList(filterResturents);
  };

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
    setRestaurantMenuList(responseData);
    setFilterList(responseData);
  };

  return restuarantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="">
        <div className="filter flex p-2">
          <input
            type="search"
            placeholder="search your favourite resturent"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-solid border-black rounded m-4"
          />
          <button
            onClick={() => {
              const searchList = restuarantsList.filter((data) => {
                if (data.name.toLowerCase().includes(searchText)) {
                  return data;
                }
              });
              console.log("seraching....", searchList);
              setFilterList(searchList);
            }}
            className="bg-green-100 rounded-lg p-2 mt-2 mb-2"
          >
            Search
          </button>
        </div>
        {/* <button onClick={filterTopRated}>top rated Resturaent</button> */}
        <div className="flex flex-wrap">
          {filterlist.map((data) => {
            return (
              <Link to={"/resturent/" + data.id}>
                <ResturentCard key={data.id} data={data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
