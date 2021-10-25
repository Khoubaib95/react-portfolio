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
        <span>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </span>

        <NavLink rel="noopener noreferrer" to="/">
          go to home page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
