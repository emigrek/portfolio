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

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    color: string;
    category: string;
    image: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    url: string | null;
    repo: string | null;
    progress: number;
    skills: Skill[]
}

export interface PageInfo extends SanityBody {
    _type: "page";
    name: string,
    github: string,
    target: string
}