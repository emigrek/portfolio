import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useRecoilValue } from 'recoil'
import { projectIframeState } from '../atoms/projectIframe';
import Button from './Button';

function ProjectIframe() {
  const projectIframe = useRecoilValue(projectIframeState);

  if(!projectIframe) return (
    <div className="aspect-video w-full h-[86%]">
      <div className="flex flex-col space-y-3 items-center justify-center w-full h-full bg-blue-500">
        <div className="text-2xl lg:text-4xl font-bold text-white">Select project to see preview</div>
      </div>
    </div>
  )

  if(!projectIframe?.url) return (
    <div className="aspect-video w-full h-[86%]">
      <div className="flex flex-col space-y-3 items-center justify-center w-full h-full bg-blue-500">
        <div className="text-2xl lg:text-4xl font-bold text-white">
          This project has no preview
        </div> 
        {
          projectIframe?.repo ? (
            <Button href={projectIframe.repo} className="text-white/60 font-medium hover:text-white backdrop-blur-lg space-x-2 border-b-2 border-transparent transition-all hover:border-white">
              <div className="font-medium">
                Visit Github repository instead
              </div>
              <div>
                <CodeBracketSquareIcon className='w-5 h-5'/>
              </div>
            </Button>
          ) : ''
        }
      </div>
    </div>
  )

  return (
    <iframe src={projectIframe?.url} className="aspect-video w-full h-[86%]"></iframe>
  )
}

export default ProjectIframe