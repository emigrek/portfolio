import { Skill } from "@/typings";
import { useMemo, useState } from "react";

const useSkillCategoriesFilter = (skills: Skill[] | null, categories: string[]) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categoryFilteredSkills = useMemo(() => {
        if (!skills) return [];

        return skills
            .filter((skill) => {
                if (activeCategory === null) return true;
                return skill.category === activeCategory;
            })
            .sort((a, b) => a.title.localeCompare(b.title))
            .sort((a, b) => a.category.localeCompare(b.category));
    }, [skills, activeCategory]);

    return {
        activeCategory,
        setActiveCategory,
        categoryFilteredSkills,
    }
};

export default useSkillCategoriesFilter;