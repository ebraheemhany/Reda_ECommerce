import { useContext, useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaShare, FaStar } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router";
import { Link } from "react-router";
import "./CategoryPage.css";
import { CartContext } from "../../Component/Context/CartContext";
import { IoCheckmarkDone } from "react-icons/io5";
import toast from "react-hot-toast";
import {Animation} from "../../Component/Utiliiy/page_Animation/Animation.jsx";
export const CategoryPage = () => {
  const { category } = useParams();
  const [AllCategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((respone) => respone.json())
      .then((data) => setAllCategory(data.products));
  }, [category]);

  const { cartItems, AddtoCart, AddTofaforet, itemFaforet } =
    useContext(CartContext);
  // function add element to cart
  const handelAddedInCart = (item) => {
    AddtoCart(item);
    toast.success(
      <div className="toast_wraber">
        <img src={item.images[0]} alt="..." />
        <div className="toast_content">
          <h4>{item.title}</h4>
          <p>Added To Cart</p>
          <Link to={"/CartShop"}>
            <button className="toast_btn">View Cart</button>
          </Link>
        </div>
      </div>
    );
  };
  // function add element to faforet page
  const handelAddedInFaforet = (item) => {
    AddTofaforet(item);
    toast.success(
      <div className="toast_wraber">
        <img src={item.images[0]} alt="..." />
        <div className="toast_content">
          <h4>{item.title}</h4>
          <p>Added To Faforet</p>
          <Link to={"/FaforetProduct"}>
            <button className="toast_btn">View Faforet Page</button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Animation>
    <div className="category_page">
      <div className="container">
           <div className="top_slide">
                  <h2>{category}</h2>
                  <p>Count : {AllCategory.length}</p>
                </div>
                  <div className="cart_parent">
        {AllCategory.length === 0 ? (
          <h1>no data</h1>
        ) : (
          AllCategory.map((item) => {
            const isInCart = cartItems.some((i) => i.id === item.id);
            const isInFaforet = itemFaforet.some((i) => i.id === item.id);
            return (
            
             
                <div
                  className={`cart_item ${isInCart ? "in_cart" : ""}`}
                  key={item.id}
                >
                  <Link to={`/products/${item.id}`} className="cart_slide">
                    {isInCart ? (
                      <span className="cart_status">
                        <IoCheckmarkDone /> in Cart
                      </span>
                    ) : (
                      ""
                    )}
                    <img src={item.images?.[0]} alt="img" />
                    <h4>{item.title}</h4>
                    <div className="cart_star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <p>
                      <span>$</span>
                      {item.price}
                    </p>
                  </Link>
                  <div className="cat_icons">
                    <span
                      onClick={() => handelAddedInCart(item)}
                      className={isInCart ? "Added_in_cart" : ""}
                    >
                      <BsCart4 />
                    </span>

                    <span
                      onClick={() => handelAddedInFaforet(item)}
                      className={isInFaforet ? "Added_in_faforet" : ""}
                    >
                      <FiHeart />
                    </span>

                    <span>
                      <FaShare />
                    </span>
                  </div>
                </div>
         
             
            );
          })
        )}
             </div>
      </div>
    </div>
    </Animation>
  );
};
