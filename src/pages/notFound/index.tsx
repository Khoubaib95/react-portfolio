import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="not-found-container">
      <div id="not-found">
        <h1>Oops!</h1>
        <p>
          404 - <FormattedMessage id="page.notfound" />
        </p>
        <div style={{ maxWidth: "300px", margin: "0 auto" }}>
          <span>
            <FormattedMessage id="page.notfound.info" />
          </span>
        </div>
        <NavLink rel="noopener noreferrer" to="/">
          <FormattedMessage id="home.page" />
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
