import { useEffect, useState, useContext, memo } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Flip me");
  const [loginBtn, setLoginBtn] = useState("Login");

  const {loggedInUser} = useContext(UserContext);
  const cart = useSelector((store)=> store.cart.items);

  // if no dependency array => useEffect is called on every render
  useEffect(()=>{
    console.log('useEffect called with no dependency');
  })

  // if dependecy array is empty => useEffect is called on initial render(Just once)
  useEffect(()=>{
    console.log('useEffect called with empty dependecy array');
  }, [])


    // if dependecy array is [btnName] => useEffect is called on everytime btnName is changing
  useEffect(()=>{
    console.log('useEffect called with  dependecy array');
  }, [btnName])

  return (
    <div className="flex justify-between border-solid items-center">
      <div className="logo-container">
        <img className="w-[170px] ml-3" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex ">
          <li className="list-none p-[15px] m-[15px]"><Link to="/">Home</Link> </li>
          <li className="list-none p-[15px] m-[15px]"><Link to="/about">About</Link><></></li>
          <li className="list-none p-[15px] m-[15px]"><Link to="/grocery">Grocery</Link><></></li>
          <li className="list-none p-[15px] m-[15px]"><Link to="/contact">Contact Us</Link> </li>
          <li className="list-none p-[15px] m-[15px]"><Link to="/cart">Cart ({cart.length})</Link></li>
          <button
            onClick={() => {
              btnName === "Flip me"
                ? setBtnName("Head")
                : setBtnName("Flip me");
            }}
          >
            {btnName}
          </button>
           <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="list-none p-[15px] m-[15px]">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default memo (Header);
