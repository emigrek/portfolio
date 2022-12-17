import React from 'react'
import { Project as ProjectType } from '../typings'
import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon, LinkIcon } from '@heroicons/react/24/solid';
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
                cursor-pointer relative flex gap-4 min-w-[200px] py-1 px-3 lg:py-3 lg:px-4 bg-black/25 hover:bg-black/30 shadow-xl backdrop-blur-3xl rounded-lg justify-around align-middle items-center transition-all
                ${active ? 'bg-black/30' : 'bg-black/40'}
            `}  
        >
            <div className='text-white flex flex-col justify-start w-full items-center space-y-1'>
                <div className='text-md font-medium w-full flex justify-start items-center text-left flex-row'>
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
                    <div onClick={() => handleWebClick(project)} className='cursor-pointer font-medium text-white/50'><ArrowTopRightOnSquareIcon className='w-6 h-6 text-white'/></div>      
                ) : '' }
                { project?.repo ? (
                    <div onClick={() => handleSourceClick(project)} className='cursor-pointer font-medium text-white/50'><CodeBracketSquareIcon className='w-6 h6 text-white'/></div>      
                ) : '' } 
            </div>
        </div>
    )
}

export default Project