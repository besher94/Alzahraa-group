import { useState, useEffect } from "react";
import { useParams, useNavigate, data } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [sections, setSection] = useState([]);

  useEffect(() => {
    fetch(`/data/products/${category}.json`)
      .then((res) => res.json())
      .then((data) => setSection(data))
      .catch((err) => console.error("خطا في جلب البيانات", err));
  }, [category]);
  return (
    <div
      className="main-flex"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "20px", width: "80%" }}>
        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "40px" }}>
            <h1>{section.brand}</h1>
            <Swiper
              spaceBetween={15}
              slidesPerView={2}
              breakpoints={{
                768: { slidesPerView: 4 },
              }}
            >
              {section.products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    id="pp"
                    className="product-card"
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      navigate(`/products/${category}/${product.id}`)
                    }
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <h2
                      style={{
                        fontSize: "24px",
                        margin: "10px 0 5px",
                        fontWeight: "500",
                      }}
                    >
                      {product.name}
                    </h2>
                    <h2
                      style={{
                        fontSize: "18px",
                        color: "#555",
                        fontWeight: "500",
                      }}
                    >
                      {product.description}
                    </h2>
                    <h2 id="product-price">{product.price} $</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}
