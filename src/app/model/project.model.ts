import { Technology } from "./technology.model";

export interface Project {
    name: string;
    description: string;
    technologies: Array<Technology>;
    image: string;
    isMain: boolean;
    codeLink: string;
}