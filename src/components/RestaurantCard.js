import { RES_URL } from "../utils/constant";
import { memo } from "react";

const RestaurantCard =(props)=>{
  const styleCard = { backgroundColor: '#E6E6E6'}
  const {name, cloudinaryImageId, avgRating, cuisines, areaName, sla } = props?.resObj?.info;
  return(
        <div className="border-solid w-[200px] m-[15px]" style={styleCard}>
          <img className="w-[100%]" src={RES_URL + cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{avgRating} Stars</h4>
          <h4>{sla?.slaString}</h4>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{areaName}</h4>
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

export default memo(RestaurantCard);