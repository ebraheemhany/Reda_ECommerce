import React, { useContext } from "react";
import { CartContext } from "../../Component/Context/CartContext";
import "./FaforetProductPage.css";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Animation } from "../../Component/Utiliiy/page_Animation/Animation";
export const FaforetProductPage = () => {
  const { removeItemFromFofaret, itemFaforet } = useContext(CartContext);

  return (
    <Animation>
      <div className="faforet_product">
         <div className="container">
                 {itemFaforet.length === 0 ? (
          <p className="faforet_page">Faforet Page is Empety</p>
        ) : (
          ""
        )}

        <div className="parent_faforet">
          {itemFaforet.length === 0
            ? ""
            : itemFaforet.map((ele, idx) => {
                return (
                  <div key={idx} className="faforet_item">
                    <Link to={`/products/${ele.id}`} className="cart_slide">
                      <div className="cart_img">
                        <img src={ele.images[0]} alt="img" />
                      </div>
                      <h4>{ele.title}</h4>
                    </Link>
                    <div className="cart_star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <p className="cart_price">
                      ${ele.price}
                      <RiDeleteBin2Line
                        onClick={() => removeItemFromFofaret(ele.id)}
                      />
                    </p>

                    <div className="cart_icons"></div>
                  </div>
                );
              })}
        </div>
         </div>
      </div>
    </Animation>
  );
};
