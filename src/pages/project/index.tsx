import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../../components/projectCard/index";
import SEO from "../../components/seo";
import { Loader } from "../../components/loader/loader";
import { projectType, projectPropType } from "../../@types/types";

const Project = (props: projectPropType) => {
  const { mobileProjects, setMobileProject, webProjects, setWebProject } =
    props;
  const [isWebTab, setIsWebTab] = useState(true);
  const [isLoadind, setIsLoadind] = useState(false);

  useEffect(() => {
    if (webProjects === null || mobileProjects === null) {
      setIsLoadind(true);
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/project`)
        .then((res) => {
          setWebProject(
            //@ts-ignore
            res.data.filter((p: any) => p.type === "WEB")
          );
          setMobileProject(
            //@ts-ignore
            res.data.filter((p: any) => p.type === "MOBILE")
          );
          setIsLoadind(false);
        })
        .catch((e) => {});
    }
  }, [mobileProjects, mobileProjects]);
  return (
    <>
      <SEO title="Projects" />
      <main id="project-main">
        <div className="project-header-type">
          <div className="project-type">
            <div
              id="project-type-web"
              className={isWebTab ? "project-type-active" : ""}
              onClick={() => {
                setIsWebTab(true);
              }}
            >
              <span>Web</span>
            </div>
            <div
              id="project-type-mobile"
              className={isWebTab ? "" : "project-type-active"}
              onClick={() => {
                setIsWebTab(false);
              }}
            >
              <span>Mobile</span>
            </div>
          </div>
          <div
            style={{ left: isWebTab ? "0%" : "50%" }}
            className="project-type-underline"
          ></div>
        </div>
        <div className="projects-list-container">
          {isLoadind ? (
            <Loader height="60px" />
          ) : isWebTab ? (
            webProjects?.map((p: projectType, i: number) => (
              <ProjectCard key={i} {...p} />
            ))
          ) : (
            mobileProjects?.map((p: projectType, i: number) => (
              <ProjectCard key={i} {...p} />
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Project;
