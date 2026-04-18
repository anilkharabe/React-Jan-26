import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <div className="text-center">
      <h1 >Cart</h1>
      <button className="bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length ===0 && <h3>Cart is empty, Add items to cart.</h3>}
        <div className="w-8/12 m-auto">
            <ItemList items={cartItems} />
        </div>
    </div>
  );
};

export default Cart;
