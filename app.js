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

const resInfoList = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "180419",
            "name": "Kalika Dairy & Sweets",
            "cloudinaryImageId": "pdusjimkp3v2sxsukamo",
            "locality": "Hadapsar",
            "areaName": "Hadapsar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Sweets",
                "Snacks",
                "Street Food",
                "Fast Food",
                "Navratri Special",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "113962",
            "avgRatingString": "4.7",
            "totalRatingsString": "18K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 9.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "9.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 21:15:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹39"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "4.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/kalika-dairy-and-sweets-hadapsar-rest180419",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "434066",
            "name": "Roopali Restaurant - FC Road",
            "cloudinaryImageId": "ngmsdg7jvwbbg1rmxze7",
            "locality": "F.C. Road",
            "areaName": "F.C. Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Beverages"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "261543",
            "avgRatingString": "4.7",
            "totalRatingsString": "7.5K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/roopali-restaurant-fc-road-f-c-road-rest434066",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "576559",
            "name": "Third Wave Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/2e61b949-e196-4969-a481-95d27ca9e2a7_576559.JPG",
            "locality": "Kothrud",
            "areaName": "Kothrud",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Fast Food",
                "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "274773",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.8K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-28 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "1.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/third-wave-coffee-kothrud-rest576559",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "609626",
            "name": "Blue Tokai Coffee Roasters",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/411217e9-581c-40dc-be5a-ec759f30d911_609626.JPG",
            "locality": "Sangamwadi",
            "areaName": "Sangamwadi",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Cafe",
                "Coffee",
                "Beverages"
            ],
            "avgRating": 4.8,
            "parentId": "2682",
            "avgRatingString": "4.8",
            "totalRatingsString": "1.1K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "778"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/blue-tokai-coffee-roasters-sangamwadi-rest609626",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "64313",
            "name": "Bedekar Misal",
            "cloudinaryImageId": "s7iaru1tltotpdqnk8fa",
            "locality": "Narayan Peth",
            "areaName": "Prabhat Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Maharashtrian"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "42915",
            "avgRatingString": "4.7",
            "totalRatingsString": "15K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 18:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "11K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/bedekar-misal-narayan-peth-prabhat-road-rest64313",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "17809",
            "name": "Niranjan Veg Restaurant",
            "cloudinaryImageId": "so4ctxrjbexl20tlx4qh",
            "locality": "shivaji nagar pune",
            "areaName": "Shivaji Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "South Indian",
                "Maharashtrian",
                "Chinese",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "149197",
            "avgRatingString": "4.4",
            "totalRatingsString": "12K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "4.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/niranjan-veg-restaurant-shivaji-nagar-rest17809",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "65657",
            "name": "Santosh Bakery",
            "cloudinaryImageId": "n96b9ibni4es6jeymmdq",
            "areaName": "Shivaji Nagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.7,
            "parentId": "177668",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.8K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 13:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/santosh-bakery-shivaji-nagar-rest65657",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "466867",
            "name": "New Diamond Bakery",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/e0b0738c-7a39-4554-aeec-ff714707b2cd_466867.jpg",
            "locality": "Kondhwa",
            "areaName": "Kondhwa",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "280368",
            "avgRatingString": "4.6",
            "totalRatingsString": "2.9K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 8.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "8.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-03-27 21:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹39"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "52"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-a5efd807-9cf7-4fc2-ba8e-c59a7e82aeda"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/pune/new-diamond-bakery-kondhwa-rest466867",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const RestaurantCard =(props)=>{
  const styleCard = { backgroundColor: '#E6E6E6'}
  const {name, cloudinaryImageId, avgRating, cuisines, areaName, sla } = props?.resObj?.info;
  return(
        <div className="res-card" style={styleCard}>
          <img className="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{avgRating} Stars</h4>
          <h4>{sla?.slaString}</h4>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{areaName}</h4>
        </div>
  )
}

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        { resInfoList.map((currentRestaurant) => <RestaurantCard key={currentRestaurant.info.id} resObj = {currentRestaurant}/>)}
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
