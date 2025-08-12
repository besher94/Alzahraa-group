import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <h1>مجموعة الزهراء</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/ALZAHRAA.IT/" target="_blank">
            {" "}
            <FaFacebook size={50} id="f" />
          </a>
          <a
            href="https://Wa.me/963938000503"
            target="_blank"
            rel="noopner noreferrer"
          >
            <FaWhatsapp size={50} id="w" />
          </a>
          <BsTelegram size={50} id="t" />
        </div>
        <h1>تواصل معنا </h1>
        <div className="nums">
          <a href="tel:+693938000503">
            <h2>0938 000 503</h2>
          </a>
          <a href="mailto:masri-m@alzahraa-it.com" target="_blank">
            <h2>masri-m@alzahraa-it.com</h2>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
