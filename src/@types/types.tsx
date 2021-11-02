export type projectType = {
  type: string;
  name: string;
  description: string;
  task: [string];
  technologie: [techType];
  website?: string;
  status: string;
  owner: string;
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

export type techType = {
  _id?: string;
  name: string;
  color: string;
};

export type ownerType = { _id?: string; name: string; color: string };
