import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={appRouter} />);
