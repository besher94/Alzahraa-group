import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductPage from "./productpage";
import ProductSearch from "./ProductSearch";
import Footer from "./Ffooter";
import About from "./About";
import Contact from "./Contact";
import CategoryPage from "./CategoryPage";
import ProductsPage from "./productsPage";

function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<ProductSearch></ProductSearch>}></Route>

        <Route path="/products/:category" element={<CategoryPage />} />
        <Route
          path="/products/:category/:productId"
          element={<ProductsPage />}
        />

        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<h1>صفحة غير موجودة</h1>}></Route>
      </Routes>
      <Footer></Footer>{" "}
    </div>
  );
}

export default App;
