import React from "react";
import "./SlideHero.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerHero1 from "../../image/img/banner_hero1.jpg";
import bannerHero2 from "../../image/img/banner_hero2.jpg";
import bannerHero3 from "../../image/img/banner_hero3.jpg";
export const SliderHero = () => {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]


  };

  return (
    <div className="slider_hero">
      <div className="container">
        <Slider {...settings}>
          <div className="slide_parent">
            <div className="slid_content">
              <h4>introducing the new</h4>
              <h3>microsoft xbox</h3>
              <h3>360 Counter</h3>
              <p>Windows Xp/10/7 , Tv Box</p>
              <button>Shop Now</button>
            </div>
            <img src={bannerHero1} alt="" />
          </div>

          {/* //////////// */}

          <div className="slide_parent">
            <div className="slid_content">
              <h4>introducing the new</h4>
              <h3>microsoft XBox</h3>
              <p>Windows Xp/10/7 , Tv Box</p>
              <button>Shop Now</button>
            </div>
            <img src={bannerHero2} alt="" />
          </div>

          {/* ///////////// */}

          <div className="slide_parent">
            <div className="slid_content">
              <h4>introducing the new</h4>
              <h3>microsoft xbox</h3>
              <p>Windows Xp/10/7 , Tv Box</p>
              <button className="btn">Shop Now</button>
            </div>
            <img src={bannerHero3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
