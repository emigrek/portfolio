import React from 'react'
import Category from '@/components/screens/skills/Category';
import useSkillCategories from '@/hooks/useSkillCategories';
import { useRecoilValue } from 'recoil';
import { skillsState } from '@/atoms/skills';
import Skill from '@/components/screens/skills/Skill';
import useSkillCategoriesFilter from '@/hooks/useSkillCategoriesFilter';

function Skills() {
  const skills = useRecoilValue(skillsState);
  const skillCategories = useSkillCategories();
  const { activeCategory, setActiveCategory, categoryFilteredSkills } = useSkillCategoriesFilter(skills, skillCategories);

  const handleCategoryClick = (category: string | null) => {
    if (category == activeCategory) {
      setActiveCategory(null);
      return;
    }

    setActiveCategory(category);
  }

  return (
    <div className="max-w-5xl w-full mt-20 md:mt-28 z-[1] flex flex-col gap-2 md:gap-8">
      <div className='flex flex-col items-center w-full gap-3 px-4 py-2 md:py-3 md:gap-0 md:flex-row md:justify-between'>
        <div className='flex items-center text-4xl font-medium md:text-5xl'>
          Skills
        </div>
        <div className='relative w-full'>
          <div className="absolute top-0 bottom-0 right-0 z-10 block w-5 h-full md:hidden bg-gradient-to-r from-transparent to-stone-800"></div>
          <div className='flex items-center w-full gap-1 px-1 py-1 overflow-x-auto md:px-0 md:justify-end scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent'>
            <Category active={activeCategory === null} onClick={() => handleCategoryClick(null)}>All</Category>
            {
              skillCategories.map((category) => (
                <Category key={category} active={activeCategory === category} onClick={() => handleCategoryClick(category)}>{category}</Category>
              ))
            }
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-2 px-3 md:grid-cols-6'>
        {
          categoryFilteredSkills.map((skill) => (
            <Skill key={skill.title} skill={skill} />
          ))
        }
      </div>
    </div>
  )
}

export default Skills