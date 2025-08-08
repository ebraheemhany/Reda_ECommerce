
import { SliderHero } from "../SliderHero/SliderHero.jsx";
import { ProductSlide } from "../productSlide/ProductSlide.jsx";
import {BeatLoader} from "react-spinners"
import { useEffect, useState } from "react";
import {Animation} from "../Utiliiy/page_Animation/Animation.jsx"
export const HomeComponent = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const categores = [
    "smartphones",
    "laptops",
    "mobile-accessories",
    "mens-watches",
    "womens-watches",
    "sunglasses",
  ];
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await Promise.all(
          categores.map(async (category) => {
            const respons = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await respons.json();
            return { [category]: data.products };
          })
        );

        const produtData = Object.assign({}, ...result);
        setProducts(produtData);
      } catch (error) {
        console.error("error fetching" + error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <Animation>
    <>
      <SliderHero />

      {loading ? (
        <div className="loading_spiner">
          <BeatLoader />
        </div>
      ) : (
        categores.map((category, idx) => {
          return (
            <ProductSlide
              key={idx}
              data={products[category]}
              title={category.replace("-", " ")}
            />
          );
        })
      )}
    </>
    </Animation>
  );
};
