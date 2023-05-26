import { atom } from "recoil";
import { PageInfo } from "@/typings";

export const pageInfoState = atom<PageInfo | null>({
    key: 'pageInfo',
    default: null
}); 