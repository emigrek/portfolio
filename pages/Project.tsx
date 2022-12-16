import React from 'react'
import { Project as ProjectType } from '../typings'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectIframeState } from '../atoms/projectIframe'
import Image from 'next/image'
import { urlFor } from '../sanity'
import Progress from './Progress';

type Props = {
    project: ProjectType
}

function Project({ project} : Props) {
    const setProjectIframeUrl = useSetRecoilState(projectIframeState);
    const projectIframe = useRecoilValue(projectIframeState);
    const active = project?._id == projectIframe?._id;

    const handleSourceClick = (project: ProjectType) => {
        openInNewTab(project?.repo);
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
                relative flex min-w-[200px] py-2 bg-black/25 shadow-lg backdrop-blur-3xl gap-2 rounded-lg justify-around align-middle items-center transition-all
                ${active ? 'bg-black/25' : 'bg-black/50'}
            `}  
        >
            <div className='font-medium mx-3 text-white flex flex-col justify-start w-full items-center space-y-1'>
                <div className='text-md w-full flex justify-start items-center text-left flex-row'>
                    {project?.title}
                </div>
                <div className="flex w-full flex-row justify-start gap-2 rounded-lg bg-black/30 p-1">
                    {
                        project.skills?.map(skill => (
                            <div key={skill?._id}>
                                <Image alt={`${project?.title}-skill-image-${skill?.title}`} src={urlFor(skill?.image!).url()} width={`100`} height={`100`} className="w-6 h-6 lg:w-6 lg:h-6 relative"/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div onClick={() => handleSourceClick(project)} className='cursor-pointer font-medium text-white/50'><CodeBracketSquareIcon className='w-8 h-8 text-white'/></div>
            <Progress zIndex={-1} color={`#00ff00`} progress={project?.progress}/>        
        </div>
    )
}

export default Project