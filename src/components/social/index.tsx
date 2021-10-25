import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

const Social = () => {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const copy = (v: any) => {
    setIsCopy(true);
    navigator.clipboard.writeText(v);
    setTimeout(() => setIsCopy(false), 1000);
  };
  return (
    <aside id="social">
      <ul>
        <li id="social-phone">
          <a
          // eslint-disable-next-line
          //href="/contact"
          >
            <i
              style={{ color: "#42444d" }}
              className="fas fa-mobile-alt social-icon"
            />
          </a>
          <div id="phone-number">
            <div style={{ display: "flex" }}>
              <span
                className="clipboard-copy"
                onClick={() => {
                  copy("+216 99 540 894");
                }}
              >
                <i style={{ color: "#26d0ce" }} className="far fa-copy"></i>
              </span>
              <i
                style={{
                  color: "#4fce5d",
                  fontSize: "26px",
                }}
                className="fab fa-whatsapp"
              />
              <span>+216 99 540 894</span>
              <span className="phone-call">
                <i className="fas fa-phone" />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                borderTop: "1px solid rgba(0, 0, 0, 0.125)",
              }}
            >
              <span
                className="clipboard-copy"
                onClick={() => {
                  copy("+216 52 694 427");
                }}
              >
                <i style={{ color: "#26d0ce" }} className="far fa-copy"></i>
              </span>
              <i
                style={{
                  color: "#42444d",
                  fontSize: "26px",
                }}
                className="fas fa-mobile-alt social-icon"
              />
              <span>+216 52 694 427</span>
              <span className="phone-call">
                <i className="fas fa-phone" />
              </span>
            </div>
            {isCopy && (
              <span
                style={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#56b95d",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <FormattedMessage id="contact.copy" />
              </span>
            )}
          </div>
        </li>
        <li>
          <a
            href="https://www.facebook.com/khoubaib.abdelleoui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              style={{ color: "#3b5998" }}
              className="fab fa-facebook social-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.messenger.com/t/100005012559048"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              style={{ color: "#006aff" }}
              className="fab fa-facebook-messenger social-icon"
            />
          </a>
        </li>
        <li>
          <NavLink to="/">
            <i
              style={{ color: "#0e76a8" }}
              className="fab fa-linkedin social-icon"
            />
          </NavLink>
        </li>
        <li>
          <a
            href="https://github.com/Khoubaib95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              style={{ color: "#211f1f" }}
              className="fab fa-github social-icon"
            />
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default Social;
