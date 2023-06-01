import React from 'react'
import ProjectsIframe from '@/components/screens/projects/ProjectsIframe'
import ProjectsNavbar from '@/components/screens/projects/ProjectsNavbar'
import Screen from '@/components/ui/Screen/Screen';
import ProjectsFloatingButtons from '@/components/screens/projects/ProjectsFloatingButtons';

function ProjectsScreen() {
  return (
    <Screen id="projects" className="relative flex flex-col items-center justify-center">
      <ProjectsNavbar />
      <ProjectsFloatingButtons />
      <ProjectsIframe />
    </Screen>
  )
}

export default ProjectsScreen