import { useState } from "react";
import CatgoryListItems from "./CatgoryListItems";

const MenuItemsCatgory = (props) => {
  //const [showItemList, setShowItemList] = useState(false);
  const { data, showIndex, setIndex } = props;
  const handleClick = () => {
    //console.log("set menu list in child");
    setIndex();
  };
  //console.log("setindex", curIndex);
  const { title, itemCards } = data;

  return (
    // HEader
    <div className="w-6/12 mx-auto my-4 text-lg bg-gray-50 px-2 shadow-lg  cursor-pointer border-b-5 rounded-md">
      <div className=" " onClick={handleClick}>
        <div>
          <div className="flex justify-between text-lg">
            <span className="font-bold text-lg">
              {title}({itemCards.length})
            </span>
            {showIndex ? <span>🔼</span> : <span>🔽</span>}
          </div>
        </div>
      </div>
      <div>{showIndex && <CatgoryListItems items={itemCards} />}</div>
    </div>
  );
};

export default MenuItemsCatgory;
