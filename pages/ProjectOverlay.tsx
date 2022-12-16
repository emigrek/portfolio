import { useRecoilValue, useSetRecoilState } from 'recoil'
import { projectsState } from '../atoms/projects'
import Project from './Project';

function ProjectOverlay() {
  const projects = useRecoilValue(projectsState);

  return (
    <div className='h-[10%] select-none flex items-center w-full z-30'>
      <div className='w-full mx-3 space-x-4 flex flex-row overflow-x-auto'>
        {
          projects.map(project => (
            <Project project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectOverlay