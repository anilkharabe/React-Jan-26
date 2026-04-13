
import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <h2> <Shimmer /></h2>
    }

    const {name, avgRating, costForTwoMessage, cuisines, locality, sla} = resInfo?.data?.data?.cards[2]?.card?.card?.info;
    const {cards} = resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const {itemCards} = cards[2]?.card?.card;
    console.log('itemCards', itemCards)
    
    return (
        <div>
            <h1>{name}</h1>
            <h4>Rating: {avgRating} . {costForTwoMessage}</h4>           
            <h4>{cuisines.join(', ')}</h4>
            <h4>{locality}</h4>
            <h4>{sla.slaString}</h4>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((currentItemCard)=>{
                        return <li key={currentItemCard.card.info.id}>{currentItemCard.card.info.name}: { currentItemCard.card.info.price/100}</li>
                    })
                }
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;