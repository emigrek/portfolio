import { skillsState } from "@/atoms/skills";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

const useSkillCategories = () => {
    const skills = useRecoilValue(skillsState);

    const skillCategories = useMemo(() => {
        const categories = skills?.map(skill => skill?.category)
        return [...new Set(categories)]
            .sort((a, b) => a.localeCompare(b));
    }, [skills]);

    return skillCategories;
}

export default useSkillCategories;