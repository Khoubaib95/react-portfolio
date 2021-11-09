import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const MobileNavbar = ({ setLanguage, language }: any) => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const hideMobileNavbar = () => {
    setShowMobileNav(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div id="mobile-navbar">
      <i
        className="fas fa-bars"
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => {
          setShowMobileNav(true);
          document.body.style.overflow = "hidden";
        }}
      />
      <h3>Khoubaib</h3>
      <div
        id="mobile-navbar-filter"
        className={showMobileNav ? "mobile-navbar-content-display" : ""}
        onClick={() => hideMobileNavbar()}
      ></div>
      <nav
        id="mobile-navbar-nav-content"
        style={{ left: showMobileNav ? 0 : "-67vw" }}
      >
        <div id="mobile-navbar-content">
          <i className="fas fa-times" onClick={() => hideMobileNavbar()} />
          <ul id="mobile-navList">
            <li>
              <NavLink
                onClick={() => hideMobileNavbar()}
                className="navlink"
                activeClassName="activNavList"
                exact
                to="/"
              >
                <FormattedMessage id="nav.home" />
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => hideMobileNavbar()}
                className="navlink"
                activeClassName="activNavList"
                exact
                to="/projects"
              >
                <FormattedMessage id="nav.projects" />
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => hideMobileNavbar()}
                className="navlink"
                activeClassName="activNavList"
                exact
                to="/contact"
              >
                <FormattedMessage id="nav.contact" />
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => hideMobileNavbar()}
                className="navlink"
                activeClassName="activNavList"
                exact
                to="/blog"
              >
                <FormattedMessage id="nav.blog" />
              </NavLink>
            </li>
          </ul>
          <hr
            style={{
              width: "90%",
              height: "3px",
              border: "none",
              backgroundColor: "#26d0ce",
            }}
          />
          <span style={{ margin: "5px auto" }}>
            <FormattedMessage id="home.languages" />
          </span>
          <div id="mobile-navbar-language">
            <span
              className={language === "en" ? "dropdown-selected" : ""}
              onClick={() => {
                localStorage.setItem("language", "en");
                setLanguage("en");
              }}
            >
              <img
                alt="English"
                src="images/lang_icon/United-kingdom-icon.png"
              />
            </span>
            <span
              className={language === "fr" ? "dropdown-selected" : ""}
              onClick={() => {
                localStorage.setItem("language", "fr");
                setLanguage("fr");
              }}
            >
              <img alt="France" src="images/lang_icon/France-icon.png" />
            </span>

            <span
              className={language === "de" ? "dropdown-selected" : ""}
              onClick={() => {
                localStorage.setItem("language", "de");
                setLanguage("de");
              }}
            >
              <img alt="Tunisia" src="images/lang_icon/Germany-icon.png" />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
const Nav = ({ setLanguage, language }: any) => (
  <nav id="nav">
    <div id="desktop-navbar">
      <h2 id="brand">
        <a id="brandLink" href="/index.html" target="_blank">
          Khoubaib
        </a>
      </h2>
      <ul id="navList">
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/"
          >
            <FormattedMessage id="nav.home" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/projects"
          >
            <FormattedMessage id="nav.projects" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/contact"
          >
            <FormattedMessage id="nav.contact" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/blog"
          >
            <FormattedMessage id="nav.blog" />
          </NavLink>
        </li>
      </ul>
      <div id="dropdown">
        <i className="fas fa-globe navlink" />
        <div id="dropdown-content">
          <ul
            style={{
              margin: 0,
              backgroundColor: "white",
              border: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <li
              className={language === "en" ? "dropdown-selected" : ""}
              onClick={() => {
                localStorage.setItem("language", "en");
                setLanguage("en");
              }}
            >
              <img
                alt="English"
                src="images/lang_icon/United-kingdom-icon.png"
              />
            </li>
            <li
              className={language === "fr" ? "dropdown-selected" : ""}
              onClick={() => {
                localStorage.setItem("language", "fr");
                setLanguage("fr");
              }}
            >
              <img alt="France" src="images/lang_icon/France-icon.png" />
            </li>

            <li
              className={language === "de" ? "dropdown-selected" : ""}
              onClick={() => {
                localStorage.setItem("language", "de");
                setLanguage("de");
              }}
            >
              <img alt="Tunisia" src="images/lang_icon/Germany-icon.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <MobileNavbar setLanguage={setLanguage} language={language} />
  </nav>
);

export default Nav;
