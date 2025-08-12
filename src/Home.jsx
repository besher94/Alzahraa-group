import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import featured from "./data/featured.js";
import screens from "./data/tv.js";
import laptops from "./data/laptops.js";
import routers from "./data/routers.js";
import surveillance from "./data/cameras.js";

const Home = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const sections = [
    { id: "featured", title: "المنتجات المميزة", products: featured },
    { id: "screens", title: "شاشات تلفاز", products: screens },
    { id: "laptops", title: "لابتوبات", products: laptops },
    { id: "routers", title: "راوترات", products: routers },
    { id: "surveillance", title: "أنظمة المراقبة", products: surveillance },
  ];

  return (
    <main>
      <div className="img-container">
        <img
          src="src/assets/278116446_349010577243853_1146779946655986501_n.png"
          alt=""
        />
      </div>

      <div style={{ direction: "rtl", padding: "20px" }}>
        {sections.map((section) => (
          <div key={section.id} style={{ marginBottom: "40px" }}>
            <h1 style={{ marginBottom: "10px" }}>{section.title}</h1>
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
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <h2 style={{ fontSize: "24px", margin: "10px 0 5px" }}>
                      {product.name}
                    </h2>
                    <h2 style={{ fontSize: "18px", color: "#555" }}>
                      {product.description}
                    </h2>
                    <h2>{product.price} $</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
