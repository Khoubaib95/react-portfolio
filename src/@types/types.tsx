export type projectType = {
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

export type projectPropType = {
  mobileProjects: [projectType] | [] | null;
  webProjects: [projectType] | [] | null;
  setMobileProject: any;
  setWebProject: any;
};
