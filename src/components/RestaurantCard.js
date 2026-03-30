import { RES_URL } from "../utils/constant";
const RestaurantCard =(props)=>{
  const styleCard = { backgroundColor: '#E6E6E6'}
  const {name, cloudinaryImageId, avgRating, cuisines, areaName, sla } = props?.resObj?.info;
  return(
        <div className="res-card" style={styleCard}>
          <img className="res-logo" src={RES_URL + cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{avgRating} Stars</h4>
          <h4>{sla?.slaString}</h4>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{areaName}</h4>
        </div>
  )
}

export default RestaurantCard;