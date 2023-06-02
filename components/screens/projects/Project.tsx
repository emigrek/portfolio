import React, { FC } from 'react'
import { Project as ProjectType } from '@/typings'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import cn from '@/utils/cn';
import PinIndicator from '@/components/screens/projects/PinIndicator';
import SkillImage from '@/components/screens/skills/SkillImage';
import { pageState } from '@/atoms/page';

type ProjectProps = {
    project: ProjectType
}

const Project: FC<ProjectProps> = ({ project }) => {
    const setPage = useSetRecoilState(pageState);
    const setProjectIframeUrl = useSetRecoilState(projectIframeState);

    const projectIframe = useRecoilValue(projectIframeState);
    const active = project?._id == projectIframe?._id;

    const handleProjectClick = (project: ProjectType) => {
        setPage(state => ({ ...state, projectsDrawer: false }));
        setProjectIframeUrl(project);
    };

    return (
        <button
            key={project?._id}
            onClick={() => handleProjectClick(project)}
            className={
                cn(
                    active ? 'bg-black/50' : 'bg-black/40',
                    'cursor-pointer relative flex px-2 py-1 w-full hover:bg-black/30 rounded-lg items-center transition-all justify-between'
                )
            }
        >
            <div className='flex flex-col justify-start text-white'>
                <div className='font-medium text-left'>
                    {project.title}
                </div>
                <div className='text-xs text-left text-white/50'>
                    {project.type ? project.type : "Technologies"}
                </div>
                <div className="flex flex-row justify-start gap-1 mt-1">
                    {
                        project.skills.map(skill => (
                            <SkillImage key={skill._id} image={skill.image} color={skill.color} mini />
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center gap-1'>
                {
                    project.url && (
                        <a href={project.url} rel="noreferrer" target="_blank" className='cursor-pointer text-white/50'>
                            <BiLinkExternal className='w-6 h-6 text-white' />
                        </a>
                    )
                }
                {
                    project.repo && (
                        <a href={project.repo} rel="noreferrer" target="_blank" className='cursor-pointer text-white/50'>
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
        </button>
    )
}

export default Project