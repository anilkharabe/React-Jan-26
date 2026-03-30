import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/mockData";

const Body = ()=>{
  return(
    <div className="body">
      <div className="m-[15px] p-[15px]">Search</div>
      <div className="flex flex-wrap m-[20px]">
        { resInfoList.map((currentRestaurant) => <RestaurantCard key={currentRestaurant.info.id} resObj = {currentRestaurant}/>)}
      </div>
    </div>
  )
}

export default Body;