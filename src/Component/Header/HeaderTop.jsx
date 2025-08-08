import React, { useContext } from 'react'
import logo from "../../image/img/logo1.png";
import { Link } from 'react-router';
import "./Header.css"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from '../Context/CartContext';
import { SearchBox } from './SearchBox';


export const HeaderTop = () => {
const {cartItems , itemFaforet} = useContext(CartContext)

  return (
  <div className='top_header'>
    <div className='container'>
    <Link className='logo' to={"/"}>
        <img src={logo} alt='logo'/>
    </Link>

<SearchBox />

<div className='header_icons'>
  <div className='icon'>
    <Link to={"/FaforetProduct"}>
       <FaRegHeart />
       <span className='count'>{itemFaforet.length}</span>
       </Link>
  </div>

  <div className='icon'>
     <Link to={"/CartShop"} >
     <TiShoppingCart />
     <span className='count'>{cartItems.length}</span>
     </Link>
  </div>

</div>



    </div>
  </div>
  )
}
