import Screen from '@/components/ui/Screen/Screen';
import ProjectsSidebar from '@/components/screens/projects/ProjectsSidebar';
import ProjectsNavbar from '@/components/screens/projects/ProjectsNavbar';
import ProjectsDrawer from '@/components/screens/projects/ProjectsDrawer';
import ProjectsIframe from '@/components/screens/projects/ProjectsIframe';

function ProjectsScreen() {
  return (
    <Screen id="projects" className="relative flex">
      <ProjectsSidebar />
      <ProjectsDrawer />
      <div className="w-full flex flex-col lg:w-[calc(100%-theme('spacing.64'))]">
        <ProjectsNavbar />
        <div className="flex items-center justify-center flex-grow md:h-[calc(100%-theme('spacing.20'))] h-[calc(100%-theme('spacing.16'))]">
          <ProjectsIframe />
        </div>
      </div>
    </Screen>
  )
}

export default ProjectsScreen