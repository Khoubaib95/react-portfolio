//import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Footer = () => (
  <footer>
    <FormattedMessage id="footer.copyright" /> &copy; {new Date().getFullYear()}
    &nbsp;
    {/*<a href="http://Khoubaib-ab.me" target="_blank" rel="noopener noreferrer">
      khoubaib-ab.me
    </a>*/}
    <span style={{ color: "blueviolet" }}>Abdellaoui Khoubaib</span>
    &nbsp;
    <FormattedMessage id="footer.allRight" />
  </footer>
);
export default Footer;
