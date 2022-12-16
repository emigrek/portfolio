import React from 'react'
import { Project as ProjectType } from '../typings'
import { CodeBracketSquareIcon, LinkIcon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectIframeState } from '../atoms/projectIframe'
import Image from 'next/image'
import { urlFor } from '../sanity'
import Progress from './Progress';

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

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div 
            onClick={() => handleProjectClick(project)} key={project?._id} 
            className={`
                relative flex gap-4 min-w-[200px] py-2 px-4 bg-black/25 shadow-lg backdrop-blur-3xl rounded-lg justify-around align-middle items-center transition-all
                ${active ? 'bg-black/30' : 'bg-black/50'}
            `}  
        >
            <div className='cursor-pointer font-medium text-white flex flex-col justify-start w-full items-center space-y-1'>
                <div className='text-md w-full flex justify-start items-center text-left flex-row'>
                    {project?.title}
                </div>
                <div className="flex w-full flex-row justify-start gap-2 rounded-lg bg-black/10 p-1">
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
            <div className='flex items-center'>
                { project?.url ? (
                    <div onClick={() => handleWebClick(project)} className='cursor-pointer font-medium text-white/50'><LinkIcon className='w-5 h-5 text-white'/></div>      
                ) : '' }
                { project?.repo ? (
                    <div onClick={() => handleSourceClick(project)} className='cursor-pointer font-medium text-white/50'><CodeBracketSquareIcon className='w-5 h-5 text-white'/></div>      
                ) : '' } 
            </div>
        </div>
    )
}

export default Project