import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { RES_URL } from "../utils/constant";
import { memo } from "react";
const ItemList = ({ items }) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b item-list flex justify-between"
        >
        
          <div className="w-9/12 text-left">
            <div>
              <span> {item.card.info.name} </span>
              <span> ₹{item.card.info.price / 100} </span>
            </div>
            <div>
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="bg-black text-white" onClick={()=> handleAddItem(item)}>
                Add +
              </button>
            </div>
            {item.card.info.imageId && (
              <img src={RES_URL + item.card.info.imageId} className="w-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default memo (ItemList);
