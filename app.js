import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Bar
 *      - Home
 *      -About
 *      -contact us
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *    - RestaurantCard
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Link
 *  - Address
 */

const Header = ()=>{
  return(
    <div className="header">
      <div className='logo-container'>
          <img className="logo" src="https://assets.designhill.com/design-blog/wp-content/uploads/2024/06/1.jpg"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>
              Home
          </li>
          <li>
              About
          </li>
          <li>
              Contact Us
          </li>
          <li>
              Cart
          </li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard =(props)=>{

  console.log('props', props)
  const styleCard = { backgroundColor: '#E6E6E6'}
  const {resName, imgLink, coisine, rating, deliveryTime} = props;
  return(
        <div className="res-card" style={styleCard}>
          <img className="res-logo" src={imgLink}></img>
          <h3>{resName}</h3>
          <h4>{rating} Stars</h4>
          <h4>{deliveryTime} Minutes</h4>
          <h4>{coisine}</h4>
        </div>
  )
}

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName = "Roopali Restaurant" coisine='South Indian, North Indian' rating='4.5' deliveryTime='30'  imgLink='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ngmsdg7jvwbbg1rmxze7'/>
        <RestaurantCard resName = "Blue Tokai Coffee Roasters" coisine='Cafe, Coffee, Beverages' rating='4.6' deliveryTime='20' imgLink='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/241c2ef1-56b0-4eab-bd77-983f1a1a084c_590695.JPG'/>
      </div>
    </div>
  )
}

const AppLayout =()=>{
  return(
    <div>
      <Header />
      <Body />
    </div>
  )
}



const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />); // takes object and convert it into html element
