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
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

// chunking
// code splitting
// Dynamic bundling
// lazy loading
// on demand loading

const Grocery = lazy(()=>{
  return import("./components/Grocery")
})

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1><Shimmer /></h1>}> <Grocery /> </Suspense>) ,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<RouterProvider router={appRouter} />); // takes object and convert it into html element
