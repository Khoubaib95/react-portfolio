import { FormattedMessage } from "react-intl";
import {
  ES6,
  TypeScript,
  Html5,
  Css3,
  MongoDB,
  Expressjs,
  Nodejs,
  Reactjs,
  Redux,
  Nestjs,
  Nextjs,
} from "../technologies/index";
const MainContent = () => (
  <main id="home-main">
    <section id="home-main-section">
      <div className="about_section">
        <h3>
          <i className="fas fa-user-tie" />
          <FormattedMessage id="home.summary" />
        </h3>
        <p>
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
            <span className="education_list_year">2019 - 2020 :</span>
            <p className="education_list_desc">
              Obtention du Baccalauréat Science Expérimentale.
            </p>
          </li>
          <li>
            <span className="education_list_year">2018 - 2019 :</span>
            <p className="education_list_desc">
              Licence appliqué en réseaux informatique au sein de
              <b>
                l’Institut Supérieur d’Informatique et de Techniques des
                communication(ISIT’Com)– Hammam Sousse
              </b>
              .
            </p>
          </li>
          <li>
            <span className="education_list_year">2015 - 2016 :</span>
            <p className="education_list_desc">
              Obtention du Baccalauréat en Science Expérimentale.
            </p>
          </li>
        </ul>
      </div>
      <div className="about_section">
        <h3>
          <i className="fas fa-business-time" />
          <FormattedMessage id="home.experience" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet
          id odio, deserunt eos nulla sint recusandae doloribus! Qui labore
          porro consequatur facere dolorum? Tempore temporibus dolores nesciunt
          placeat officiis. Et inventore blanditiis, consequuntur non vero
          expedita asperiores deserunt laboriosam voluptatum quibusdam nihil
          incidunt odio necessitatibus aut maxime, nobis possimus reprehenderit
          earum, esse ea sunt. Beatae nobis illo distinctio. Distinctio.
          Voluptas reiciendis dolore, consequatur tenetur culpa eveniet
          repudiandae reprehenderit fugit, sapiente sed corporis? Sint incidunt
          eum culpa, impedit quidem inventore officiis omnis quas aut eveniet
          necessitatibus quisquam exercitationem vero harum? Modi ut facilis
          tenetur ab. Molestiae voluptatum molestias voluptate quam ipsa ipsam
          pariatur? Aliquam nam eligendi temporibus iure laudantium
        </p>
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
            <ES6 />
            <TypeScript />
            <Html5 />
            <Css3 />
          </div>
        </div>
        <div className="skills-container">
          <h4>
            <FormattedMessage id="home.skills.db" />
          </h4>
          <div className="skills-list">
            <MongoDB />
          </div>
        </div>
        <div className="skills-container">
          <h4>
            <FormattedMessage id="home.skills.fl" />
          </h4>
          <div className="skills-list">
            <Expressjs />
            <Reactjs />
            <Nodejs />
            <Redux />
            <Nestjs />
            <Nextjs />
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h4>
          <FormattedMessage id="home.skills.design" />
        </h4>
        <div className="skills-list">
          <div
            className="skills"
            style={{
              color: "#ec74ee",
              backgroundColor: "#ec74ee2e",
              borderColor: "#ec74ee",
            }}
          >
            Adobe XD
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h4>
          <FormattedMessage id="home.skills.col" />
        </h4>
        <div className="skills-list">
          <div
            className="skills"
            style={{
              color: "#1b1f23",
              backgroundColor: "#1b1f232e",
              borderColor: "#1b1f23",
            }}
          >
            Github
          </div>

          <div
            className="skills"
            style={{
              color: "#f49e2d",
              backgroundColor: "#f49e2d2e",
              borderColor: "#f49e2d",
            }}
          >
            Gitlab
          </div>
          <div
            className="skills"
            style={{
              color: "#2580f7",
              backgroundColor: "#2580f72e",
              borderColor: "#2580f7",
            }}
          >
            Jira
          </div>
          <div
            className="skills"
            style={{
              color: "#ca4059",
              backgroundColor: "#ca40592e",
              borderColor: "#ca4059",
            }}
          >
            Slack
          </div>
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
              <span className="languages-degree">80%</span>
            </div>
            <div
              className="languages-degree-prog"
              style={{ width: "100%", borderRadius: "0.25rem" }}
            >
              <div style={{ width: "80%" }}></div>
            </div>
          </li>
          <li>
            <div className="languages-degree-info">
              <span>
                <FormattedMessage id="home.languages.en" />
              </span>
              <span className="languages-degree">60%</span>
            </div>
            <div
              className="languages-degree-prog"
              style={{ width: "100%", borderRadius: "0.25rem" }}
            >
              <div style={{ width: "60%" }}></div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </main>
);

export default MainContent;
