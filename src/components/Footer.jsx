import fb from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <p>About</p>
          <p>Products</p>
          <p>Developers</p>
        </div>
        <div className="footer2">
          <p>Contact</p>
          <p>Faq</p>
          <p>Terms of Service</p>
        </div>
        <div className="footer3">
          <div className="logos">
            <ul>
              <li>
                <img src={fb} alt="facebook" />
              </li>
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={instagram} alt="instagram" />
              </li>
            </ul>
            <p id="securedby">Secured bu Solana</p>
            <p id="copyright">&copy; Copyright 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
