import { atom } from "recoil";
import { Skill } from "../typings";

export const skillsState = atom<Skill[] | null>({
    key: 'skills',
    default: []
}); 