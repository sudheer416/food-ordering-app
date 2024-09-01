import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Error from "./components/Error";
//import UserComponent from "./TestingComponent/UserComponent.js";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Offers from "./components/Offers";
import Help from "./components/Help";
//import ResturentCard from "./components/ResturentCard";

import ResturentMenu from "./components/ResturentMenu";

const AppBody = () => {
  //const [first, setfirst] = useState({ count: 0, countText: "Zero" });
  return (
    <Provider store={appStore}>
      <Header />
      {/* </><button onChange={()=>setfirst(...first,first.count:first.count+1)}>+</button> */}
      <Outlet />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBody />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturent/:resId",
        element: <ResturentMenu />,
      },
    ],
  },
]);
// [

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
