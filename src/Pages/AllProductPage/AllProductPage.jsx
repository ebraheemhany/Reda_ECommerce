import { useEffect, useState } from "react";
import { CartSlide } from "../../Component/Utiliiy/CartSlide/CartSlide";
import { BeatLoader } from "react-spinners";
import "./AllProductPage.css";
import { Animation } from "../../Component/Utiliiy/page_Animation/Animation";
export const AllProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setAllProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Animation>
      <>
        {loading ? (
          <div className="loading_spiner">
            <BeatLoader />
          </div>
        ) : (
          <div className="all_products_page">
            <div className="container">
              <div className="produc_list">
                {allProducts.map((product, idx) => (
                  <CartSlide key={idx} data={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    </Animation>
  );
};
