import React from 'react'
import "./ProductSlide.css"
import {CartSlide} from "../Utiliiy/CartSlide/CartSlide.jsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const ProductSlide = ({title ,data}) => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <div className='product_slide'>
          <div className='container'>
          <div className="top_slide">
        <h2>{title}</h2>
      </div>
       
      <Slider {...settings}>
       {
data.map((ele , idx) => {
  return(
    <CartSlide key={idx} data={ele}  />
  )
})

       }
           
           </Slider>
          
                 
        </div>
    </div>
  
  )
}
