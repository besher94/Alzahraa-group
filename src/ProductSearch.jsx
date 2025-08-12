import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import featured from "./data/featured";
import laptops from "./data/laptops";
import routers from "./data/routers";
import tv from "./data/tv";
import cameras from "./data/cameras";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ProductSearch() {
  const query = useQuery();
  const navigate = useNavigate();

  const q = query.get("q") || "";

  const [searchTerm, setSearchTerm] = React.useState(q);

  React.useEffect(() => {
    setSearchTerm(q);
  }, [q]);

  // دمج كل المنتجات
  const allProducts = [...featured, ...laptops, ...routers, ...tv, ...cameras];

  // فلترة المنتجات حسب نص البحث (اسم المنتج)
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <h2>نتائج البحث عن: "{searchTerm}"</h2>

      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: 20, display: "flex" }}
      >
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: 10,
            padding: "8px 16px",
            backgroundColor: "rgb(194,29,29)",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          بحث
        </button>
      </form>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            id="r1"
            key={product.id}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
              display: "flex",
              gap: 15,
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: 100,
                height: 70,
                objectFit: "cover",
                borderRadius: 5,
              }}
            />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                السعر: <strong>${product.price}</strong>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>لا توجد منتجات تطابق بحثك.</p>
      )}
    </div>
  );
}
