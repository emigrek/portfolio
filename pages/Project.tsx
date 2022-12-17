import React from 'react'
import { Project as ProjectType } from '../typings'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectIframeState } from '../atoms/projectIframe'
import Image from 'next/image'
import { urlFor } from '../sanity'
import { openInNewTab } from '../utils/openInNewTab';

type Props = {
    project: ProjectType
}

function Project({ project } : Props) {
    const setProjectIframeUrl = useSetRecoilState(projectIframeState);
    const projectIframe = useRecoilValue(projectIframeState);
    const active = project?._id == projectIframe?._id;

    const handleSourceClick = (project: ProjectType) => {
        if(!project?.repo) return;
        openInNewTab(project?.repo);
    };

    const handleWebClick = (project: ProjectType) => {
        if(!project?.url) return;
        openInNewTab(project?.url);
    };

    const handleProjectClick = (project: ProjectType) => {
        setProjectIframeUrl(project);
    };

    return (
        <div 
            onClick={() => handleProjectClick(project)} key={project?._id} 
            className={`
                cursor-pointer relative flex gap-4 min-w-[200px] py-1 px-3 lg:py-3 lg:px-4 bg-black/25 hover:bg-black/30 shadow-md backdrop-blur-3xl rounded-lg justify-around align-middle items-center transition-all
                ${active ? 'bg-black/60' : 'bg-black/40'}
            `}  
        >
            <div className='text-white flex flex-col justify-start w-full items-center space-y-1'>
                <div className='w-full flex justify-start items-center text-left flex-row text-lg'>
                    {project?.title}
                </div>
                <div className="flex w-full flex-row justify-start gap-2 rounded-lg">
                    {
                        project?.skills?.map(skill => {
                            const src = skill?.image && urlFor(skill?.image).width(128).height(128).url();

                            return (
                                <div key={skill?._id}>
                                    <Image alt={`${project?.title}-skill-image-${skill?.title}`} unoptimized loader={() => src} src={src} width={128} height={128} className="w-6 h-6 lg:w-6 lg:h-6 relative"/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className='flex items-center gap-1'>
                { project?.url ? (
                    <div onClick={() => handleWebClick(project)} className='cursor-pointer font-medium text-white/50'>
                        <ArrowTopRightOnSquareIcon className='w-6 h-6 text-white'/>
                    </div>      
                ) : '' }
                { project?.repo ? (
                    <div onClick={() => handleSourceClick(project)} className='cursor-pointer font-medium text-white/50'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>      
                ) : '' } 
            </div>
        </div>
    )
}

export default Project