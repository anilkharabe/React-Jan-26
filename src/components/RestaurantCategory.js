import ItemList from "./ItemList";
import {useState} from 'react';

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = ()=>{
        setShowItems(!showItems);
    }
  return (
    <div>
      <div className="res-category mx-auto">
        <div className="shadow flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? <img
            className="w-[20px]"
            src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-18/256/0158.png"
          ></img> : <img
            className="w-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rnH3D-fdAg6Bwxf24b_6uZ7PEsyb6z6szw&s"
          ></img>}
        </div>
        <div>
          {/**Accordian body */}
         {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
