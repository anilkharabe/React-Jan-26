import RestaurantCard, { withOfferRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext, memo } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useQuery } from "@tanstack/react-query";

const RestaurantCardWithOffer = withOfferRestaurant(RestaurantCard);

// 🔹 API function
const fetchRestaurants = async () => {
  const { data } = await axios.get(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5986763&lng=73.79783479999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  return (
    data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || []
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  // 🔹 React Query
  const {
    data: listOfRestaurants = [],
    isLoading,
    isError,
    error,
    isFetching
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
    // refetchInterval: 2000,
  });

  console.log('isLoading', isLoading);
  console.log('isFetching', isFetching);

  // 🔹 Sync filtered data when API data loads
  useEffect(() => {
    if (listOfRestaurants.length && filteredRestaurant.length === 0) {
      setFilteredRestaurant(listOfRestaurants);
    }
  }, [listOfRestaurants]);

  // 🔹 Loading state
  if (isLoading) return <Shimmer />;

  // 🔹 Error state
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className="body my-[20px]">
      <div className="filter flex">
        <div className="m-[15px] p-[15px]">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="btn bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            const filterRes = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="m-[15px] p-[15px]">
          <label>UserName:</label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap m-[20px]">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardWithOffer resObj={restaurant} />
            ) : (
              <RestaurantCard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(Body);