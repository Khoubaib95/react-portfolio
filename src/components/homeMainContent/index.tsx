import { FormattedMessage } from "react-intl";
import { Bage, Participation } from "../compo/index";
const MainContent = () => (
  <main id="home-main">
    <section id="home-main-section">
      <div className="about_section" style={{}}>
        <h3>
          <i className="fas fa-user-tie" />
          <FormattedMessage id="home.summary" />
        </h3>
        <p style={{ margin: "0" }}>
          <FormattedMessage id="home.summary.content" />
        </p>
      </div>
      <div className="about_section">
        <h3>
          <i className="fas fa-user-graduate" />
          <FormattedMessage id="home.education" />
        </h3>
        <ul className="education_list">
          <li>
            <span className="education_list_year">2020 </span>
            <p className="education_list_desc">
              <FormattedMessage id="home.education.master" />
            </p>
          </li>
          <li>
            <span className="education_list_year">2019 </span>
            <p className="education_list_desc">
              <FormattedMessage id="home.education.bachelor" />
              <b>
                , Institut Supérieur d’Informatique et de Techniques des
                communication(ISIT’Com)– Hammam Sousse
              </b>
              .
            </p>
          </li>
          <li>
            <span className="education_list_year">2016 </span>
            <p className="education_list_desc">
              <FormattedMessage id="home.education.bac" />
            </p>
          </li>
        </ul>
      </div>
      <div className="about_section">
        <h3 style={{ display: "flex", alignItems: "center" }}>
          <i className="fas fa-users" />
          <span>
            <FormattedMessage id="home.pro.dev" />
          </span>
        </h3>
        <ul className="education_list">
          <li>
            <span className="education_list_year">2021 </span>
            <div className="dev_pro">
              <div
                className="education_list_desc"
                style={{ fontWeight: "bolder" }}
              >
                <span>
                  <FormattedMessage id="google.ux.cert" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <span className="education_list_year">2021 </span>
            <div className="dev_pro">
              <div
                className="education_list_desc"
                style={{ fontWeight: "bolder" }}
              >
                <span>
                  <FormattedMessage id="hapt.cert" /> Horizon Academy of
                  Professional Training{" "}
                </span>
                <a
                  id="hapt"
                  target="_blank"
                  className="skills"
                  rel="noreferrer"
                  href="https://hapt.tn"
                >
                  HAPT <i className="fas fa-external-link-alt" />
                </a>
              </div>
              <ul>
                <li>UI/UX (Adobe XD)</li>
                <li>HTML5, CSS3, Javascript</li>
                <li>React JS ( ECMAScript ES6/7, TypeScript )</li>
                <li>Nest JS, Express JS ( ECMAScript ES6/7, TypeScript )</li>
                <li>MongoDB</li>
                <li>
                  <FormattedMessage id="traineeship" /> ( 1{" "}
                  <FormattedMessage id="month" /> )
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="education_list">
          <li style={{ marginBottom: "10px" }}>
            <span className="education_list_year">2021 </span>
            <div className="dev_pro">
              <div
                style={{ fontWeight: "bolder", textAlign: "left" }}
                className="education_list_desc"
              >
                <span>
                  <FormattedMessage id="freecodecamp.cert" />
                </span>
                <a
                  id="free_codecamp_certif"
                  target="_blank"
                  className="skills"
                  rel="noreferrer"
                  href="https://www.freecodecamp.org/certification/abdellaoui_khoubaib/responsive-web-design"
                >
                  Responsive Web Design{" "}
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <span className="education_list_year">2020 </span>
            <div className="dev_pro">
              <div
                style={{ fontWeight: "bolder", textAlign: "left" }}
                className="education_list_desc"
              >
                <span>
                  <FormattedMessage id="freecodecamp.cert" />
                </span>
                <a
                  id="free_codecamp_certif"
                  target="_blank"
                  className="skills"
                  rel="noreferrer"
                  href="https://www.freecodecamp.org/certification/abdellaoui_khoubaib/back-end-development-and-apis"
                >
                  Back End Development and APIs{" "}
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="about_section">
        <h3>
          <i className="fas fa-business-time" />
          <FormattedMessage id="home.experience" />
        </h3>
        <ul className="education_list">
          <li>
            <span className="education_list_year">
              2021 ( <FormattedMessage id="june" /> )
            </span>
            <div className="dev_pro">
              <div
                className="education_list_desc"
                style={{ fontWeight: "bolder" }}
              >
                <span>Tuskens</span>
                <br />
                <span>
                  <FormattedMessage id="Junior.developer" />
                </span>
              </div>

              <span>
                <FormattedMessage id="Junior.developer.task" />
              </span>
            </div>
          </li>
          <li>
            <span className="education_list_year">
              2021 ( <FormattedMessage id="april" /> )
            </span>
            <div className="dev_pro">
              <div
                className="education_list_desc"
                style={{ fontWeight: "bolder" }}
              >
                <span>
                  Horizon Academy of Professional Training( 1{" "}
                  <FormattedMessage id="month.internship" /> )
                </span>
              </div>
              <span>
                <FormattedMessage id="home.experience.training" /> :
              </span>
              <ul>
                <li>
                  <span style={{ fontWeight: 400 }}>UI/UX : </span>
                  <FormattedMessage id="home.experience.training.ui/ux" />{" "}
                  <Participation percent={20} />
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>Front End : </span>
                  <FormattedMessage id="home.experience.training.front" />(
                  ECMAScript ES6/7, TypeScript, Material ui ){" "}
                  <Participation percent={80} />
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>Back End : </span>
                  <FormattedMessage id="home.experience.training.back" />
                  Nest JS, Express JS ( ECMAScript ES6/7, TypeScript ), MongoDB{" "}
                  <Participation percent={75} />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <aside
      style={{ border: "1px solid rgba(0, 0, 0, 0.12)", height: "fit-content" }}
    >
      <div>
        <h3>
          <FormattedMessage id="home.skills" />
        </h3>
        <div className="skills-container">
          <h4>
            <FormattedMessage id="home.skills.prog" />
          </h4>
          <div className="skills-list">
            <Bage name="JavaScript ES6" color="f5c434" />
            <Bage name="TypeScript" color="2f74c0" />
            <Bage name="HTML 5" color="dd4b25" />
            <Bage name="CSS 3" color="2962e9" />
          </div>
        </div>
        <div className="skills-container">
          <h4>
            <FormattedMessage id="home.skills.db" />
          </h4>
          <div className="skills-list">
            <Bage name="MongoDB" color="93dd53" />
          </div>
        </div>
        <div className="skills-container">
          <h4>
            <FormattedMessage id="home.skills.fl" />
          </h4>
          <div className="skills-list">
            <Bage name="React js" color="5ed3f3" />
            <Bage name="Next js" color="000000" />
            <Bage name="Redux" color="7752bd" />
            <Bage name="Bootstrap" color="7952b3" />
            <Bage name="Material-UI" color="007FFF" />
            <Bage name="Express js" color="7e7e7e" />
            <Bage name="Node js" color="8ac52a" />
            <Bage name="Nest js" color="e44344" />
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h4>
          <FormattedMessage id="home.skills.design" />
        </h4>
        <div className="skills-list">
          <Bage name="Adobe XD" color="ec74ee" />
        </div>
      </div>
      <div className="skills-container">
        <h4>
          <FormattedMessage id="home.skills.col" />
        </h4>
        <div className="skills-list">
          <Bage name="Github" color="1b1f23" />
          <Bage name="Gitlab" color="f49e2d" />
          <Bage name="Jira" color="2580f7" />
          <Bage name="Slack" color="ca4059" />
        </div>
      </div>
      <div>
        <h3>
          <FormattedMessage id="home.languages" />
        </h3>
        <ul id="languages-skills">
          <li>
            <div className="languages-degree-info">
              <span>
                <FormattedMessage id="home.languages.ar" />
              </span>
              <span className="languages-degree">100%</span>
            </div>
            <div
              className="languages-degree-prog"
              style={{ width: "100%", borderRadius: "0.25rem" }}
            >
              <div style={{ width: "100%" }}></div>
            </div>
          </li>

          <li>
            <div className="languages-degree-info">
              <span>
                <FormattedMessage id="home.languages.fr" />
              </span>
              <span className="languages-degree">75% - 85%</span>
            </div>
            <div
              className="languages-degree-prog"
              style={{ width: "100%", borderRadius: "0.25rem" }}
            >
              <div style={{ width: "85%", backgroundColor: "#6bff6b" }}></div>
              <div
                style={{
                  width: "75%",
                  marginTop: "-16px",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              ></div>
            </div>
          </li>
          <li>
            <div className="languages-degree-info">
              <span>
                <FormattedMessage id="home.languages.en" />
              </span>
              <span className="languages-degree">60% - 80%</span>
            </div>
            <div
              className="languages-degree-prog"
              style={{ width: "100%", borderRadius: "0.25rem" }}
            >
              <div style={{ width: "80%", backgroundColor: "#6bff6b" }}></div>
              <div
                style={{
                  width: "60%",
                  marginTop: "-16px",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </main>
);

export default MainContent;
