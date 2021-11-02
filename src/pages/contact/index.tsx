import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Social from "../../components/social/index";
import sendMail from "../../utils/sendMail";
import SEO from "../../components/seo";

function Contact(language: { language: string }) {
  const [fullName, setFullName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [erroredField, setErroredField] = useState<boolean>(false);
  const [isSendErr, setIsSendErr] = useState<boolean>(false);
  const [isSendSucc, setIsSendSucc] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  function handelSubmit(e: any) {
    e.preventDefault();
    if (fullName && email && message) {
      setShowInfo(true);
      sendMail({
        language: language.language,
        fullName,
        email,
        subject,
        message,
        setIsSendErr,
        setIsSendSucc,
      });
    } else {
      setErroredField(true);
    }
  }

  function handelReset(e: any) {
    e.preventDefault();
    setErroredField(false);
    setFullName("");
    setSubject("");
    setEmail("");
    setMessage("");
  }
  function handelName(e: any) {
    setFullName(e.target.value);
  }

  function handelSubject(e: any) {
    setSubject(e.target.value);
  }

  function handelEmail(e: any) {
    setEmail(e.target.value);
  }

  function handelMessage(e: any) {
    setMessage(e.target.value);
  }

  return (
    <>
      <SEO title="Contact" />
      <main id="contact-main">
        <Social />

        <div className="contact-container-filter"></div>
        <div className="contact-container">
          <div className="contact-left">
            <img src={"/images/message.png"} alt="send email" />
          </div>
          <section className="contact-section">
            <form>
              <h2>
                <FormattedMessage id="contact.getIntouch" />
              </h2>
              <div className="contact_form_input_groupe">
                <input
                  value={fullName}
                  onChange={handelName}
                  type="text"
                  id="name"
                  className={`input_field ${
                    !fullName && erroredField ? "input_field_errored" : ""
                  }`}
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <label
                  htmlFor="name"
                  className={`input_label ${
                    !fullName && erroredField ? "input_label_errored" : ""
                  }`}
                >
                  <FormattedMessage id="contact.fullName" />
                  {!fullName && erroredField && (
                    <FormattedMessage id="contact.mandatory.field" />
                  )}
                </label>
              </div>
              <div className="contact_form_input_groupe">
                <input
                  value={subject}
                  onChange={handelSubject}
                  type="text"
                  id="subject"
                  className="input_field"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <label htmlFor="subject" className="input_label">
                  <FormattedMessage id="contact.subject" />
                </label>
              </div>
              <div className="contact_form_input_groupe">
                <input
                  onChange={handelEmail}
                  value={email}
                  type="email"
                  id="email"
                  className={`input_field ${
                    !email && erroredField ? "input_field_errored" : ""
                  }`}
                  placeholder="E-mail"
                  required
                />
                <label
                  htmlFor="email"
                  className={`input_label ${
                    !email && erroredField ? "input_label_errored" : ""
                  }`}
                >
                  <FormattedMessage id="contact.email" />
                  {!email && erroredField && (
                    <FormattedMessage id="contact.mandatory.field" />
                  )}
                </label>
              </div>
              <div className="contact_form_input_groupe">
                <textarea
                  onChange={handelMessage}
                  value={message}
                  id="message"
                  className={`input_field ${
                    !message && erroredField ? "input_field_errored" : ""
                  }`}
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`input_label ${
                    !message && erroredField ? "input_label_errored" : ""
                  }`}
                >
                  <FormattedMessage id="contact.message" />
                  {!message && erroredField && (
                    <FormattedMessage id="contact.mandatory.field" />
                  )}
                </label>
              </div>

              {showInfo ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "112px",
                    backgroundColor: isSendSucc
                      ? "#28a7452e"
                      : isSendErr
                      ? "#dc35452e"
                      : "#f1f1f1",
                    fontSize: "25px",
                    color: isSendSucc ? "#28a745" : isSendErr ? "#dc3545" : "",
                    border: `2px solid ${
                      isSendSucc ? "#28a745" : isSendErr ? "#dc3545" : "none"
                    }`,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {isSendSucc ? (
                    <>
                      <i
                        className="fas fa-times contact-form-info-close"
                        onClick={() => {
                          setShowInfo(false);
                          setIsSendSucc(false);
                          setIsSendErr(false);
                        }}
                      />
                      <h2>
                        Message sent
                        <i
                          style={{ fontSize: "22px" }}
                          className="fas fa-check"
                        />
                      </h2>
                      <span style={{ fontSize: "20px" }}>
                        Thanks for being in touch
                      </span>
                    </>
                  ) : isSendErr ? (
                    <>
                      <i
                        className="fas fa-times contact-form-info-close"
                        onClick={() => {
                          setShowInfo(false);
                          setIsSendSucc(false);
                          setIsSendErr(false);
                        }}
                      />
                      <h2>Oops Error</h2>
                      <span style={{ fontSize: "20px" }}>please try again</span>
                    </>
                  ) : (
                    <span id="loader">
                      <span id="loader1"></span>
                      <span id="loader2"></span>
                      <span id="loader3"></span>
                    </span>
                  )}
                </div>
              ) : (
                <div id="contact-left-form-button">
                  <div>
                    <button
                      onClick={handelSubmit}
                      id="contact-form-send-button"
                      className="contact-form-button"
                      type="submit"
                    >
                      <b>
                        <FormattedMessage id="contact.send" />
                      </b>
                    </button>
                    <button
                      onClick={handelReset}
                      id="contact-form-reset-button"
                      className="contact-form-button"
                    >
                      <b>
                        <FormattedMessage id="contact.reset" />
                      </b>
                    </button>
                  </div>

                  <span>
                    <FormattedMessage id="contact.ou" />
                  </span>
                  <a
                    href="mailto:khoubaibab01@gmail.com"
                    style={{
                      fontWeight: 600,
                      width: "240px",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="contact-form-button"
                  >
                    <b>
                      <FormattedMessage id="contact.send-email" />
                    </b>
                  </a>
                </div>
              )}
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
