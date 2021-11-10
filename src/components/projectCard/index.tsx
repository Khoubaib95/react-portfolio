import { Bage } from "../compo/index";
import { techType, ownerType } from "../../@types/types";
import { FormattedMessage } from "react-intl";

const ProjectCard = ({
  img,
  name,
  description,
  task,
  technologie,
  website,
  github,
  status,
  owner,
}: any) => (
  <div className="project-card">
    <div className="project-img-container">
      <img src={img || ""} alt="Not Fount" />
    </div>
    <div className="project-content">
      <h3 className="project-title">{name}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tasks">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.task" /> :
        </h4>
        <ul>
          {task.map((t: string, i: number) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="project-attributes">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.tech" /> :
        </h4>
        <div
          className="project-attributes-value"
          style={{ display: "flex", flexWrap: "wrap", marginLeft: "5px" }}
        >
          {technologie?.map((t: techType) => (
            <Bage key={t._id} color={t.color} name={t.name} />
          ))}
        </div>
      </div>
      <div className="project-attributes">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.status" /> :
        </h4>

        <span className="project-attributes-value">
          {status}{" "}
          {status === "Achieved" && (
            <i
              style={{
                color: "green",
              }}
              className="fas fa-check"
            />
          )}
        </span>
      </div>
      <div className="project-attributes">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.owner" /> :
        </h4>
        <div className="project-attributes-value">
          {owner?.map((o: ownerType) => (
            /* <Tech key={o._id} color={o.color} name={o.name} />*/

            <div key={o._id}>{o.name}</div>
          ))}
        </div>
      </div>
      <div className="project-attributes">
        <h4 style={{ fontWeight: "bold" }}>
          <FormattedMessage id="project.preview" /> :
        </h4>
        <div
          className="project-attributes-value project-attributes-preview-value "
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "5px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", margin: 0, flexWrap: "wrap" }}>
            {github.isPrivate ? (
              <div className="project-github-private" style={{ margin: 0 }}>
                <i
                  className="fab fa-github"
                  style={{ color: "#b9b9b9", marginRight: "3px" }}
                />
                <FormattedMessage id="project.githube.private" />
              </div>
            ) : (
              github.githubProjects.map((p: any) => (
                <div
                  key={p._id}
                  className="project-github-public truncate"
                  style={{ margin: 5 }}
                >
                  <a
                    style={{ color: "inherit" }}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-github"
                      style={{ marginRight: "3px", color: "inherit" }}
                    />
                    {p.name}
                  </a>
                </div>
              ))
            )}
          </div>
          {website && (
            <div className="project-website truncate">
              <a
                style={{ color: "inherit" }}
                href={website}
                target="_blank"
                rel="noreferrer"
              >
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
  </div>
);

export default ProjectCard;
