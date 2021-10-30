import { Tech, techPropType } from "../../components/technologies/index";
import { FormattedMessage } from "react-intl";

const ProjectCard = ({
  img,
  type,
  name,
  description,
  mission,
  technologie,
  website,
  github,
}: any) => (
  <div className="project-card">
    <div className="project-img-container">
      <img
        src={img}
        /*"/images/portfolio-website-image.png"*/ alt="Not Fount"
      />
    </div>
    <div className="project-content">
      <h3 className="project-title">{name}</h3>
      <p className="project-description">{description}</p>
      <div className="project-mission">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.task" /> :
        </h4>
        <p style={{ margin: 0 }}>{mission}</p>
      </div>
      <div className="project-technologies">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.tech" /> :
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "5px" }}>
          {technologie?.map((t: techPropType, i: string) => (
            <Tech key={i} color={t.color} name={t.name} />
          ))}
        </div>
      </div>
      <div className="project-external-link">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.preview" /> :
        </h4>
        <div className="project-github">
          {github.isPrivate ? (
            <div className="project-github-private">
              <i
                className="fab fa-github"
                style={{ color: "#b9b9b9", marginRight: "3px" }}
              />
              <FormattedMessage id="project.githube.private" />
            </div>
          ) : (
            <div className="project-github-public">
              <a
                style={{ color: "inherit" }}
                href={github.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github"
                  style={{ marginRight: "3px", color: "inherit" }}
                />
                <FormattedMessage id="project.githube.public" />
              </a>
            </div>
          )}
        </div>
        {website && (
          <div className="project-website">
            <a style={{ color: "inherit" }} href={website}>
              <i
                className="fas fa-globe-africa"
                style={{ marginRight: "3px" }}
              />
              {website.split("://")[1]}
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
