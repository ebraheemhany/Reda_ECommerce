import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoIosMenu } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";

export const HeaderBottom = () => {
  const [categories, setCategorys] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  // set Active => onclick at category return active

  const [IsActive, setIsActive] = useState(false);
  const loction = useLocation();
  useEffect(() => {
    setIsActive(false);
  }, [loction]);

  return (
    <div className="header_bottom">
      <div className="container">
       <div className="parent">
         <nav className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsActive(!IsActive)}
            >
              <IoIosMenu />
              <p>All Category</p>
              <TiArrowSortedDown />
            </div>
            <div className={`category_list ${IsActive ? "active" : ""}`}>
              {categories.map((cat, idx) => {
                return (
                  <div className="category_list_item" key={idx}>
                    <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="sign_regs_icon">
          <Link to={"/login"}>
            <IoIosLogIn />
          </Link>
          <Link to={"/"}>
            <FaUserPlus />
          </Link>
        </div>
      </div>
       </div>
    </div>
  );
};
