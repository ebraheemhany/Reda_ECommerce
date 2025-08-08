import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Animation } from "../Utiliiy/page_Animation/Animation";
import "./SearchReasult.css";
import { FaShare, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BeatLoader } from "react-spinners";
import { CartContext } from "../Context/CartContext";
import { IoCheckmarkDone } from "react-icons/io5";

export const SearchResult = () => {
  const query = new URLSearchParams(useLocation().search).get("q");
  const [Reasult, SetReasult] = useState([]);
  const [loading, SetLoading] = useState(true);
  const { cartItems, AddtoCart, AddTofaforet, itemFaforet } =
    useContext(CartContext);

  useEffect(() => {
    const SearchResults = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await response.json();
        SetReasult(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        SetLoading(false);
      }
    };
    if (query) {
      SearchResults();
    }
  }, [query]);

  // function to handel Add item in cart
  const handelAddedInCart = (item) => {
    AddtoCart(item);
  };

  // function to handel Add item in faforet page
  const handelAddedItemInFaforet = (item) => {
    AddTofaforet(item);
  };

  return (
    <>
      <Animation>
        {loading ? (
          <div className="loading_spiner">
            <BeatLoader />
          </div>
        ) : (
          <div className="reasult_page">
            <div className="container">
              <div className="top_slide">
                <h2>
                  <span>Reasults for your Search</span> : {Reasult.length}
                </h2>
              </div>
              <div className="parent">
                {Reasult.length > 0 ? (
                  <>
                    {Reasult.map((item) => {
                      // checkk if item in cart
                      const isIncart = cartItems.some((i) => i.id === item.id);
                    // checkk if item in faforet page
                    const isInFaforet = itemFaforet.some((i) => i.id === item.id)
                      return (
                        <div
                          className={`cart_item ${isIncart ? "in_cart" : ""} `}
                          key={item.id}
                        >
                          <Link
                            to={`/products/${item.id}`}
                            className="cart_slide"
                          >
                            {isIncart ? (
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
                                className={isIncart ? "Added_in_cart" : ""}
                            >
                              <BsCart4 />
                            </span>

                            <span
                              onClick={() => handelAddedItemInFaforet(item)}
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
                    })}
                  </>
                ) : (
                  <div className="not_found">
                    <h1>Not Found</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Animation>
    </>
  );
};
