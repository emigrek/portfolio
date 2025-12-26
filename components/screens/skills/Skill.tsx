import React, { FC, HTMLAttributes } from "react";
import { Skill as SkillType } from "@/typings";
import SkillImage from "@/components/screens/skills/SkillImage";
import cn from "@/utils/cn";

interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  skill: SkillType;
}

const Skill: FC<SkillProps> = ({ skill, className, ...props }) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center w-full gap-2 md:gap-4 rounded-md shadow-md h-28 md:h-40 bg-neutral-900/70 backdrop-blur-sm border-b-4`,
        className
      )}
      style={{ borderColor: skill.color }}
      {...props}
    >
      <SkillImage image={skill.image} color={skill.color} />
      <div className="flex flex-col text-center">
        <div className="text-[0.7rem] font-medium sm:text-sm md:text-base text-neutral-200">
          {skill?.title}
        </div>
        <div className="text-[0.65rem] md:text-sm text-neutral-400">
          {skill?.category}
        </div>
      </div>
    </div>
  );
};

export default Skill;
