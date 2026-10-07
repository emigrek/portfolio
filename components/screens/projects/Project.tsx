import React, { FC } from 'react'
import { Project as ProjectType } from '@/typings'
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import cn from '@/utils/cn';
import PinIndicator from '@/components/screens/projects/PinIndicator';
import SkillImage from '@/components/screens/projects/SkillImage';

type ProjectProps = {
    project: ProjectType;
    active: boolean;
    onSelect: (project: ProjectType) => void;
}

const Project: FC<ProjectProps> = ({ project, active, onSelect }) => {
    return (
        <div
            className={
                cn(
                    active ? 'bg-black/50' : 'bg-black/40',
                    'relative flex px-2 py-1 w-full hover:bg-black/30 rounded-lg items-center transition-all justify-between'
                )
            }
        >
            <div className='flex flex-col justify-start text-white'>
                {/* The ::after stretches the button over the whole card; links below are layered above it. */}
                <button
                    type="button"
                    onClick={() => onSelect(project)}
                    aria-current={active || undefined}
                    className='font-medium text-left after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-white/50'
                >
                    {project.title}
                </button>
                <div className='text-xs text-left text-white/50'>
                    {project.type ? project.type : "Technologies"}
                </div>
                <div className="flex flex-row justify-start gap-1 mt-1 pointer-events-none">
                    {
                        project.skills.map(skill => (
                            <SkillImage key={skill._id} skill={skill} />
                        ))
                    }
                </div>
            </div>
            <div className='relative flex items-center gap-1'>
                {
                    project.url && (
                        <a href={project.url} rel="noreferrer" target="_blank" aria-label={`${project.title} live site`} className='cursor-pointer text-white/50'>
                            <BiLinkExternal className='w-6 h-6 text-white' />
                        </a>
                    )
                }
                {
                    project.repo && (
                        <a href={project.repo} rel="noreferrer" target="_blank" aria-label={`${project.title} on GitHub`} className='cursor-pointer text-white/50'>
                            <AiFillGithub className='w-6 h-6 text-white' />
                        </a>
                    )
                }
            </div>
            {
                project.pinned && (
                    <PinIndicator />
                )
            }
        </div>
    )
}

export default Project
