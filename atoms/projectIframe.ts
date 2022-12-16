import { atom } from "recoil";
import { Project } from "../typings";

export const projectIframeState = atom<Project | null>({
    key: 'projectIframe',
    default: null
}); 