import React from 'react'
import { Project as ProjectType } from '@/typings'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'
import { openInNewTab } from '@/utils/openInNewTab';
import SkillImage from '@/components/SkillImage';
import { AiFillGithub, AiFillPushpin } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import cn from '@/utils/cn';

type Props = {
    project: ProjectType
}

function Project({ project }: Props) {
    const setProjectIframeUrl = useSetRecoilState(projectIframeState);
    const projectIframe = useRecoilValue(projectIframeState);
    const active = project?._id == projectIframe?._id;

    const handleProjectClick = (project: ProjectType) => {
        setProjectIframeUrl(project);
    };

    return (
        <div
            onClick={() => handleProjectClick(project)} key={project?._id}
            className={cn(active ? 'bg-black/60' : 'bg-black/40', 'cursor-pointer relative flex gap-4 min-w-[200px] px-3 py-1 lg:px-4 hover:bg-black/30 shadow-md backdrop-blur-3xl rounded-lg justify-around align-middle items-center transition-all')}
        >
            <div className='flex flex-col items-center justify-start w-full text-white'>
                <div className='flex flex-row items-center justify-start w-full font-semibold text-left'>
                    {project.title}
                </div>
                <div className='w-full flex justify-start items-center text-left flex-row text-[0.7rem] text-white/50'>
                    {project.type ? project.type : "Technologies"}
                </div>
                <div className="flex flex-row justify-start w-full gap-1 rounded-lg">
                    {
                        project.skills.map(skill => {
                            return (<SkillImage key={skill._id} skill={skill} mini={true} />)
                        })
                    }
                </div>
            </div>
            <div className='flex items-center gap-1'>
                {project.url ? (
                    <a onClick={() => openInNewTab(project.url!)} className='font-medium cursor-pointer text-white/50'>
                        <BiLinkExternal className='w-6 h-6 text-white' />
                    </a>
                ) : null}
                {project.repo ? (
                    <a onClick={() => openInNewTab(project.repo!)} className='font-medium cursor-pointer text-white/50'>
                        <AiFillGithub className='w-6 h-6 text-white' />
                    </a>
                ) : null}
            </div>
            {project.pinned ? (
                <div className='absolute top-[-5%] right-[-3%] flex items-center justify-center rounded-full bg-fuchsia-500 p-1 shadow-lg'>
                    <AiFillPushpin className='w-4 h-4 text-white rounded-full' />
                </div>
            ) : null}
        </div>
    )
}

export default Project