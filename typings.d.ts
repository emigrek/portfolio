import { IconType } from "react-icons";

export type Screen = {
    name: string,
    Icon?: IconType
}

export interface Page {
    navigationDrawer: boolean;
    projectsDrawer: boolean;
    scrollProgress: number;
}

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
    image: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    color: string;
    category: string;
    image: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    type: string;
    url: string | null;
    repo: string | null;
    skills: Skill[];
    pinned: boolean;
}

export interface PageInfo extends SanityBody {
    _type: "page";
    avatar: Image;
    name: string,
    github: string,
    target: string,
    description: string,
    birthday: Date,
    city: string,
    country: string,
    socials: Social[]
}