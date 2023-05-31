import { Skill } from "@/typings";
import { useMemo, useState } from "react";

const useSkillCategoriesFilter = (skills: Skill[] | null, categories: string[]) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categoryFilteredSkills = useMemo(() => {
        if (!skills) return [];

        if (!activeCategory) return skills;

        return skills.filter(skill => skill.category === activeCategory);
    }, [skills, activeCategory]);

    return {
        activeCategory,
        setActiveCategory,
        categoryFilteredSkills,
    }
};

export default useSkillCategoriesFilter;