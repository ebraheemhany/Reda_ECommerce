import React, { useContext } from "react";
import "./CartSlide.css";

import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export const CartSlide = ({ data }) => {
  const { AddtoCart, cartItems, AddTofaforet, itemFaforet } =
    useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === data.id);
  const added_in_faforet = itemFaforet.some((i) => i.id === data.id);


  // function add element to cart
const handelAddedToCart = () => {
  AddtoCart(data)
  toast.success (
  <div className="toast_wraber">
    <img src={data.images[0]} alt="..." />
    <div className="toast_content">
    <h4>{data.title}</h4>
    <p>Added To Cart</p>
<Link to={"/CartShop"}>
<button className="toast_btn">
      View Cart
    </button>
</Link>
    </div>
  </div>

  )


}

// function add element to faforet page
const handelfaforetItem = () => {
  AddTofaforet(data)
 
  toast.success (
  <div className="toast_wraber">
    <img src={data.images[0]} alt="..." />
    <div className="toast_content">
    <h4>{data.title}</h4>
    <p>Added To Faforet</p>
<Link to={"/FaforetProduct"}>
<button className="toast_btn">
      View Faforet Page
    </button>
</Link>
    </div>
  </div>

  )
}


  return (
    <>
      <div className="cart_slide ">
        <div className="container">
          <div className={`cart_item ${isInCart ? "in_cart" : ""}`}>
            <Link to={`/products/${data.id}`} className="cart_slide">
              {isInCart ? (
                <span className="cart_status">
                  <IoCheckmarkDone /> in Cart
                </span>
              ) : (
                ""
              )}

              <img src={data.images[0]} alt="img" />
              <h4>{data.title}</h4>
              <div className="cart_star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p>
                <span>$</span>
                {data.price}
              </p>
            </Link>
            <div className="cart_icons">
              <span className="added_in_cart" onClick={handelAddedToCart}>
                <BsCart4 />
              </span>

              <span
                className={`${added_in_faforet ? "infaforet" : ""}`}
                onClick={handelfaforetItem }
              >
                <FiHeart />
              </span>

              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
