import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import UseStateHook from "./PoC/hooks/UseStateHook";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import "./styles.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";
import BodyQr from "./components/BodyQr";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// chunking
// code splitting
// Dynamic bundling
// lazy loading
// on demand loading

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  const queryClient = new QueryClient();
  // fake authentication
  useEffect(() => {
    // consider we are making http call for login and getting use information

    const data = {
      loggedInUser: "Aniruddha",
    };

    setUserInfo(data.loggedInUser);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
          <div>
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/bodyqr",
        element: <BodyQr />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <h1>
                <Shimmer />
              </h1>
            }
          >
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={appRouter} />); // takes object and convert it into html element
