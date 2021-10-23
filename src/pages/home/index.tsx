import { FormattedMessage } from "react-intl";
import MainContent from "../../components/homeMainContent/index";
import SEO from "../../components/seo";

const Home = () => (
  <>
    <SEO title="Home" />
    <header>
      <div id="title">
        <span>
          <FormattedMessage id="header.hello" />
        </span>
        <i className="fas fa-smile"></i>
        <i className="fas fa-smile"></i>
        <br />
        <span>
          <FormattedMessage id="header.im" />
        </span>
        <span style={{ color: "#ff09ff" }}>
          <b>
            <FormattedMessage id="header.name" />
          </b>
        </span>
        <span>,</span>
        <span>
          <abbr title="Mongo DB Expreess JS React JS Node JS"> MERN</abbr>
          <FormattedMessage id="header.speciality" />
        </span>
        <br />
        <span>
          <FormattedMessage id="header.from" /> <br />
          <i className="fas fa-map-marker-alt"></i>
          <address style={{ display: "contents" }}>
            <FormattedMessage id="header.location" />
          </address>
        </span>
      </div>
      <img
        id="user_image"
        src={"/images/khoubaib_light_square.jpg"}
        alt="Not found"
      />
    </header>
    <div id="cv-pdf">
      <a
        style={{ color: "white" }}
        target="_blank"
        href="https://youtube.com/"
        rel="noreferrer"
      >
        <b>
          <FormattedMessage id="home.cv.format" />{" "}
          <i className="fas fa-external-link-alt" />
        </b>
      </a>
    </div>
    <div id="parallax"></div>
    <MainContent />
  </>
);
export default Home;
