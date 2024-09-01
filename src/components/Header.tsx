import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO } from "../utils/constant.js";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("header in cart item ", cartItems);
  return (
    <div className="flex justify-between  p-1 bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="">
        <img className="w-40" src={LOGO} alt="header-logo" />
      </div>
      <ul className="flex items-center m-4 p-4 ">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="offers">Offers</Link>
        </li>
        {/* <li>Resturents</li> */}
        <li className="px-4">
          <Link to="/cart">Cart-{cartItems.length}</Link>
        </li>
        <li className="px-4">
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
