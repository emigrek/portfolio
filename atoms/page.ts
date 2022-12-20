import { atom } from "recoil";
import { Page } from "../typings";

export const pageState = atom<Page>({
    key: 'page',
    default: {
        nav: true
    }
}); 