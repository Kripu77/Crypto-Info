import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useLoginContext } from "../context/LoginInContext";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1069:{items:4}, 1380:{
      items:5
  },
  1560:{
      items:6
  }
  , 1600:{
      items:7
  }
};


const Carousel = () =>{ 
    
    
    
   const {data}= useLoginContext();
   
   const image = data.map((items)=>{

    const{id, name, image, market_data }= items;
    
    const {current_price} = market_data;
  
    return (
      <div key={id} className="table ml-auto mr-auto">
        <img
          src={image.large}
          alt={name}
          className=" mt-20 w-20 cursor-pointer"
        />
        <h1>
          {name} <br />
          <span className="text-green-200">${current_price.aud}</span>
        </h1>
      </div>
    );
   })

   
    
   return (
    
  <AliceCarousel
    autoPlay
    autoPlayControls={false}
    autoPlayStrategy="none"
    autoPlayInterval={10}
    animationDuration={5000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls={true}
    disableButtonsControls={true}
    items={image}
    responsive={responsive}
    controlsStrategy="alternate"
  />
)};
export default Carousel;
