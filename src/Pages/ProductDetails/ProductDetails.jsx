import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { BsCart4 } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router";
import { FiHeart } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { ProductSlide } from "../../Component/productSlide/ProductSlide";
import {BeatLoader} from "react-spinners"
import { CartContext } from "../../Component/Context/CartContext";
import { Animation } from "../../Component/Utiliiy/page_Animation/Animation";



export const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [RelatedProduct, setRelatedProducts] = useState();
  const [categoryLoding, setCategoryLoding] = useState(true);

  const {AddTofaforet,itemFaforet , AddtoCart, cartItems} = useContext(CartContext);
  const isProduct_in_cart = cartItems.some((i) => i.id === product?.id) 
 const isProduct_in_faforet = itemFaforet.some((i) => i.id === product ?.id)
   const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching" + error);
      }
    };
    fetchProduct();
  }, []);

  // get category

  useEffect(() => {
    if (!product) return;

    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data.products))
      .catch((error) => console.log(error))
      .finally(() => setCategoryLoding(false));
  }, [product]);

  if (loading) {
    return (
      <div className="loading_spiner">
        <BeatLoader />
      </div>
    )
  }
  if (!product) return <h1>Not Found</h1>;





  return (
    <Animation>
    <>
      <div className="item_detalis">
        <div className="container">
          <div className="images_item">
            <div className="big_img">
              <img id="big_img" src={product.images[0]} alt="...." />
            </div>

            <div className="small_img">
              {product.images.map((img, idx) => {
                return (
               <div className="small_img_dev">
                   <img
                    key={idx}
                    src={img}
                    alt="..."
                    onClick={() =>
                      (document.getElementById("big_img").src = img)
                    }
                  />
               </div>
                );
              })}
            </div>
          </div>

          <div className="item_details">
            <h2>{product.title}</h2>
            <div className="cart_star">
              {product.rating}
              <FaStar />
            </div>
            <h3>$ {product.price}</h3>

            <p>
              availability : <span>{product.availabilityStatus}</span>
            </p>
            <p>
              Brand : <span>{product.brand}</span>
            </p>
            <p className="description">{product.description}</p>
            <h4>
              <span>Hurry Up! Only {product.stock} products left in stock</span>
            </h4>
            <button className={`btn ${isProduct_in_cart ? "Added_to_cart" : ""}`} onClick={() => AddtoCart(product)}>
            {
              isProduct_in_cart ? "AddEd to Cart" :"  Add to Cart"
            }
             {
              isProduct_in_cart ? <IoCheckmarkDoneOutline /> :  <BsCart4 />
             }
            </button>

            <div className="detals_icons">
              <span onClick={() => AddTofaforet(product)} className={`${isProduct_in_faforet ? "Added_to_faforet" :""} `}>
                <FiHeart />
              </span>
              <span>
                {" "}
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>


         {/* slider */}
      {categoryLoding ? (
         <div className="loading_spiner">
         <BeatLoader />
       </div>
      ) : (
        <ProductSlide
          key={product.category}
          data={RelatedProduct}
          title={product.category.replace("-", " ")}
        />
      )}

      {}
    </>
    </Animation>
  );
};
