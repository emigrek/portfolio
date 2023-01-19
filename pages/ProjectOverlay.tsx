import { useRecoilValue } from 'recoil'
import { pageState } from '../atoms/page';
import { projectsState } from '../atoms/projects'
import Project from './Project';
import SidebarCloseButton from './SidebarCloseButton';

function ProjectOverlay() {
  const projects = useRecoilValue(projectsState);
  const page = useRecoilValue(pageState);

  return (
    <div className={
      `
        h-[15%] lg:h-[10%] w-full relative bg-blue-500 transition duration-500 ease-in-out
        ${page.nav ? 'h-[15%] lg:h-[10%]' : 'h-[0%] lg:h-[0%]'}
      `
    }>
      
      <div className="absolute bottom-0 top-0 right-0 bg-gradient-to-r from-transparent to-blue-500 h-full w-10 z-10"></div>
      <div className="w-full h-full flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent">
        <div className='h-[75%] px-2 space-x-3 select-none flex flex-row w-full'>
          {
            projects?.filter(project => project.pinned).map(project => (
              <Project key={project?._id} project={project}/>
            ))
          }
          {
            projects?.filter(project => !project.pinned).map(project => (
              <Project key={project?._id} project={project}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectOverlay