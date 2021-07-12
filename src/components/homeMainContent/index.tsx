
const MainContent = () => (
  <main id="home-main">
    <section id="home-main-section">
      <div className="about_section">
        <h3>
          <i className="fas fa-user-tie" /> Resumé
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
      <div className="about_section">
        <h3>
          <i className="fas fa-user-graduate" /> Education
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
                {" "}
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
          <i className="fas fa-business-time" /> Experience
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
    <aside className="">
      <h3>Compétences</h3>
      <ul>
        <li>Arabe</li>
        <li>Anglais</li>
        <li>fracais</li>
      </ul>
      <h3>Langues</h3>
      <ul>
        <li>Arabe</li>
        <li>Anglais</li>
        <li>fracais</li>
      </ul>
    </aside>
  </main>
);

export default MainContent;
