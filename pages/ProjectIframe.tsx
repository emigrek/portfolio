import { CodeBracketSquareIcon, CommandLineIcon, CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pageInfoState } from '../atoms/pageInfo';
import { projectIframeState } from '../atoms/projectIframe';
import Button from './Button';

function ProjectIframe() {
  const projectIframe = useRecoilValue(projectIframeState);
  const pageInfo = useRecoilValue(pageInfoState);

  if(!projectIframe) return (
    <div className="aspect-video w-full h-[85%] lg:h-[90%] bg-blue-500">
      <div className="relative flex flex-col space-y-5 items-center justify-center w-full h-full opacity-80">
        <div className="absolute top-[40%] bg-black/30 px-2 py-4 rounded-lg min-w-[200px] h-20"></div>
        <CursorArrowRaysIcon className='w-44 h-44 text-white z-[10]'/>
        <div className="text-2xl lg:text-4xl text-white">Select project to see preview</div>
        {
          pageInfo?.github ? (
            <Button href={pageInfo?.github} className="group text-white/60 hover:text-white backdrop-blur-lg space-x-2 border-b-2 border-transparent transition-all hover:border-blue-400">
              <div className="font-normal">
                Visit my Github for source
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-white/60 group-hover:fill-white transition-colors' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
            </Button>
          ) : ''
        }
      </div>
    </div>
  )

  if(!projectIframe?.url) return (
    <div className="aspect-video w-full h-[85%] lg:h-[90%] bg-blue-500">
      <div className="flex flex-col space-y-5 items-center justify-center w-full h-full opacity-80">
        <CommandLineIcon className='w-44 h-44 text-white'/>
        <div className="text-2xl lg:text-4xl text-white">This project has no website</div>
        {
          projectIframe?.repo ? (
            <Button href={projectIframe.repo} className="text-white/60 hover:text-white backdrop-blur-lg space-x-2 border-b-2 border-transparent transition-all hover:border-blue-400">
              <div className="font-normal">
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
    <iframe src={projectIframe?.url} className="aspect-video w-full h-[85%] lg:h-[90%]"></iframe>
  )
}

export default ProjectIframe