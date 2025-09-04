import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./productpage.css";

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { category, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/data/products/${category}.json`)
      .then((res) => res.json())
      .then((data) => {
        for (let brand of data) {
          const found = brand.products.find((p) => p.id === productId);
          if (found) {
            setProduct(found);
            break;
          }
        }
      })
      .catch((err) => console.error("خطأ في جلب البيانات:", err));
  }, [category, productId]);

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
        <div className="productImage">
          <Swiper spaceBetween={10} slidesPerView={1}>
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`${product.name} ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="productInfo">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          {product.speed && <p className="details">السرعة: {product.speed}</p>}
          <h2 className="price">السعر: {product.price} $</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
