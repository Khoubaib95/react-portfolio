import { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../../components/projectCard/index";
import SEO from "../../components/seo";
import Loader from "../../components/loader/loader";

type project = {
  type: string;
  name: string;
  description: string;
  mission: string;
  technologie: [string];
  website?: string;
  github: {
    isPrivate: boolean;
    githubLink: string;
  };
};
const Project = () => {
  const [isWebTab, setIsWebTab] = useState(true);
  const [webProjects, setWebProject] = useState<[project] | []>([]);
  const [isLoadind, setIsLoadind] = useState(false);
  const [mobileProjects, setMobileProject] = useState<[project] | []>([]);

  useEffect(() => {
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
  }, []);
  return (
    <>
      <SEO title="projects" />
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
        {isLoadind ? (
          <>
            <Loader />
          </>
        ) : isWebTab ? (
          webProjects.map((p: project, i: number) => (
            <ProjectCard key={i} {...p} />
          ))
        ) : (
          mobileProjects.map((p: project, i: number) => (
            <ProjectCard key={i} {...p} />
          ))
        )}
      </main>
    </>
  );
};

export default Project;
