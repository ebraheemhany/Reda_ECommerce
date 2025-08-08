import React from "react";
import { HeaderTop } from "./Component/Header/HeaderTop.jsx";
import { HeaderBottom } from "./Component/Header/HeaderBottom.jsx";
import { HomePage } from "./Pages/Home/HomePage.jsx";
import { Route, Routes } from "react-router";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails.jsx";
import { CartShop } from "./Pages/CartShop/CartShop.jsx";
import { FaforetProductPage } from "./Pages/FaforetProduct/FaforetProductPage.jsx";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import {CategoryPage} from "./Pages/CategoryPage/CategoryPage.jsx"
import { SearchResult } from "./Component/SearchResult/SearchResult.jsx";
import {AllProductPage} from "./Pages/AllProductPage/AllProductPage.jsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.jsx";
function App() {
  return (
    <div>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "##9c9c9cee",
            color: "#fff",
            marginTop:"120px",
       
          },
        }}
      />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/CartShop" element={<CartShop />} />
          <Route path="/FaforetProduct" element={<FaforetProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/allProduct" element={<AllProductPage />} />
          <Route path="/login"  element={<LoginPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
