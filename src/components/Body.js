import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/mockData";

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        { resInfoList.map((currentRestaurant) => <RestaurantCard key={currentRestaurant.info.id} resObj = {currentRestaurant}/>)}
      </div>
    </div>
  )
}

export default Body;