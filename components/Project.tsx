import React from 'react'
import { Project as ProjectType } from '@/typings'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectIframeState } from '@/atoms/projectIframe'
import { openInNewTab } from '@/utils/openInNewTab';
import { StarIcon } from '@heroicons/react/24/solid';
import SkillImage from '@/components/SkillImage';
import { twMerge } from 'tailwind-merge';

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
            className={twMerge(active ? 'bg-black/60' : 'bg-black/40', 'cursor-pointer relative flex gap-4 min-w-[200px] px-3 py-1 lg:px-4 hover:bg-black/30 shadow-md backdrop-blur-3xl rounded-lg justify-around align-middle items-center transition-all')}
        >
            <div className='flex flex-col items-center justify-start w-full text-white'>
                <div className='flex flex-row items-center justify-start w-full font-semibold text-left'>
                    {project?.title}
                </div>
                <div className='w-full flex justify-start items-center text-left flex-row text-[0.7rem] text-white/50'>
                    {project?.type ? project?.type : "Technologies"}
                </div>
                <div className="flex flex-row justify-start w-full gap-1 rounded-lg">
                    {
                        project?.skills?.map(skill => {
                            return (<SkillImage key={skill._id} skill={skill} mini={true} />)
                        })
                    }
                </div>
            </div>
            <div className='flex items-center gap-1'>
                {project?.url ? (
                    <a onClick={() => openInNewTab(project.url!)} className='font-medium cursor-pointer text-white/50'>
                        <ArrowTopRightOnSquareIcon className='w-6 h-6 text-white' />
                    </a>
                ) : null}
                {project?.repo ? (
                    <a onClick={() => openInNewTab(project.repo!)} className='font-medium cursor-pointer text-white/50'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                ) : null}
            </div>
            {project?.pinned ? (
                <div className='absolute top-[-5%] right-[-3%] flex items-center justify-center rounded-full bg-fuchsia-500 p-1 shadow-lg'>
                    <StarIcon className='w-4 h-4 text-white rounded-full' />
                </div>
            ) : null}
        </div>
    )
}

export default Project