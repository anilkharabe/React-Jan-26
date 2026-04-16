import { useContext } from "react";
import { RES_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard =(props)=>{
  const styleCard = { backgroundColor: '#E6E6E6'}
  const {name, cloudinaryImageId, avgRating, cuisines, areaName, sla } = props?.resObj?.info;
  const {loggedInUser} = useContext(UserContext);
  return(
        <div className="border-solid w-[200px] m-[15px]" style={styleCard}>
          <img className="w-[100%]" src={RES_URL + cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{avgRating} Stars</h4>
          <h4>{sla?.slaString}</h4>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{areaName}</h4>
          <h4>{loggedInUser}</h4>
        </div>
  )
}

// Higher Order Component

// input : RestaurantCard => Process/Enhance =>RestaurantCardWitOffer(output)
 
export const withOfferRestaurant = (RestaurantCard)=>{
  return (props)=>{
    const {header, subHeader} = props.resObj.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="offer-card">{header} {subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;