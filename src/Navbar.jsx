// import { FaSearch } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import { IoHome } from "react-icons/io5";
// import "./nav.css";
// const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <img
//           src="src/assets/278120113_349010580577186_7645654570778796875_n.jpg"
//           alt=""
//         />
//         <div className="icons">

//           <IoMenu />
//           <FaSearch />
//           <IoHome />
//         </div>
//       </nav>
//     </>
//   );
// };

//
// Navbar.jsx

import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { TbXboxXFilled } from "react-icons/tb";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSearchMobile(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearchMobile(false); // إغلاق بحث الموبايل بعد الإرسال
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            {" "}
            <img
              src="src/assets/278120113_349010580577186_7645654570778796875_n.jpg"
              alt="شعار الشركة"
            />
          </Link>
        </div>
        <h2>مجموعة الزهراء</h2>
        {!isMobile && (
          <form onSubmit={handleSearchSubmit} className={styles.searchBox}>
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
              <FaSearch />
            </button>
          </form>
        )}

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          {isMobile && menuOpen && (
            <li className={styles.closeMenuItem}>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="إغلاق القائمة"
                className={styles.closeMenuButton}
              >
                <TbXboxXFilled size={40} />
              </button>
            </li>
          )}

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <p>الرئيسية</p>
            </Link>
          </li>

          <li>
            <Link to="/#pp" onClick={() => setMenuOpen(false)}>
              <p>المنتجات</p>
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={() => setMenuOpen(false)}>
              <p>من نحن</p>
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setMenuOpen(false)}>
              {" "}
              <p>تواصل معنا</p>
            </Link>
          </li>
        </ul>

        <div className={styles.icons}>
          {isMobile && (
            <button
              className={styles.searchIcon}
              onClick={() => setShowSearchMobile(!showSearchMobile)}
              aria-label="فتح بحث"
            >
              <FaSearch />
            </button>
          )}
          {isMobile && (
            <button
              className={styles.menuIcon}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {menuOpen ? <TbXboxXFilled size={40} /> : <IoMenu />}
            </button>
          )}
        </div>
      </nav>

      {isMobile && showSearchMobile && (
        <div className={styles.mobileSearch}>
          <form
            onSubmit={handleSearchSubmit}
            style={{ display: "flex", flex: 1 }}
          >
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              style={{
                flex: 1,
                padding: "5px 10px",
                borderRadius: "0px 5px 5px 0px",
                border: "2px solid rgb(194,29,29)",
                borderLeft: "none",
                height: "30px",
              }}
            />
            <button
              type="submit"
              aria-label="بحث"
              style={{
                backgroundColor: "rgb(194,29,29)",
                border: "2px solid rgb(194,29,29)",
                color: "white",
                cursor: "pointer",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaSearch />
            </button>
          </form>
          <button
            className={styles.closeSearch}
            onClick={() => setShowSearchMobile(false)}
            aria-label="إغلاق البحث"
          >
            <TbXboxXFilled size={20} />
          </button>
        </div>
      )}
    </>
  );
}
