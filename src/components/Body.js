import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{

  // let listOfRestaurants = resInfoList;
  const [listOfRestaurants,setListOfRestaurants] = useState(resInfoList);

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
        {console.log('re-rendering body component')}
        { listOfRestaurants.map((currentRestaurant) => <RestaurantCard key={currentRestaurant.info.id} resObj = {currentRestaurant}/>)}
      </div>
    </div>
  )
}

export default Body;