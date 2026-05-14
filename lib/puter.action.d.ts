export function signIn(): Promise<boolean>;
export function signOut(): Promise<boolean>;
export function getCurrentUser(): Promise<any>;
export function createProject(args: {
  item: {
    id: string;
    name: string;
    sourceImage: string;
    renderedImage: string | null | undefined;
    timestamp: number;
  };
  visibility: string;
}): Promise<any>;
export function getProjects(): Promise<any[]>;
