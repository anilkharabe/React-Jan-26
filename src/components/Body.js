import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = ()=>{

  const [listOfRestaurants, setListOfRestaurants] = useState([]);


  useEffect(()=>{
    fetchData()
  }, []);

  const fetchData =  async()=>{
    const data = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5986763&lng=73.79783479999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    setListOfRestaurants(data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants.length ==  0){
    return <Shimmer />
  }

  return(
    <div className="body">
      <div>
        <div className="m-[15px] p-[15px]">Search</div>
        <button className="btn bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{
          let filterRes = listOfRestaurants.filter((res)=>{
            return res.info.avgRating > 4.5;
          });

          setListOfRestaurants(filterRes)
          
        }}>Top Rated Restaurants</button>

      </div>
      <div className="flex flex-wrap m-[20px]">
        { listOfRestaurants.map((currentRestaurant) => <RestaurantCard key={currentRestaurant.info.id} resObj = {currentRestaurant}/>)}
      </div>
    </div>
  )
}

export default Body;