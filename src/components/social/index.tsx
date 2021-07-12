import { NavLink } from "react-router-dom";

const Social = () => (
  <aside id="social">
    <ul>
      <li>
        <NavLink to="/">
          <i style={{ color: "#42444d" }} className="fas fa-mobile-alt" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i style={{ color: "#3b5998" }} className="fab fa-facebook" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i
            style={{ color: "#006aff" }}
            className="fab fa-facebook-messenger"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i style={{ color: "#4fce5d" }} className="fab fa-whatsapp" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i style={{ color: "#0e76a8" }} className="fab fa-linkedin" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i style={{ color: "#211f1f" }} className="fab fa-github" />
        </NavLink>
      </li>
    </ul>
  </aside>
);
export default Social;
