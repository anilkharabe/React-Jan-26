
import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <h2> <Shimmer /></h2>
    }

    const {name, avgRating, costForTwoMessage, cuisines, locality, sla} = resInfo?.data?.data?.cards[2]?.card?.card?.info;
    const {cards} = resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const {itemCards} = cards[2]?.card?.card;

    const categories = cards.filter((item)=>{
        return item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log('categories', categories)

    
    return (
        <div className='text-center'>
            <h1>{name}</h1>
            <h4>Rating: {avgRating} . {costForTwoMessage}</h4>           
            <h4>{cuisines.join(', ')}</h4>
            <h4>{locality}</h4>
            <h4>{sla.slaString}</h4>

            {categories.map((item)=>{
                return <RestaurantCategory key={item.card.card.title} data = {item.card.card}/>
            })}
        </div>
    )
}

export default RestaurantMenu;