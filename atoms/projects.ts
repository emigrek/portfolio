import { atom } from "recoil";
import { Project } from "../typings";

export const projectsState = atom<Project[] | null>({
    key: 'projects',
    default: []
}); 