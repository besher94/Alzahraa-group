import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <h2>مجموعة الزهراء</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/ALZAHRAA.IT/" target="_blank">
            {" "}
            <FaFacebook size={30} id="f" />
          </a>
          <a
            href="https://Wa.me/963938000503"
            target="_blank"
            rel="noopner noreferrer"
          >
            <FaWhatsapp size={30} id="w" />
          </a>
          <BsTelegram size={30} id="t" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
