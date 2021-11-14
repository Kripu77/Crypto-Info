import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useLoginContext } from "../context/LoginInContext";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};


const Carousel = () =>{ 
    
    
    
   const {data}= useLoginContext();
   const image = data.map((items)=>{

    const{id, name, image, market_data }= items;
    
    const {current_price} = market_data;
    console.log(items)
    return <div key={id} className="text-center"> 
    <img src={image.large?image.large:{image}} alt={name} className="h-16 mt-20"/>
    <h1 className="mr-20">{name}</h1>
    <p className="text-green-400">${current_price.aud}</p>
    </div>
   })

   
    
   return (
    
  <AliceCarousel
    autoPlay
    autoPlayControls={false}
    autoPlayStrategy="none"
    autoPlayInterval={2000}
    animationDuration={3000}
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
