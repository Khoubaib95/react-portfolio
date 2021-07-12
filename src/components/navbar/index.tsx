import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const hideMobileNavbar = () => {
    setShowMobileNav(false);
  };
  return (
    <div id="mobile-navbar">
      <i
        className="fas fa-bars"
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => setShowMobileNav(true)}
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
        <div>
          <i className="fas fa-times" onClick={() => setShowMobileNav(false)} />
          <ul id="mobile-navList">
            <li>
              <NavLink
                onClick={() => hideMobileNavbar()}
                className="navlink"
                activeClassName="activNavList"
                exact
                to="/"
              >
                Home
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
                Projects
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
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => hideMobileNavbar()}
                className="navlink"
                activeClassName="activNavList"
                exact
                to="/blog"
                target="_blank"
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <hr
            style={{
              width: "90%",
              height: "3px",
              border: "none",
              backgroundColor: "#ff09ff",
            }}
          />
        </div>
      </nav>
    </div>
  );
};
const Nav = () => (
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activNavList"
            exact
            to="/blog"
            target="_blank"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <div id="dropdown">
        <i className="fas fa-globe navlink" />
        <div id="dropdown-content">
          <ul style={{ margin: 0, backgroundColor: "white" }}>
            <li>
              <a href="./en.html">
                <img
                  alt="France"
                  src="https://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/24/France-icon.png"
                />
              </a>
            </li>
            <li>
              <a href="./ar.html">
                <img
                  alt="Tunisia"
                  src="https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/24/Tunisia-icon.png"
                />
              </a>
            </li>
            <li>
              <a href="./ar.html">
                <img
                  alt="United kingdom"
                  src="https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/24/United-kingdom-icon.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <MobileNavbar />
  </nav>
);

export default Nav;
