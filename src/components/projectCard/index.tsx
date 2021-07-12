import { useState } from "react";

const ProjectCard = ({
  /*projectImgSrc,*/ projectType,
  projectTitle,
  projectDesc,
  technologieList,
  projectWebSite,
  github,
}: any) => {
  //const [seeMore, setSeeMore] = useState<boolean>(false);

  return (
    <div className="project-card">
      <div className="project-img-container">
        {<img src="/images/portfolio-website-image.png" />}
      </div>
      <div className="project-content">
        <h3 className="project-title">{projectTitle}</h3>
        <p className="project-description">{projectDesc}</p>

        {technologieList && (
          <div className="project-technologies">
            <h4 style={{ fontWeight: "bold" }}>Technologies : </h4>
            {technologieList?.map((t: string, i: string) => (
              <div key={i}>{t}</div>
            ))}
          </div>
        )}
        <div className="project-external-link">
          <h4 style={{ fontWeight: "bold" }}>Preview : </h4>
          <div className="project-github">
            {github.isNotPrivate ? (
              <div className="project-github-public">
                <a
                  style={{ color: "#3fb950" }}
                  href={github.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" style={{ marginRight: "3px" }} />
                  see on github
                </a>
              </div>
            ) : (
              <div className="project-github-private">
                <i
                  className="fab fa-github"
                  style={{ color: "grey", marginRight: "3px" }}
                />
                this project is private on github
              </div>
            )}
          </div>
          {projectWebSite && (
            <div className="project-website">
              <i
                className="fas fa-globe-africa"
                style={{ marginRight: "3px" }}
              />
              {projectWebSite}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
