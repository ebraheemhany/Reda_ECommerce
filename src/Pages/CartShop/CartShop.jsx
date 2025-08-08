import { useContext } from "react";

import { CartContext } from "../../Component/Context/CartContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./CartShop.css";
import { Animation } from "../../Component/Utiliiy/page_Animation/Animation";
export const CartShop = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Animation>
      <div className="container">
        <div className="shop_cart">
          <h2>Your Order</h2>
          <div className="bordr_bottom"></div>
          {cartItems.length === 0 ? (
            <p className="Cart_empty">Cart is empty</p>
          ) : (
            cartItems.map((ele, idx) => {
              return (
                <>
                  <div key={idx} className="items_in_cart">
                    <div className="ggg">
                      <div className="item_img">
                        <img src={ele.images[0]} alt="..." />
                      </div>

                      <div className="item_content">
                        <h4>{ele.title}</h4>
                        <p>{ele.price}</p>
                        <input type="number" className="qountity" />
                      </div>
                    </div>

                    <div
                      className="item_delete"
                      onClick={() => removeItemFromCart(ele.id)}
                    >
                      <RiDeleteBin2Line />
                    </div>
                  </div>
                  <div className="bordr_bottom"></div>
                </>
              );
            })
          )}

          <div className="total_price">
            <p>Total :</p>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="bordr_bottom"></div>

          <div className="item_button">
            <button type="submit">Place order</button>
          </div>
        </div>
      </div>
    </Animation>
  );
};
