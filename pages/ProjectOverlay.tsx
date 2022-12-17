import { useRecoilValue } from 'recoil'
import { projectsState } from '../atoms/projects'
import Project from './Project';

function ProjectOverlay() {
  const projects = useRecoilValue(projectsState);

  return (
    <div className="h-[15%] lg:h-[10%] w-full relative">
      <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent to-blue-500 h-full w-14 z-10"></div>
      <div className="w-full h-full flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent">
        <div className='h-[75%] px-2 space-x-3 select-none flex flex-row w-full'>
          {
            projects?.map(project => (
              <Project key={project?._id} project={project}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectOverlay