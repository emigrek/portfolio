import { skillsState } from "@/atoms/skills";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

const useSkillCategories = () => {
    const skills = useRecoilValue(skillsState);

    const skillCategories = useMemo(() => {
        const categories = skills?.map(skill => skill?.category)
        return [...new Set(categories)]
    }, [skills]);

    return skillCategories;
}

export default useSkillCategories;