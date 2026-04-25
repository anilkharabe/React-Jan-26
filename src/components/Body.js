import RestaurantCard, { withOfferRestaurant } from "./RestaurantCard";
import { useEffect, useState, useContext, memo } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const RestaurantCardWithOffer = withOfferRestaurant(RestaurantCard);

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const { loggedInUser, setUserInfo } = useContext(UserContext);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const data = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5986763&lng=73.79783479999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      setListOfRestaurants(
        data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredRestaurant(
        data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (error) {
      setIsError(error.message)
    } finally{
      // always execute after try or catch block
      setIsLoading(false)
    }

  };

  if(isLoading) return <Shimmer /> ;

  if(isError) return (
    <h2><Error /></h2>
  )

  return  (
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
              // filter the restuarants cards and update the UI
              // console.log('do filtering on:', searchText)
              const filteredData = listOfRestaurants.filter((currentRes) => {
                return currentRes.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            let filterRes = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.5;
            });

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
        {filteredRestaurant.map((currentRestaurant) => (
          <Link
            key={currentRestaurant.info.id}
            to={"/restaurants/" + currentRestaurant.info.id}
          >
            {/** show higher order component and normal component  */}
            {currentRestaurant.info.aggregatedDiscountInfoV3.header ? (
              <RestaurantCardWithOffer resObj={currentRestaurant} />
            ) : (
              <RestaurantCard resObj={currentRestaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(Body);
