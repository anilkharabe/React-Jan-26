import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
  let [listOfRestaurantsWithState, setListOfRestaurantsWithState ] = useState(resInfoList)

  let listOfRestaurants = resInfoList;


  return(
    <div className="body">
      <div>
        <div className="m-[15px] p-[15px]">Search</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{
          listOfRestaurantsWithState = listOfRestaurantsWithState.filter((res)=>{
            return res.info.avgRating > 4.5;
          });
          setListOfRestaurantsWithState(listOfRestaurantsWithState)
          
        }}>Top Rated Restaurants</button>

      </div>
      <div className="flex flex-wrap m-[20px]">
        { listOfRestaurantsWithState.map((currentRestaurant) => <RestaurantCard key={currentRestaurant.info.id} resObj = {currentRestaurant}/>)}
      </div>
    </div>
  )
}

export default Body;