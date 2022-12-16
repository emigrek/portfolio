import { useRecoilValue } from 'recoil'
import { projectsState } from '../atoms/projects'
import Project from './Project';

function ProjectOverlay() {
  const projects = useRecoilValue(projectsState);

  return (
    <div className='h-[14%] select-none flex items-center w-full z-30'>
      <div className='w-full h-full px-3 py-4 lg:py-5 space-x-4 flex flex-row overflow-x-auto scrollbar-thin scrollbar-thumb-black/50 scrollbar-track-transparent'>
        {
          projects?.map(project => (
            <Project key={project?._id} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectOverlay