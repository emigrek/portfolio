import { projectsState } from "@/atoms/projects";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";

const useSortedProjects = () => {
    const projects = useRecoilValue(projectsState);

    const sorted = useMemo(() => {
        const copy = projects ? [...projects] : [];
        return copy
            .sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime())
            .sort((a, b) => Number(b.pinned) - Number(a.pinned));
    }, [projects]);

    return sorted;
}

export default useSortedProjects;