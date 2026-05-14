import puter from "@heyputer/puter.js";

const PROJECTS_STORAGE_KEY = "roomify_projects";

export const signIn = async () => await puter.auth.signIn();
export const signOut = async () => puter.auth.signOut();
export const getCurrentUser = async () => {
  try {
    return await puter.auth.getUser();
  } catch (e) {
    return null;
  }
};

export const createProject = async ({ item, visibility }) => {
  if (typeof window === "undefined") {
    return item;
  }

  const existing = window.localStorage.getItem(PROJECTS_STORAGE_KEY);
  const projects = existing ? JSON.parse(existing) : [];
  const saved = { ...item, visibility };
  projects.unshift(saved);
  window.localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  return saved;
};

export const getProjects = async () => {
  if (typeof window === "undefined") {
    return [];
  }

  const existing = window.localStorage.getItem(PROJECTS_STORAGE_KEY);
  return existing ? JSON.parse(existing) : [];
};