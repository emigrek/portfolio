import { Project } from "@/typings";
import { useMemo } from "react";
import useSWR from "swr";

const useProjectMarkdown = (project: Project | null) => {
    const githubReadmeUrl = useMemo(() => {
        if (!project?.repo) return null;
        return `https://raw.githubusercontent.com/${project.repo.split('https://github.com/').pop()}/main/README.md`;
    }, [project]);

    return useSWR(
        githubReadmeUrl,
        (url) => fetch(url).then((res) => res.text())
    );
};

export default useProjectMarkdown;