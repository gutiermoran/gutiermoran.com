import { Technology } from "./technology.model";

export interface ExperienceItem {
    position: string;
    company: string;
    start: string;
    end?: string;
    description: string;
    place: string;
    stack: Array<Technology>;
}