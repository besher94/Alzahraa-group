import { useParams, useNavigate } from "react-router-dom";
import featuredProducts from "./data/featured";
import screens from "./data/tv";
import laptops from "./data/laptops";
import routers from "./data/routers";
import surveillance from "./data/cameras";
import "./productpage.css";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProducts = [
    ...featuredProducts,
    ...screens,
    ...laptops,
    ...routers,
    ...surveillance,
  ];

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h2>المنتج غير موجود</h2>
        <button
          onClick={() => navigate(-1)}
          className="backButton"
          style={{ marginTop: 20 }}
        >
          العودة للصفحة السابقة
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="backButton">
        ← رجوع
      </button>

      <div className="productContent">
        <img src={product.image} alt={product.name} className="productImage" />

        <div className="productInfo">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="details">{product.details}</p>
          <h2 className="price">السعر: {product.price} $</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
